const express = require("express")
const app = express()
const PORT = 8080 
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//controllers
const authController = require("./controllers/auth")

app.use("/", authController)

app.listen(PORT, ()=>{
  console.log("Servidor Rodando...")
})
