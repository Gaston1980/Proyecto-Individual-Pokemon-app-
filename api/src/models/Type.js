const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', { // ID incremental se crea solo x default
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },

    },{
        timestamps: false,
        
    })};

    //Nota: la tabla intermedia la crea sequelize