const express = require("express");
const router = express.Router();
const User = require("../models/User");

//POST :  ADD A NEW USER TO THE DATABASE
router.post("/add", async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  const user = await newUser.save();
  res.send({ msg: "user added", user });
});
//GET :  RETURN ALL USERS
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send({ msg: "User List", users });
});
//PUT : EDIT A USER BY ID
router.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOneAndUpdate({ _id }, { $set: req.body });
  res.json({ msg: "user edited", user });
});

// DELETE : REMOVE A USER BY ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndDelete({ _id: id });
  res.send({ msg: "contact deleted", contact });
});
module.exports = router;
