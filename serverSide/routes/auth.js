const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_PASS
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(401).json("Wrong credentials!");
    }
    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_PASS
    );
    const pass = hashedPass.toString(CryptoJS.enc.Utf8);
    if (req.body.password !== pass) {
      res.status(401).json("Wrong credentials!");
    }
    const { password, ...others } = user._doc;

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/logout", (req, res, next) => {
  console.log("HELOO");
  req.headers.token = "";
  res.status(200).json("Logged Out Successfully!");
});

module.exports = router;
