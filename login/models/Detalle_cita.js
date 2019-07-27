const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'detalle_citas',
    {
        id_cita: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        calificacion: {
            type: Sequelize.INTEGER
        },
        fecha: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        fails: {
            type: Sequelize.INTEGER,
        },
        fellings: {
            type: Sequelize.INTEGER
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    },
    {
        timestamps: false
    }
)

