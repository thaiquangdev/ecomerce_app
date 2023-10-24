import axios from "axios";
import { base_url } from "../../utils/url_server";

const getProducts = async () => {
  const rs = await axios.get(`${base_url}product/`);
  if (rs.data) {
    return rs.data;
  }
};

const getProductPanigates = async (page) => {
  const rs = await axios.get(`${base_url}product/?page=${page}`);
  if (rs.data) {
    return rs.data;
  }
};

const productService = {
  getProducts,
  getProductPanigates,
};

export default productService;
