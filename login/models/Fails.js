const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'fail',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        entidad: {
            type: Sequelize.STRING
        },
        palabra: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

