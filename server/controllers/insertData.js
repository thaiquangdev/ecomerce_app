const Product = require("../models/product");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const data = require("../data/shop.json");
const categoryData = require("../data/categories");
const prodCategory = require("../models/productCategory");

const fn = async (product) => {
  await Product.create({
    title: product?.productName,
    slug: slugify(product?.productName) + Math.round(Math.random() * 100) + "",
    description: product?.description,
    sku: product?.sku,
    price: parseFloat(product?.price?.replace("$", "")),
    category: product?.categories,
    sizes: product?.sizes,
    quantity: Math.round(Math.random() * 1000),
    sold: Math.round(Math.random() * 100),
    images: product?.images,
    colors: product?.colors,
    ratings: product?.reviews,
  });
};

const insertProduct = asyncHandler(async (req, res) => {
  const promises = [];
  for (let product of data) promises.push(fn(product));
  await Promise.all(promises);
  return res.json("Done!");
});

const fn2 = async (cate) => {
  await prodCategory.create({
    title: cate?.title,
  });
};

const insertCategory = asyncHandler(async (req, res) => {
  const promises = [];
  for (let cate of categoryData) promises.push(fn2(cate));
  await Promise.all(promises);
  return res.json("Done!");
});

module.exports = {
  insertProduct,
  insertCategory,
};
