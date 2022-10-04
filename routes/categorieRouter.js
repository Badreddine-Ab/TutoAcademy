const categorieController = require('../controllers/categorieController.js')

const routerCategorie = require('express').Router()

routerCategorie.post('/addCategorie',categorieController.addCategorie)

routerCategorie.get('/AllCategorie',categorieController.getAllCategorie)

routerCategorie.get('/:id',categorieController.getOneCategorie)

routerCategorie.put('/:id',categorieController.updateCategorie)

routerCategorie.delete('/:id',categorieController.deleteCategorie)

module.exports = routerCategorie