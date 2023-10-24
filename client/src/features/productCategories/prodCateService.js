import axios from "axios";
import { base_url } from "../../utils/url_server";

const getProductCates = async () => {
  const response = await axios.get(`${base_url}pcategory/`);
  if (response.data) {
    return response.data;
  }
};

const prodCateService = {
  getProductCates,
};

export default prodCateService;
