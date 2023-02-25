const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.loginUser = async function (email, password) {
  if (!email || !password) {
    throw Error("Enter login credentials");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Invalid login credentials");
  }
  //   console.log(user.password);

  //   if (!user.password) {
  //     throw Error("Invalid login credentials");
  //   }
  if (!(password === user.password)) {
    throw Error("Invalid login credentials");
  }

  return user;
};
module.exports = mongoose.model("authentication", userSchema);
