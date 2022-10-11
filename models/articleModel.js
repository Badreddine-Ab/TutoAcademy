module.exports = (sequelize,DataTypes) => {
    const Article = sequelize.define("articles", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        images:{
            type:DataTypes.STRING,
        },
        description:{
            type:DataTypes.TEXT,
            
        },
        published:{
             type:DataTypes.BOOLEAN
        }
       
    })

    return Article
}
