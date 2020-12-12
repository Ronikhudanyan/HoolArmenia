require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
// const mod = require ('./models')
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')

const axios = require ('axios')
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Calls to action Vars
const bodyParser = require('body-parser');
const path = require('path');
const dBase = require('./config/database')



//API Vars 



dBase.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))



//  setup ejs and ejs layouts
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// setting static folder
app.use(express.static(__dirname + '/public'));


// body parser middleware (this makes req.body work)
app.use(express.urlencoded({extended: false}))

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware
app.use(flash())

// CUSTOM MIDDLEWARE
app.use((req, res, next)=>{
    // before every route, attach the flash messsages and current user to res.locals
    // this will give us access to these values in all our ejs pages
    res.locals.alerts = req.flash()
    res.locals.currentUser = req.user
    next() // move on to the next piece of middleware
})

// use controllers
app.use('/auth', require('./controllers/auth.js'))

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile')
})



app.use('/ctas', require('./routes/ctas.js'))



app.use('/news', require('./routes/news.js'))
app.use('/article', require('./routes/news.js'))
app.get('/news', (req,res) =>{
    res.render('news', {articles: newsAPI.data})
})




app.listen(process.env.PORT || 8000, ()=>{
    console.log('you\'re listening to the spooky sounds of port 8000')
})