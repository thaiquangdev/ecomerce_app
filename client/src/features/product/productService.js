import axios from "axios";
import { base_url } from "../../utils/url_server";

const getProducts = async () => {
  const rs = await axios.get(`${base_url}product/`);
  if (rs.data) {
    return rs.data;
  }
};

const getProduct = async (id) => {
  const rs = await axios.get(`${base_url}product/${id}`);
  if (rs.data) {
    return rs.data;
  }
};

const getProductPanigates = async (page, limit) => {
  const rs = await axios.get(`${base_url}product/?page=${page}&limit=${limit}`);
  if (rs.data) {
    return rs.data;
  }
};

const filter = async (
  page,
  limit,
  category,
  colors,
  sizes,
  priceMin,
  priceMax
) => {
  let apiUrl = `${base_url}product/?page=${page}&limit=${limit}&`;
  if (category !== null) {
    apiUrl += `category=${category}&`;
  }
  if (colors !== null) {
    apiUrl += `colors=${colors}&`;
  }
  if (sizes !== null) {
    apiUrl += `sizes=${sizes}&`;
  }
  if (priceMin !== null) {
    apiUrl += `price[gte]=${priceMin}&`;
  }
  if (priceMax !== null) {
    apiUrl += `price[gte]=${priceMax}&`;
  }
  apiUrl = apiUrl.slice(0, -1);
  const rs = await axios.get(apiUrl);
  if (rs.data) {
    return rs.data;
  }
};

const productService = {
  getProducts,
  getProduct,
  getProductPanigates,
  filter,
};

export default productService;
