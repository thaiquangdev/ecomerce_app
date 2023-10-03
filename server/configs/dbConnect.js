const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    if (connect.connection.readyState === 1) {
      console.log("Db connection is successfully!");
    } else {
      console.log("Db connection is failed");
    }
  } catch (error) {
    console.log("Db connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;
