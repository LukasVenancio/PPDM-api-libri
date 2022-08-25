const express = require('express');
// const http = require('http');

const app = express();
const router = express.Router();

const route = router.get('/', (req, res) =>{
    res.send('I am the root');
});

const notRoot = router.get('/notRoot', (req, res) =>{
    res.send('I am not the root');
});

app.use('/', route);
app.use('/notRoot', notRoot);

app.listen(3000, () =>{
    console.log('API rodando');
});