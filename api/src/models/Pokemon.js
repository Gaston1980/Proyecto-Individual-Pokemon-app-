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
       
     },
     idVirtual: {
        type: DataTypes.VIRTUAL,
        get() { return "IDDB" + this.getDataValue("id")} // No se crea en la tabla
     },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //para que no haya iguales
    },
    hp: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 99}
    },
    attack: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 99}
    },
    defense: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 99}
    },
    speed: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 99}
    },
    height: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 99}
    },
    weight: { 
      type: DataTypes.INTEGER,
      validate: {min: 1, max: 999}
    },
    abilities: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  },{
    timestamps: false,

  });
};
