const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

/* ### Criação de rotas ### */

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
})

app.post('/cadastrar', (req, res) => {
  // Obtenha os dados do formulário de cadastro aqui utilizando o req.body
  
  // DICA: utilize o console.log() para verificar se os dados estão
  // sendo recebidos corretamente.
  
  // Renderize a página inicial (home) com o cadastro incluso na tabela
})

app.listen(3000, () => {
    console.log('Servidor rodando...');
});
