import axios from "axios";
import { base_url } from "../../utils/url_server";

const getProducts = async () => {
  const rs = await axios.get(`${base_url}product/`);
  if (rs.data) {
    return rs.data;
  }
};

const productService = {
  getProducts,
};

export default productService;
