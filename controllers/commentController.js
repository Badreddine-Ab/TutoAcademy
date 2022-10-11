
const db = require('../models')
// cretae main Model
const Comment = db.comments

// main work

// 1. crete Comment

const addComment = async(req,res) => {
    // console.log(req.body.email);
    console.log('email :>> ', req.body.email);
    let info = {
        name: req.body.name,
        email: req.body.email,
        content: req.body.content,
        // descritption: req.body.descritption,
        // published: req.body.published ? req.body.published  : false

    }
    
    const comment = await Comment.create(info)
    console.log(info);
    res.redirect('allcomment')
    // res.render("commentaire" );
    // res.status(200).send('add  comment js')

}

// 2. get all Comments

const getAllComments = async (req,res) => {
    let comments = await Comment.findAll({})
    // res.status(200).send(comments)
    res.render("commentaire" , {comments : comments } );
}

// 3. get single comment

const getSingleComment = async (req,res) => {
    let id =req.params.id
    let comment = await Comment.findOne({ where: {id:id}})
    console.log(comment);
    res.render("editcomment" , {comment : comment } );
    // res.status(200).send(comment)
}


// 4. Update Comment

const UpdateComment = async (req,res) => {
    let id =req.params.id
    

    const comment = await Comment.update(req.body, {where:{id:id}})
    res.redirect('/api/comments/allComment');
    
    // res.status(200).send(comment)
}

// 5. Delete Comment

const deleteComment = async (req,res) => {
    let id =req.params.id
    
    await Comment.destroy({where: {id:id}})

    res.redirect('/api/comments/allComment');
    // res.status(200).send('Comment is deleted')
}

// 6. Publihsed Comment

// const getPublishedComment = async (req,res) => {
//     let id =req.params.id
    
//     const comments  = await Comment.findAll({where: {published:true}})

//     res.status(200).send(comments)
// }

module.exports = {
    addComment,
    getAllComments,
    getSingleComment,
    UpdateComment,
    deleteComment
}