const mongoose = require("mongoose")
const { Schema } = mongoose

const animalSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    type: {
      type: String,
      // required: true
    },
    breed: {
      type: String,
      // required: true
    },
    sex: {
      type: String,
      // required: true,
      enum: ["male", "female"] 
    },
    age: {
      type: Number,
      // required: true
    },
    goodWithCats: Boolean,
    goodWithDogs: Boolean,
    goodWithYoungKids: Boolean,
    goodWithOlderKids: Boolean,
})

const animalModel = mongoose.model('Animal', animalSchema)

module.exports = animalModel