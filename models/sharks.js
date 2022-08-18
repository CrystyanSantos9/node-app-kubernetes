const mongoose = require("mongoose");

const SharkSchema = mongoose.Schema;

const Shark = SharkSchema({
  name: { type: String, required: true },
  character: { type: String, required: true },
});

//definindo collection 
module.exports = mongoose.model('Shark', Shark)