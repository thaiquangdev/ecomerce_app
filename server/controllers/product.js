const Product = require("../models/product");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw new Error("Missing input");
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
    const newProduct = await Product.create(req.body);
    res.status(200).json({
      success: newProduct ? true : false,
      createProduct: newProduct ? newProduct : "Can not create new Product",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  try {
    const response = await Product.findById(pid);
    return res.status(200).json({
      success: response ? true : false,
      productData: response ? response : "can not get product",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getProducts = asyncHandler(async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFiedlds = ["page", "limit", "sort", "fields"];
    excludedFiedlds.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    //fillter
    let query = Product.find(JSON.parse(queryStr));

    //sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //panigation
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const productCount = await Product.countDocuments();
    const numberOfPages = Math.ceil(productCount / limit);
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      if (skip > productCount) {
        throw new Error("This page does not exists");
      }
    }
    const response = await query;
    return res.status(200).json({
      success: response ? true : false,
      currentPage: page,
      numberOfPages: numberOfPages,
      productData: response ? response : "can not get all product",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  try {
    if (!pid || Object.keys(req.body).length === 0)
      throw new Error("Missing input");
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
    const updateProduct = await Product.findByIdAndUpdate(pid, req.body, {
      new: true,
    });
    res.status(200).json({
      success: updateProduct ? true : false,
      createProduct: updateProduct
        ? updateProduct
        : "Can not update new Product",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  try {
    if (!pid || Object.keys(req.body).length === 0)
      throw new Error("Missing input");
    const deleteProduct = await Product.findByIdAndDelete(pid);
    res.status(200).json({
      success: updateProduct ? true : false,
      createProduct: deleteProduct
        ? deleteProduct
        : "Can not delete new Product",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const ratings = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, comment, pid } = req.body;
  try {
    if (!star || !pid) throw new Error("Missing input!");
    const ratingProduct = await Product.findById(pid);
    const alreadytRating = ratingProduct?.ratings?.find(
      (item) => item.postedBy.toString() === _id
    );
    if (alreadytRating) {
      await Product.updateOne(
        {
          ratings: { $elemMatch: alreadytRating },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      await Product.findByIdAndUpdate(
        pid,
        {
          $push: {
            ratings: {
              star: star,
              comment,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }

    // sum rating
    const getAllrating = await Product.findById(prodId);
    let totalRating = getAllrating.ratings.length;
    let ratingSum = getAllrating.ratings.reduce(
      (prev, curr) => prev + curr.star,
      0
    );
    let actualRating = Math.round(ratingSum / totalRating);
    let finalProduct = await Product.findByIdAndUpdate(
      pid,
      { totalRating: actualRating },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      finalProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const uploadImagesProduct = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  try {
    if (!req.files) throw new Error("Missing inputs");
    const response = await Product.findByIdAndUpdate(
      pid,
      {
        $push: { images: { $each: req.files.map((item) => item.path) } },
      },
      { new: true }
    );
    return res.status(200).json({
      status: response ? true : false,
      updateProduct: response ? response : "can not upload images product",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  ratings,
  uploadImagesProduct,
};
