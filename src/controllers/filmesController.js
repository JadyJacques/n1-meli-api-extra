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
  const genero = req.params.nome;
  const filmesGenero = filmes.filter(filme => filme.genero.indexOf(genero) > -1);
  res.status(200).send(filmesGenero);
};

exports.getFilmesLongos = (req, res) => {
  const filmesLongos = filmes.filter(filme => filme.duration > 120)
  res.status(200).send(filmesLongos);
  console.log(filmesLongos)
};

exports.getByRelease = (req, res) => {
  filmes.forEach(filme => filme.dataLancamento = transformarDataLancamentoEmDate(filme.dataLancamento));

  const dataAtual = new Date();
  const lancamentos = filmes.filter(filme => filme.dataLancamento > dataAtual);
  res.status(200).send(lancamentos);

  function transformarDataLancamentoEmDate(fim){
    const lancamentoSplitado = fim.split('/');
    const lancamento = new Date(lancamentoSplitado[2], lancamentoSplitado[1] - 1, lancamentoSplitado[0]);
    return lancamento;
  };
};