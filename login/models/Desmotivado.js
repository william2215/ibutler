const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'desmotivado',
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

