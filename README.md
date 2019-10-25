# n1-meli-api-extra
Desafios extras dentro das aulas sobre API dentro do Bootcamp da reprograma dentro do Mercado Livre.

# API Filmes

Essa é um API sobre filmes e temos alguns filtros dentro dela (:

## Instalação

    npm install

## Rode a aplicação

    npm start

## Acesse a porta

    http://localhost:4600/

# API Filmes

Lista de exemplo do retorno das rotas.

## GET Lista de Filmes

### Request

`GET /filmes`

    http://localhost:4600/filmes

## Get By Id

### Request

`GET /filmes/:id`

    http://localhost:4600/filmes/4

### Response
`{
"id": 4,
"titulo": "Cloud Atlas",
"sinopse": "filme do povo que criou matrix tbm",
"dataLancamento": "11/01/2013",
"duration": "172",
"genero": [
"drama",
"scifi"
]
}`

## Get By Name

### Request

`GET /filmes/genero/:nome`

    http://localhost:4600/filmes/genero/comedia

### Response
    `[
{
"id": 5,
"titulo": "Scott Pilgrim vs. the World",
"sinopse": "filme sobre a vida do Scott Pilgrim",
"dataLancamento": "05/11/2010",
"duration": "110",
"genero": [
"comedia",
"acao"
]
},
{
"id": 8,
"titulo": "Zumbilandia 2",
"sinopse": "filme sobre maluquices num mundo de zumbi",
"dataLancamento": "31/10/2019",
"duration": "100",
"genero": [
"acao",
"comedia"
]
}
]`

## Get Duração dos Filmes

filtra filmes que tenham mais que 120min de duração

### Request

`GET /longos/resultado

    http://localhost:4600/filmes/longos/resultado

### Response
`[
{
"id": 1,
"titulo": "Mr. Nobody",
"sinopse": "filme sobre a teoria do caos",
"dataLancamento": "04/08/2012",
"duration": "160",
"genero": [
"drama",
"scifi"
]
},
{
"id": 3,
"titulo": "Spirited Away",
"sinopse": "filme sobre uma menina que fica presa em um mundo mágico",
"dataLancamento": "18/07/2003",
"duration": "125",
"genero": [
"animacao",
"scifi"
]
},
{
"id": 4,
"titulo": "Cloud Atlas",
"sinopse": "filme do povo que criou matrix tbm",
"dataLancamento": "11/01/2013",
"duration": "172",
"genero": [
"drama",
"scifi"
]
}
]`

## Get Releases

filtra todos os filmes com uma data de lançamento superior a data atual;

### Request

`GET /release/resultado`

 `http://localhost:4600/filmes/release/resultado`

### Response
`[
{
"id": 8,
"titulo": "Zumbilandia 2",
"sinopse": "filme sobre maluquices num mundo de zumbi",
"dataLancamento": "2019-10-31T03:00:00.000Z",
"duration": "100",
"genero": [
"acao",
"comedia"
]
},
{
"id": 9,
"titulo": "Star Wars IX",
"sinopse": "filme sobre os skywalker tudo",
"dataLancamento": "2019-12-15T02:00:00.000Z",
"duration": "115",
"genero": [
"scifi",
"aventura"
]
}
]`

