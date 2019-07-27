const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'sicologo',
    {
        cedula: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Nombre: {
            type: Sequelize.STRING
        },
        Apellido: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

