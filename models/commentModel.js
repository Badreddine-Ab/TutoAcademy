module.exports = (sequelize,DataTypes) => {
    const Comment = sequelize.define("comments", {
        name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        content:{
            type:DataTypes.STRING,
        }
       
    })

    return Comment
}
