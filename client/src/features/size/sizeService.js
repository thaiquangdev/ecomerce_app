import axios from "axios";
import { base_url } from "../../utils/url_server";

const getSizes = async () => {
  const rs = await axios.get(`${base_url}size/`);
  if (rs.data) {
    return rs.data;
  }
};

const sizeService = {
  getSizes,
};

export default sizeService;
