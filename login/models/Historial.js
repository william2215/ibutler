const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'historial',
    {
        id_historial: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_detalle_cita: {
            type: Sequelize.INTEGER
        },
        id_doctor: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)
