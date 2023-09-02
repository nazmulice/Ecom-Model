const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
    quantity: { type: Number, required: true, min: 1 },
});

const CartModal = mongoose.model("carts", ModelSchema);
module.exports = CartModal;
