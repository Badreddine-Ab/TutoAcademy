const { where } = require('sequelize')
const { articles } = require('../models')
const db = require('../models')

const Categorie = db.categorie
const Article = db.articles

// create categories

const addCategorie = async (req,res)=>{

    let info = {
        title : req.body.title,
        icon : req.body.icon,
        description : req.body.description
    }
    const categorie = await Categorie.create(info)
    res.redirect('/categorie');
}

// get All categories

const getAllCategorie = async (req,res)=> {
    let categories = await Categorie.findAll({})
    return categories
}

const getArticleByCategorie = async (req,res)=> {
    let id = req.params.id  
    let articles = await Article.findAll({ 
        where : {
            CategorieId: id
    }
})
    return articles
}

//  get Single Categories

const getOneCategorie = async (req,res) => {

    let id = req.params.id
    let categorie = await Categorie.findOne({
        where : {
            id : id
        }
    })
    res.status(200).send(categorie)
}

//  update Categories

const updateCategorie = async (req,res) => {

    let id = req.params.id
    const categorie = await Categorie.update(req.body,{where : {id : id}})
    // res.status(200).send(categorie)
    res.redirect('/categorie');
}

//  delete categorie by id

const deleteCategorie = async (req,res) => {

    let id = req.params.id  
    await Categorie.destroy({where: {id : id}})
    res.status(200).send('categorie is deleted')
}

// Connect One To Many Relation Categorie and Article

const getCategorieArticles = async(req,res)=>{
    const data = await Categorie.findAll({
        include: [{
            model: Article,
            as:'article'
        }],
        where : { id: 2 }
    })

    res.status(200).send(data)
}

// count categorie
const countCategorie = async(req,res)=>{
    let count_ = await Categorie.count({})
    return count_
}


module.exports = {
    addCategorie,
    getAllCategorie,
    getOneCategorie,
    updateCategorie,
    deleteCategorie,
    getCategorieArticles,
    countCategorie,
    getArticleByCategorie
}