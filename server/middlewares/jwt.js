const jwt = require("jsonwebtoken");

const generalAccessToken = (id, role) => {
  return jwt.sign({ _id: id, role }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
};

const generalRefreshToken = (id) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  generalAccessToken,
  generalRefreshToken,
};
