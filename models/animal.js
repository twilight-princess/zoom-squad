const mongoose = require("mongoose")
const { Schema } = mongoose

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true,
      enum: ["male", "female"] 
    },
    age: {
      type: Number,
      required: true
    },
    goodWithCats: boolean,
    goodWithDogs: boolean,
    goodWithYoungKids: boolean,
    goodWithOlderKids: boolean,
})

const animalModel = mongoose.model('Animal')

module.exports = mongoose.model('Animal', animalSchema)