const productController = require('../controllers/categorieController.js')

const routerCategorie = require('express').Router()

routerCategorie.post('/addCategorie',productController.addCategorie)

routerCategorie.get('/AllCategorie',productController.getAllCategorie)

routerCategorie.get('/:id',productController.getOneCategorie)

routerCategorie.get('/getCategorieArticles', productController.getCategorieArticles)

routerCategorie.put('/:id',productController.updateCategorie)

routerCategorie.delete('/:id',productController.deleteCategorie)

module.exports = routerCategorie