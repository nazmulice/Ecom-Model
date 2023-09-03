const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const ModelSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  address: { type: String },
  phoneNumber: { type: String },
});


const UserModal = mongoose.model('users', ModelSchema);
module.exports = UserModal;


phoneNumber: String, optional