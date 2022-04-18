const mongooes = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
//signup
exports.createUser = async (req, res, next) => {
  let newuser = {
    username: req.body.username,
    cnic: req.body.cnic,
    email: req.body.email,
    phone_no: req.body.phone_no,
    password: await bcrypt.hash(req.body.password, 10),
    confirm_password: await bcrypt.hash(req.body.password, 10),
  };
  try {
    await User.create(newuser);
    res.status(200).json({
      message: "user added successfully",
    });
  } catch (err) {
    next(err);
  }
};
//signin
exports.signIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email) {
    return res.status(401).json({
      message: "please provide the email",
    });
  }
  if (!password) {
    return res.status(401).json({
      message: "please provide the password",
    });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({
      message:
        "Sorry! this email is not regestered. Please regestered the email ",
    });
  }
  const hash = user.password;
  const isMatched = await bcrypt.compare(password, hash);
  if (!isMatched) {
    return res.status(401).json({
      message: "Sorry! Your password is wrong",
    });
  }
  const token = jwt.sign(
    { user: user },
    "junaidarshad03105640408satti03319123970satti",
    { expiresIn: "1h" }
  );
  res
    .status(200)
    .cookie("token", token, {
      expires: new Date(Date.now() + 40000),
      httpOnly: true,
    })
    .json({
      message : "Login Sucessfully",
     
      
    });
};


