const categorieController = require('../controllers/categorieController.js')

const routerCategorie = require('express').Router()

routerCategorie.get("/dashboard", async (req,res) => {
    const category = await categorieController.countCategorie(req, res)
    res.render('dashboard', {
        data: category
    })
})

routerCategorie.get("/categorie", async(req,res) => {
    const category = await categorieController.getAllCategorie(req, res)
    res.render('categorie', {
        data: category
    })
})

routerCategorie.get("/addCategory", (req,res) => {
    res.render('addCategories')
});

routerCategorie.post("/addCategorie", async (req,res) => {
    const category = await categorieController.addCategorie(req,res);
});


routerCategorie.get("/updateCategory/:id", async (req,res) => {
    const category = await categorieController.getOneCategorie(req, res)
    res.render('updateCategories', {
        data: category
    })
});

routerCategorie.post("/updateCategories/:id", async (req,res) => {
    const category = await categorieController.updateCategorie(req,res);
    // console.log("this my category" + category)
});

routerCategorie.get("/deletcategorie/:id", async (req,res) => {
    const category = await categorieController.deleteCategorie(req, res)
});

// routerCategorie.get("/categorie/:id",async (req,res) => {
//     const articles = await categorieController.getCategorieArticles(req, res)
//     console.log(articles)
//     const category = await categorieController.getAllCategorie(req, res)
//     res.redirect('Design', {
//         data:category,
//         article: articles
        
// })   
// })

routerCategorie.get("/design",async (req,res) => {
    const category = await categorieController.getAllCategorie(req, res)
    res.render('design', {
        data: category
    })
})

routerCategorie.get('/getCategorieArticles/:id', categorieController.getCategorieArticles)



module.exports = routerCategorie