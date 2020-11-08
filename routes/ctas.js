const express = require('express')
const routerAction = express.Router()
const dBase = require('../models')
const router = require('../controllers/auth.js')
// const Cta = require('../cta.js')
const callToAction = require('../models/calls')


//Get list of items
// routerAction.get('/ctas', (req, res) => 
//   callToAction.findAll()
//     .then(ctas => {
//         console.log('ctas')
//         res.sendStatus(200)
//       })
//     .catch(err => console.log(err)));


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

module.exports = routerAction