const express = require('express')
const router = express.Router()
const dBase = require('../config/database')
const Sequelize = require('sequelize');
const db = require('../models');

const Op = Sequelize.Op;



//Get list of items
// router.get('/', (req, res) => res.send('CTAS!'))
router.get('/', (req, res) => 
  db.calls.findAll()
  .then(calls=> {
    res.render('ctas', {
      calls
    })
    console.log(calls)
  })
  .catch(err => res.send(err)))



// Display add gig form
router.get('/add', (req, res) => res.render('add'));



// Add a gig
router.post('/add', (req, res) => {
  let { title, description, contact_email, contact_phone } = req.body;
  let error = []


  db.calls.create({
    title,
    description,
    contact_email,
    contact_phone,
  })
  .then(call => res.redirect('/ctas'))
  .catch(err => console.log(err))
})

router.get('/search', (req, res) => {
  let {term} = req.query

  term = term.toLocaleLowerCase()

  calls.findAll({ where: { title: { [Op.like]: '%' + term + '%' } } })
    .then(calls => res.render('ctas', { calls }))
    .catch(err => res.render('error', {error: err}));
})

router.findOne('/ctas/edit/:id', async(req, res)=>{
  let entry = await calls.findOne({where: {id: req.params.id}})
  calls.destroy()
  .then(calls => res.redirect('/ctas'))
  .catch(err => console.log(err))


})

module.exports = router;

