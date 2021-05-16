const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://admin:admin@cluster0.qtupv.mongodb.net/devRoom?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true 
  }).then(()=> console.log("Conectado ao banco de dados")).catch(err => console.log(err))


module.exports = mongoose;