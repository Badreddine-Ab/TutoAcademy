const categorieController = require('../controllers/categorieController.js')

const routerCategorie = require('express').Router()

routerCategorie.post('/addCategorie',categorieController.addCategorie)

routerCategorie.get('/AllCategorie',categorieController.getAllCategorie)

routerCategorie.get('/:id',categorieController.getOneCategorie)

routerCategorie.put('/:id',categorieController.updateCategorie)

routerCategorie.get('/getCategorieArticles', categorieController.getCategorieArticles)

routerCategorie.delete('/:id',categorieController.deleteCategorie)

module.exports = routerCategorie
const express = require('express');
const app = express()

// set the view engine to ejs
app.set('views','../view');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '../view/public'));

app.get("/Design",async (req,res) => {
    const category = await getAllCategorie(req, res)
    res.render('Design', {
        data: category
    })
})
app.get("/dashboard", async (req,res) => {
    const category = await countCategorie(req, res)
    res.render('dashboard', {
        data: category
    })
})
// GET request to see page
app.get("/categorie", async(req,res) => {
    const category = await getAllCategorie(req, res)
    res.render('categorie', {
        data: category
    })
})
// POST request to save data
app.post("/addCategories", async (req,res) => {
    const category = await addCategorie(req,res);
});
app.put("/updateCategorie", async (req,res) => {
    // const allCategory = await getAllCategorie(req, res)
    // const category = await updateCategorie(req,res);
    // res.render
});

// link in page categorie
app.get("/addCategory", (req,res) => {
    res.render('addCategories')
});
// link in page categorie -update
app.get("/updateCategory", (req,res) => {
    res.render('updateCategories')
});
// app.get("/articleByCategorie/:id",async (req,res) => {
//     const category = await getArticleByCategorie(req, res)
//     // res.render('Design', {
//     //     data: category
//     // })

//     console.log(category);
// })