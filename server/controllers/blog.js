const Blog = require("../models/blog");
const asyncHandler = require("express-async-handler");

const createBlog = asyncHandler(async (req, res) => {
  const { title, description, category } = req.body;
  try {
    if (!title || !description || !category) throw new Error("Missing input");
    const newBlog = await Blog.create(req.body);
    return res.status(200).json({
      success: newBlog ? true : false,
      newBlog: newBlog ? newBlog : "Can not create Blog",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    return res.status(200).json({
      success: getBlogs ? true : false,
      getBlogs: getBlogs ? getBlogs : "can not get all blog",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  try {
    const getBlog = await Blog.findByIdAndUpdate(
      bid,
      { $inc: { numberViews: 1 } },
      { new: true }
    )
      .populate("likes", "firstname lastname")
      .populate("dislikes", "firstname lastname");
    return res.status(200).json({
      success: getBlog ? true : false,
      getBlog: getBlog ? getBlog : "can not get blog",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  try {
    const updateBlog = await Blog.findByIdAndUpdate(bid, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: updateBlog ? true : false,
      updateBlog: updateBlog ? updateBlog : "can not update blog",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  try {
    const deleteBlog = await Blog.findByIdAndDelete(bid);
    return res.status(200).json({
      success: deleteBlog ? true : false,
      deleteBlog: deleteBlog ? deleteBlog : "can not delete blog",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const likeBlog = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { bid } = req.body;
  try {
    const blog = await Blog.findById(bid);
    const alreadyDislike = blog.dislikes.find(
      (item) => item.toString() === _id
    );
    const alreadyLike = blog.likes.find((item) => item.toString() === _id);
    if (alreadyDislike) {
      const response = await Blog.findByIdAndUpdate(
        bid,
        {
          $pull: { dislikes: _id },
          isDisliked: false,
        },
        { new: true }
      );
      return res.status(200).json({
        success: response ? true : false,
        rs: response,
      });
    }
    if (alreadyLike) {
      const response = await Blog.findByIdAndUpdate(
        bid,
        {
          $pull: { likes: _id },
          isLiked: false,
        },
        { new: true }
      );
      return res.status(200).json({
        success: response ? true : false,
        rs: response,
      });
    } else {
      const response = await Blog.findByIdAndUpdate(
        bid,
        {
          $push: { likes: _id },
          isLiked: true,
        },
        { new: true }
      );
      return res.status(200).json({
        success: response ? true : false,
        rs: response,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

const dislikeBlog = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { bid } = req.body;
  try {
    const blog = await Blog.findById(bid);
    const alreadyLike = blog.likes.find((item) => item.toString() == _id);
    const alreadyDislike = blog.dislikes.find((item) => item.toString() == _id);
    if (alreadyLike) {
      const response = await Blog.findByIdAndUpdate(
        bid,
        {
          $pull: { likes: _id },
          isLiked: false,
        },
        { new: true }
      );
      return res.status(200).json({
        success: response ? true : false,
        rs: response,
      });
    }
    if (alreadyDislike) {
      const response = await Blog.findByIdAndUpdate(bid, {
        $pull: { dislikes: _id },
        isDisliked: false,
      });
      return res.status(200).json({
        success: response ? true : false,
        rs: response,
      });
    } else {
      const response = await Blog.findByIdAndUpdate(bid, {
        $push: { dislikes: _id },
        isDisliked: true,
      });
      return res.status(200).json({
        success: response ? true : false,
        rs: response,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

const uploadImagesBlog = asyncHandler(async (req, res) => {
  const { bid } = req.params;
  try {
    if (!req.file) throw new Error("Missing inputs");
    const response = await Blog.findByIdAndUpdate(
      bid,
      {
        image: req.file.path,
      },
      { new: true }
    );
    return res.status(200).json({
      status: response ? true : false,
      updateBlog: response ? response : "can not upload image blog",
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImagesBlog,
};
