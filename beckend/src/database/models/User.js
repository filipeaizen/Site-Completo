const mongoose = require("../index.js")
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  nome: {
    type: String,
    require: true
  },
  senha: {
    type: String,
    require: true
  }
})

const userModel = mongoose.model("usuarios", userSchema)

module.exports = userModel