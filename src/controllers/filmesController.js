const filmes = require("../model/filmes.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 7 || id <= 0) {
      res.send("esse filme não existe no doc")
    }
    console.log(id)    
    res.status(200).send(filmes.find(filmes => filmes.id == id))
}

exports.getByType = (req, res) => { 
  const genero = req.params.genero
  console.log(genero)    
  res.status(200).send(filmes.filter(filme => filme.type == genero))
}

