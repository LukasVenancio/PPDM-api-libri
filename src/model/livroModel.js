const Sequelize = require('sequelize');

const connection = require('../database/database');

const livroModel = connection.define(

    'tbl_livro',
    {
        cod_livro:{

            type: Sequelize.INTEGER,
            primaryKey: true,
            autiIncrement: true

        },
        titulo:{

            type: Sequelize.STRING(100),
            allowNull: false

        },
        descricao:{

            type: Sequelize.TEXT,
            allowNull: false

        },
        imagem:{

            type: Sequelize.STRING(500),
            allowNull: false

        }
    }
);

//livroModel.sync({force: true});

module.exports = livroModel;