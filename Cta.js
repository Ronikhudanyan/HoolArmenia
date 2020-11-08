const Sequelize = require('sequelize')
const dBase = require('./config/database')


const Cta = dBase.define('cta', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
    contact_phone: {
        type: Sequelize.STRING
    },

})

module.exports = Cta