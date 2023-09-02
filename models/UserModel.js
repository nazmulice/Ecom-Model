const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phoneNumber: { type: String },
});

const UserModal = mongoose.model('users', ModelSchema);
module.exports = UserModal;


phoneNumber: String, optional