const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All Fields");
  }
  const userExists = await User.findOne({ email });
  // console.log(user)
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  // console.log(req.body)
  var user = new User(req.body);
  // console.log(user)
  //   const users = await user.create({
  //     name,
  //     email,
  //     password,
  //     pic,
  //   });
  try {
    await user.save();
    console.log(user);
    res.status(201).send(user);
  } catch (e) {
    res.status(400);
    throw new Error("Faied To Create User");
  }
  //   if (users) {
  //     res.status(201).json({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       pic: user.pic,
  //       token: generateToken(user._id),
  //     });
  //   } else {
  //     res.status(400);
  //     throw new Error("Faied To Create User");
  //   }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  console.log(password);
  if (user) {
    // res.json({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   pic: user.pic,
    //   token: generateToken(user._id),
    // });
    res.status(201).send(user);
  } else {
    res.status(401);
    throw new Error("Invalid Email Or Password");
  }
});
//  /api/user?natasha
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  console.log(keyword);
});
module.exports = { registerUser, authUser, allUsers };
