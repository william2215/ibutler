const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'depresivo',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        entidad: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)

