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
    res.status(200).send(categorie)
    console.log(categorie)
}

// get All categories

const getAllCategorie = async (req,res)=> {
    let categories = await Categorie.findAll({})
    res.status(200).send(categories)
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
    res.status(200).send(categorie)
    
   
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


module.exports = {
    addCategorie,
    getAllCategorie,
    getOneCategorie,
    updateCategorie,
    deleteCategorie,
    getCategorieArticles
}