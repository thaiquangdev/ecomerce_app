import axios from "axios";
import { base_url } from "../../utils/url_server";

const getUsers = async () => {
  const token = localStorage.getItem("token");
  const rs = await axios.get(`${base_url}user`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  });
  if (rs.data) {
    return rs.data;
  }
};

const userService = {
  getUsers,
};

export default userService;
