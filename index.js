const express = require('express');
// const http = require('http');

const app = express();

app.use(express.json());

const routeLivros = require('./src/routes/livroRoute');

app.use('/livros', routeLivros);

app.listen(3000, () =>{
    console.log('API rodando');
});

module.exports = app;