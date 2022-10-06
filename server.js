const express = require('express');
const { categorie } = require('./models/index.js');
const {getAllCategorie} = require("./controllers/categorieController")
const {addCategorie} = require("./controllers/categorieController")
const {getOneCategorie} = require("./controllers/categorieController")
const {updateCategorie} = require("./controllers/categorieController")
const {deleteCategorie} = require("./controllers/categorieController")
const {getCategorieArticles} = require("./controllers/categorieController")
const{countCategorie} = require("./controllers/categorieController")

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extend: true}))

// set the view engine to ejs
app.set('views','./view');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// routers
const router = require('./routes/articleRouter.js')
app.use('/api/articles',router)
const routerComment = require('./routes/commentRouter.js')
app.use('/api/comments',routerComment)

const routerCategorie = require('./routes/categorieRouter.js')
app.use('/api/categories',routerCategorie)

//testing api 
app.get("/",(req,res) => {
    res.render('index')
})
app.get("/article",(req,res) => {
    res.render('article')
})
app.get("/review",(req,res) => {
    res.render('review')
})
app.get("/commentaire",(req,res) => {
    res.render('commentaire')
})

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=> {
    console.log('server is running port' + PORT)
})
