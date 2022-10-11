const express = require('express');
const { categorie } = require('./models/index.js');

const app = express()

app.get('/hello/:id[0-9]', function(req, res){
    res.send("Hello world!" + req.params.id);
 });
 app.all('/helloo', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });
 
 


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
app.get("/Developpement",(req,res) => {
    res.render('Developpement')
})
app.get("/Design",(req,res) => {
    res.render('Design')
})
app.get("/Music",(req,res) => {
    res.render('Music')
})
app.get("/Marketing",(req,res) => {
    res.render('Marketing')
})
app.get("/Photography",(req,res) => {
    res.render('Photography')
})
app.get("/Business",(req,res) => {
    res.render('Business')
})
app.get("/dashboard",(req,res) => {
    res.render('dashboard')
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
// app.get("/editcomment",(req,res) => {
//     res.render('editcomment')
// })
// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=> {
    console.log('server is running port' + PORT)
})
