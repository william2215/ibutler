const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'feelings',
    {
        id_sentimiento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        felicidad: {
            type: Sequelize.STRING
        },
        triste: {
            type: Sequelize.STRING
        },
        aburrido: {
            type: Sequelize.STRING
        },
        desmotivado: {
            type: Sequelize.INTEGER
        },
        depresivo: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)

