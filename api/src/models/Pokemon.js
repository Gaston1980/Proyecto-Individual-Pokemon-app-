const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        //get() { return "IDDB" + this.getDataValue("id")}
     },
     idVirtual: {
        type: DataTypes.VIRTUAL,
        get() { return "IDDB" + this.getDataValue("id")}
     },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health_Power: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 100}
    },
    attack: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 100}
    },
    defense: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 100}
    },
    speed: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 100}
    },
    height: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 100}
    },
    weight: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 100}
    },
    abilities: {
      type: DataTypes.STRING,
     
    },
  },{
    timestamps: false,

  });
};
