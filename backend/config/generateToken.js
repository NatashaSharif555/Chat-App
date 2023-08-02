const jwt = require("jsonwebtoken");
const generateToken = async (user) => {
  const token = jwt.sign({ _id: user._id }, "natasha");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const obj = {}
module.exports = generateToken;
