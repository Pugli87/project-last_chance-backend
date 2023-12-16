// models/ListFoodPrivate.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listFoodPrivateSchema = new Schema({
  userId: { type: String, required: true },
  dailyIntake: { type: Number, required: true },
  nonRecFoods: { type: Array, required: true },
});

const ListFoodPrivate = mongoose.model('ListFoodPrivate', listFoodPrivateSchema);

module.exports = ListFoodPrivate;
