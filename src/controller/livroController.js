
const livroModel = require('../model/livroModel');

const get = async (req, res) =>{

    livroModel.findAll()
    .then(

        (data) => {

            res.status(200).json(data);
        }
    )
    .catch(

        (error) =>{

            res.status(400).json({"message" : error})
        }
    );

};

const getByCod = async (req, res) =>{

    const cod = req.params.cod;

    livroModel.findAll({

        where:{

            cod_livro: cod
        }

    })
    .then(

        (data) => {

            res.status(200).json(data);
        }
    )
    .catch(

        (error) =>{

            res.status(400).json({"message" : error})
        }
    );

};

const post = async (req, res) =>{
    
    const {titulo, descricao, imagem} = req.body;

    livroModel.create({

        titulo,
        descricao,
        imagem

    }).then(

        () => {
            
            res.status(200).json({'message' : 'Livro inserido com sucesso!'});
        }
    ).catch(

        (error) =>{

            res.status(400).json({"message" : error})
        }
    );
};

const put = async (req, res) =>{

    const {titulo, descricao, imagem, cod_livro} = req.body;

    livroModel.update({

        titulo,
        descricao,
        imagem
        },

        {
            where:{cod_livro}
        
        }).then(

            () => {
                
                res.status(200).json({'message' : 'Livro atualizado com sucesso!'});
            }

        ).catch(
    
            (error) =>{
    
                res.status(400).json({"message" : error})
            }
        );
}

const del = async (req, res) =>{

    const cod = req.params.cod;

    livroModel.destroy({

        where:{

            cod_livro: cod
        }

    })
    .then(

        () => {

            res.status(200).json({'message' : 'Livro excluido com sucesso!'});
        }
    )
    .catch(

        (error) =>{

            res.status(400).json({"message" : error})
        }
    );

};

    
module.exports = {get,
                post,
                getByCod,
                put,
                del};