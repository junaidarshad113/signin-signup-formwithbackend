const mongooes = require("mongoose");
const { Schema } = mongooes;
const userSchema = new Schema({
  username: {
    required: true,
    type: String,
    unique: true,
  },
  cnic: {
    required: true,
    type: String,
    max:20,
    unique: true,
    match: [/^[0-9]{5}(-[0-9]{7})(-[0-9]{1})$/],
  },
  email: {
    required: true,
    type: String,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  phone_no: {
    required: true,
    type: Number,
    unique: true,
    match: [/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/],
  },
  password: {
    required: true,
    type: String,
    unique: true,
    match: [/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/],
  },
  confirm_password: {
    required: true,
    type: String,
    unique: true,
    match: [/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/],
  },
});

const user = mongooes.model("user", userSchema);
module.exports = user;
