const articleController = require('../controllers/articleController.js')

const router = require('express').Router()

router.post('/addArticle', articleController.addArticle)

router.get('/allArticle', articleController.getAllArticles)

router.get('/published', articleController.getPublishedArticle)


router.get('/:id', articleController.getSingleArticle)

router.put('/:id', articleController.UpdateArticle)

router.delete('/:id', articleController.deleteArticle)

module.exports = router