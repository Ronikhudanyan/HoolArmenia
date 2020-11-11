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


// // Display add gig form
// router.get('/add', (req, res) => res.render('add'));

// // Add a gig
// router.post('/add', (req, res) => {
//   let { title, description, contact_email, contact_phone } = req.body;
//   let errors = [];

// dBase.calls.findAll()
//     .then(ctas => res.render('ctas', {
//         ctas
//       }))
//     .catch(err => res.render('error', {error: err})));




    // router.get('/ctas', (req, res) => res.send('HELLO'))

// //Adding postings to website
// router.get('/add', (req, res) => {
//     const data = {
//         title:'House Resolution 1165',
//         description: 'Sponsored by Jackie Sperier, HR1165 is working to stop Azeri aggression against Armenias civilians. Kevin McCarthy is blocking this HR, contact him today and have your voice be heard',
//         contact_email: 'Jackiesperier@congress.gov',
//         contact_phone: '555-555-5555'
//     }

//     let { title, description, contact_email, contact_phone } = data;

//     //Insert into table
//     callToAction.create({
//         title,
//         description,
//         contact_email,
//         contact_phone
//     })
//     .then(ctas => res.redirect('/'))
//     .catch(err => console.group(err))
// })

// dBase.calls.create({
//         title:'House Resolution 1165',
//         description: 'Sponsored by Jackie Sperier, HR1165 is working to stop Azeri aggression against Armenias civilians. Kevin McCarthy is blocking this HR, contact him today and have your voice be heard',
//         contact_email: 'Jackiesperier@congress.gov',
//         contact_phone: '555-555-5555'
// })
// .then(createdUser =>{
// console.log('Created User: ', createdUser)
// })


// dBase.calls.update({
//     contact_email: 'Jackiesperier@congress.gov'
//       }, {
//         where: {
//             title:'House Resolution 1165'
//         }
//     }).then(numRowsChanged=>{
//         console.log(numRowsChanged)
//     });

module.exports = router