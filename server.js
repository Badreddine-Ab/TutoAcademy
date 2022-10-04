const express = require('express')

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


const routerCategorie = require('./routes/categorieRouter.js')
app.use('/api/categories',routerCategorie)



//testing api 
app.get("/",(req,res) => {
    res.render('index')
})
app.get("/about",(req,res) => {
    res.render('about')
})
app.get("/category",(req,res) => {
    res.render('category')
})
app.get("/single-video",(req,res) => {
    res.render('single-video')
})
app.get("/single-audio",(req,res) => {
    res.render('single-audio')
})
app.get("/single-gallery",(req,res) => {
    res.render('single-gallery')
})
app.get("/single-standard",(req,res) => {
    res.render('single-standard')
})
app.get("/style-guide",(req,res) => {
    res.render('style-guide')
})
app.get("/contact",(req,res) => {
    res.render('contact')
})
// app.get("/single-standard",(req,res) => {
//     res.render('single-standard')
// })
// app.get("/single-standard",(req,res) => {
//     res.render('single-standard')
// })

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=> {
    console.log('server is running port' + PORT)
})