const livroModel = require('../model/livroModel');

const get = async (req, res) =>{

    res.status(200).send({
        message: 'Cheguei'
    });

};

const post = async (req, res) =>{

    const data = req.body;
    console.log(data)
    // res.status(200).send({
    //     message: 'Cheguei'
    // });

};

module.exports = {get,
                    post};