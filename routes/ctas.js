const express = require('express')
const routerAction = express.Router()
const dBase = require('../config/database.js')
const router = require('../controllers/auth.js')
const callToAction = require('../cta.js')

//Get list of items
routerAction.get('/', (req, res)=> 
callToAction.findAll()
.then(cta => {
    console.log(cta)
    res.sendStatus(200)
})
.catch(err => console.log(err)))

//Adding postings to website
router.get('/add', (req, res) => {
    const data = {
        title:'House Resolution 1165',
        description: 'Sponsored by Jackie Sperier, HR1165 is working to stop Azeri aggression against Armenias civilians. Kevin McCarthy is blocking this HR, contact him today and have your voice be heard',
        contact_email: 'Jackiesperier@congress.gov',
        contact_phone: '555-555-5555'
    }

    let { title } = data;
})



module.exports = routerAction