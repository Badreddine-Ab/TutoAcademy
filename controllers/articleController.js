const db = require('../models')

// cretae main Model
const Article = db.articles

// main work

// 1. crete article

const addArticle = async(req,res) => {
    let info = {
        title: req.body.title,
        content: req.body.content,
        images: req.body.images,
        description: req.body.description,
        published: req.body.published ? req.body.published  : false

    }
    
    const article = await Article.create(info)
    res.status(200).send(article)

}

// 2. get all articles

const getAllArticles = async (req,res) => {
    let articles = await Article.findAll({})
    res.status(200).send(articles)
}

// 3. get single article

const getSingleArticle = async (req,res) => {
    let id =req.params.id
    let article = await Article.findOne({ where: {id:id}})
    res.status(200).send(article)
}


// 4. Update article

const UpdateArticle = async (req,res) => {
    let id =req.params.id
    

    const article = await Article.update(req.body, {where:{id:id}})
    
    res.status(200).send(article)
}

// 5. Delete Article

const deleteArticle = async (req,res) => {
    let id =req.params.id
    
    await Article.destroy({where: {id:id}})

    res.status(200).send('Article is deleted')
}

// 6. Publihsed Article

const getPublishedArticle = async (req,res) => {
    let id =req.params.id
    
    const articles  = await Article.findAll({where: {published:true}})

    res.status(200).send(articles)
}

module.exports = {
    addArticle,
    getAllArticles,
    getSingleArticle,
    UpdateArticle,
    deleteArticle,
    getPublishedArticle
}
