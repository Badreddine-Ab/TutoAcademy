const express = require('express');
// const { categorie } = require('./models/index.js');

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
app.use('',routerCategorie)


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
app.get("/categorie",(req,res) => {
    res.render('categorie')
})
app.get("/addcomment",(req,res) => {
    res.render('addcomment')
})
app.get("/develeppement",(req,res) => {
    res.render('develeppement')
})
// app.get("/editcomment",(req,res) => {
//     res.render('editcomment')
// })
// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=> {
    console.log('server is running port ' + PORT)
})
