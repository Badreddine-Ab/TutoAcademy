const commentController = require('../controllers/commentController.js')

const router = require('express').Router()

router.post('/addComment', commentController.addComment)

router.get('/allComment', commentController.getAllComments)

// router.get('/published', commentController.getPublishedComment)


// router.get('/:id', commentController.getSingleComment)
router.get('/all', function(req , res){
    // res.send('very good' + req.params.id)
    Comment.findAll().then(Comment => res.json(Comment));  

    // res.end(req.params.id)
})

router.put('/:id', commentController.UpdateComment)

router.delete('/:id', commentController.deleteComment)

module.exports = router