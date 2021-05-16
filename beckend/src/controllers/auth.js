const express = require("express")
const router = express.Router()
const User = require("../database/models/User")

router.post("/register", async function(req, res){
  try{
    const email = req.body.email
    const nome = req.body.nome
    const senha = req.body.senha
  
    const user = await User.create({email,nome,senha})
    res.send({user})
  
  
  } catch(err) {
    res.send({msg: "Falha ao registrar"})
  }
})
//Promise

module.exports = router
