require('dotenv').config()
const express = require('express')
//const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')


const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const dBase = require('./config/database')


dBase.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

//Handlebars
// app.engine('handlebars', exphbs({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')


//  setup ejs and ejs layouts
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// setting static folder
app.use(express.static(path.join(__dirname, 'public')));


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
app.get('/ctas', (req, res) =>{
    res.render('ctas')
})
app.listen(8000, ()=>{
    console.log('you\'re listening to the spooky sounds of port 8000')
})