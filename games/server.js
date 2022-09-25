// require statements
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require ('method-override')
require('dotenv').config()
const Xbox = require ('./models/xbox')
const Pc = require('./models/pc')

//view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
//database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//index

app.get('/', (req, res)  => {
    Xbox.find({},(err,xboxGames) =>{
        console.log(err)
        res.render('Index', {
            xboxGames: xboxGames
        })
    })
})



//post
app.post('/', (req, res) =>{
    if (req.body.wasItGood === "on") {
        req.body.wasItGood = true
    } else {
        req.body.wasItGood = false
    }
    Xbox.create(req.body, (err, createdXboxGame) => {
        console.log(err)
    })
    res.redirect('/')
  })


//new

app.get('/xbox/new', (req, res) => {
    res.render('NewXbox.jsx', {})
})

//edit



//update




//delete



//seeds



//show
app.get("/xbox/:id", (req, res) => {
    Xbox.findById(req.params.id, (err,foundXboxGame) => {
        console.log(err)
      console.log("Found: ", foundXboxGame);
      res.render("Show", {
        xboxGame: foundXboxGame,
      });
    });
  });


app.listen(3000, () => {
    console.log('listning on port 3000')
})