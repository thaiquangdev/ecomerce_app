import axios from "axios";
import { base_url } from "../../utils/url_server";

const getColor = async () => {
  const rs = await axios.get(`${base_url}color/`);
  if (rs.data) {
    return rs.data;
  }
};

const colorService = {
  getColor,
};

export default colorService;
