module.exports = (sequelize,DataTypes) => {

    const Categorie = sequelize.define("categorie",{
         title:{
             type : DataTypes.STRING,
             allowNull :false
         },
         icon:{
             type : DataTypes.STRING,
             allowNull :false
         }
 
     })
     return Categorie
     
 }