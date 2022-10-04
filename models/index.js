const dbConfig = require('../config/dbConfig.js');

const Sequilize = require('sequelize')
const DataTypes = Sequilize.DataTypes

const sequelize = new Sequilize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool:{
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=> {
    console.log('connected...')
})
.catch(err => {
    console.log('error' + err)
})

const db = {}

db.Sequelize = Sequilize
db.sequelize = sequelize

db.articles = require('./articleModel.js')(sequelize,DataTypes)
db.categorie = require('./categorieModel.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=> {
    console.log('yes re-sync done!')
})

// 1 To Many Relation

db.categorie.hasMany(db.articles, {
    foreignKey: 'categorie_id',
    as:'article'
})


db.articles.belongsTo(db.categorie,{
    foreignKey: 'categorie_id',
    as:'categorie'
})

module.exports = db