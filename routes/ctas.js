const express = require('express')
const router = express.Router()
const dBase = require('../config/database')
const callsToAction = require('../calls')
// const calls = require('../calls')


//Get list of items
// router.get('/', (req, res) => res.send('CTAS!'))
router.get('/', (req, res) => 
  callsToAction.findAll()
  .then(calls=> {
    res.render('ctas', {
      calls
    })
  })
  .catch(err => console.log(err)))



// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
const data = {
  title: "HR 1123",
  description: "This is a house resolution that will help the people of Armenia and Artsakh",
  contact_email: "Gov@gov.us",
  contact_phone: "555-555-5555"
  }


  let { title, technologies, budget, description, contact_email } = req.body;
})
module.exports = router;

