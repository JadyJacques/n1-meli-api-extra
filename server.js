const app = require('./src/app')
const port = 4600
app.listen(port, function(){
    console.log(`O aplicativo está rodando na porta ${port}`)
})