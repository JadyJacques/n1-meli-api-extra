const express = require("express")
const app = express()

app.all("*", function(req, res, next){
    console.log("opa passamos por aqui, chefia")
    next()
})
//rotas
const index = require("./routes/index")
const filmes = require('./routes/filmesRoute')

app.use('/', index)
app.use("/filmes", filmes)

module.exports = app