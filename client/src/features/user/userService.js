import axios from "axios";
import { base_url } from "../../utils/url_server";

const register = async (data) => {
  const rs = await axios.post(`${base_url}user/register`, data);
  if (rs.data) {
    return rs.data;
  }
};

const login = async (data) => {
  const rs = await axios.post(`${base_url}user/login`, data);
  if (rs.data) {
    localStorage.setItem("token", JSON.stringify(rs.data.accessToken));
    return rs.data;
  }
};

const userService = {
  register,
  login,
};

export default userService;
