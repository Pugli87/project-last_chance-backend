const mongoose = require("mongoose");

const listNotFoodSchema = new mongoose.Schema({
	userId: { type: String, required: true, unique: true },
	peso: { type: Number, required: true },
	altura: { type: Number, required: true },
	edad: { type: Number, required: true },
	pesoDeseado: { type: Number, required: true },
});

const ListNotFood = mongoose.model("ListNotFood", listNotFoodSchema);

module.exports = ListNotFood;
