const mongoose = require("mongoose");

const listNotFoodSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    age: { type: Number, required: true },
    desiredWeight: { type: Number, required: true },
});

const ListNotFood = mongoose.model("ListNotFood", listNotFoodSchema);

module.exports = ListNotFood;
