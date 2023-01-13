const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now(),
  },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
