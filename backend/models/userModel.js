const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    tokens:[{
      token:{
        type:String,
        required:true
      }
    }]
  },
  { timestamps: true }
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   console.log(enteredPassword)
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.pre("save", async function (next) {
//   if (!this.isModified) {
//     next();
//   }
//   const salt = bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password,8);
//   console.log(this.password);
//   next()
// });
userSchema.pre('save', async function (next) {

  const user = this




  if (user.isModified('password')) {

      user.password = await bcrypt.hash(user.password, 8)

  }




  next()

})

const User = mongoose.model("User", userSchema);
module.exports = User;
