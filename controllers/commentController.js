
const db = require('../models')
// cretae main Model
const Comment = db.comments

// main work

// 1. crete Comment

const addComment = async(req,res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        content: req.body.content,
        // descritption: req.body.descritption,
        // published: req.body.published ? req.body.published  : false

    }
    console.log('hehehehe');
    const comment = await Comment.create(info)
    res.status(200).send('heheh')

}

// 2. get all Comments

const getAllComments = async (req,res) => {
    let comments = await Comment.findAll({})
    res.status(200).send(comments)
}

// 3. get single comment

const getSingleComment = async (req,res) => {
    let id =req.params.id
    let comment = await Comment.findOne({ where: {id:id}})
    res.status(200).send(comment)
}


// 4. Update Comment

const UpdateComment = async (req,res) => {
    let id =req.params.id
    

    const comment = await Comment.update(req.body, {where:{id:id}})
    
    res.status(200).send(comment)
}

// 5. Delete Comment

const deleteComment = async (req,res) => {
    let id =req.params.id
    
    await Comment.destroy({where: {id:id}})

    res.status(200).send('Comment is deleted')
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