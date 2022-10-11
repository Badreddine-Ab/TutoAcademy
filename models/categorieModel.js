module.exports = (sequelize,DataTypes) => {

    const Categorie = sequelize.define("categorie",{
         title:{
             type : DataTypes.STRING,
             allowNull :false
         },
         description:{
            type : DataTypes.TEXT,
            allowNull :false
         }
     })
     return Categorie
     
 }