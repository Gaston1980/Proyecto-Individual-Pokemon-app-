const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
   
    sequelize.define('type', { // ID incremental se crea solo x default
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

    },{
        timestamps: false,
        
    })};

   