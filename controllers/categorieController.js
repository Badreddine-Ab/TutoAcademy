const { where } = require('sequelize')
const { articles, categorie } = require('../models')
const db = require('../models')


const Categorie = db.categorie
const Article = db.articles

// create categories

const addCategorie = async (req,res)=>{

    let info = {
        title : req.body.title,
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

const getOneCategorie = async (req,res) => {

    let id = req.params.id
    let data = await Categorie.findOne({
        where : {
            id : id
        }
    })
    return data
}

//  update Categories

const updateCategorie = async (req,res) => {

    let id = req.params.id
    const categorie = await Categorie.update(req.body,{where : {id : id}})
    res.redirect('/categorie');
}

//  delete categorie by id

const deleteCategorie = async (req,res) => {

    let id = req.params.id  
    await Categorie.destroy({where: {id : id}})
    res.redirect('/categorie');

}

// Connect One To Many Relation Categorie and Article

const getCategorieArticles = async(req,res)=>{
    const id = req.params.id
    const data = await Categorie.findOne({
        include: [{
            model: Article,
            as:'article'
        }],
        where : { id: id }
        
    })
    res.status(200).send(data)
    console.log("data is *********::"+data)
   return data;
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
    countCategorie
}