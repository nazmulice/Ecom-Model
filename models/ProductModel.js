const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String},
    price: { type: String, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    imageURL: { type: String },
});

const ProductModal = mongoose.model("products", ModelSchema);
module.exports = UserModal;


