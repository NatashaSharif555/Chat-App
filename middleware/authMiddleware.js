const jwt = require("jsonwebtoken");
const User = require("../backend/models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  // console.log(user,"user")
  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  try {
    // console.log(req.headers,"h")
    // token = req.headers.authorization.split(" ")[1];
    const token = req.header("Authorization").replace("Bearer", "");
    console.log(token, "tokennnnnn");
    //decodes token id
    // const decoded = jwt.verify(token,"natasha");
    // console.log(decoded, "decode");
    const user = await User.findOne({
      "tokens.token": token,
    });
    console.log(user, "decode");
    req.token = token;
    req.user = user;
    // next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token failed");
    // }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = protect;
