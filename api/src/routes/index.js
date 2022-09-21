
const { Router } = require('express');
const axios = require('axios');
const {Op} = require("sequelize");

const { Pokemon, Type  } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//const getPokemons = require("./getPokemons.js")
//const getPokemonById = require("./getPokemonById.js")




const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//router.get("/pokemons", getPokemons);
//router.get("/pokemons/:id",getPokemonById );

router.get("/pokemons", async (req,res) => {
    const {name} = req.query;
    const pokemonsCards = [];
    //const pokemonByName = {};//object.key.lenght
    
    if(name) {
        try {
          
    const pokemonByName = await Pokemon.findAll({where: {name : name}, include:{model: Type, attributes:["name"],through:{
        attributes: [],}}}) // devuelve un array
    console.log(pokemonByName)
    if(pokemonByName.length > 0) res.json(pokemonByName)

    await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
       
        pokemonsCards.push({
            id: response.data.id,
            name: response.data.name,
            img: response.data.sprites.other.dream_world.front_default,
            attack: response.data.stats[1].base_stat,
            types: response.data.types[0].type.name,

        });
        res.json(pokemonsCards) 

    })
 
        } catch (e) {res.send("No existe ningun Pokemon con este nombre")}

    } else {
    let pokemonsFromDB = []; 
    pokemonsFromDB = await Pokemon.findAll({ include:{model: Type, attributes:["name"],through:{
    attributes: [],}}}) // devuelve un array
       

    await axios("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then(async response => { 
     for(let i=0; i<response.data.results.length; i++){ // aca hago el subrequest a cada pokemon url
         await axios(`${response.data.results[i].url}`)
         .then(response => { // aca saco las propiedades que necesito de cada pokemon
            //let types =[];
            //response.data.types.forEach( t => types.push(t.type.name)) 
            pokemonsCards.push({
                id: response.data.id,
                name: response.data.name,
                img: response.data.sprites.other.dream_world.front_default,
                attack: response.data.stats[1].base_stat,
                types: response.data.types[0].type.name,

            });
         })
     }
     pokemonsCards.concat(pokemonsFromDB)
     res.status(200).json(pokemonsCards)
       })
  
    }
})



router.get("/pokemons/:id",async (req,res) => {
   
const {id} = req.params;
if(id.slice(0,4) === "IDDB") {
  try {
    const pokemonByIdFromDB =  await Pokemon.findByPk(id,{include:{model: Types, attributes:"name",through:{
        attributes: []}}}) // devuelve un obj

        res.json(pokemonByIdFromDB)
  } catch (error) {
      res.send(e) 
  }

} else {
    const pokemonDetails = {};
    try {
     await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => { 
    
           pokemonDetails.id = response.data.id,
           pokemonDetails.name = response.data.name,
           pokemonDetails.img = response.data.sprites.other.dream_world.front_default,
           pokemonDetails.attack = response.data.stats[1].base_stat,
           pokemonDetails.types = response.data.types[0].type.name,
      
           pokemonDetails.hp = response.data.stats[0].base_stat,
           pokemonDetails.defense = response.data.stats[2].base_stat,
           pokemonDetails.speed = response.data.stats[5].base_stat,
           pokemonDetails.height = response.data.height,
           pokemonDetails.weight = response.data.weight,
           pokemonDetails.abilities = response.data.abilities[0].ability.name

            res.json(pokemonDetails)
        })
       
    } catch (e) {res.status(400).json({msg:"Pokemon no encontrado"})} 
}
    })


router.get("/types",async (req,res) => {
    
try {
   const typeFound = await Type.findAll()// devuelve array
   const cleanFound = [];
   for(let i=0; i< typeFound.length; i++){
       cleanFound.push(typeFound[i].name)
   }
   if(cleanFound.length > 0) return res.json(cleanFound);
   
   const array = [];
   const types = await axios("https://pokeapi.co/api/v2/type")
   
   for(let i=0; i < types.data.results.length; i++){
    array.push(types.data.results[i].name )
    await Type.create({name:types.data.results[i].name }) 
   } 
   
   res.json(array)
} catch (e ) {res.send(e)}  
     
}) 

router.post("/pokemons",async (req,res) => {
    const {name,health_Power,attack,defense,speed,weight,height,image,type, abilities} = req.body;
    try {
       const newPokemonDB =  await Pokemon.create(
           {name,health_Power,attack,defense,speed,weight,height,image,type, abilities}
        
       )
       const typeid = Type.findAll({where: {name: type}})
       newPokemonDB.addType(typeid[0].id)
       res.send("Tu Pokemon se ha creado exitosamente")
    } catch (error) {
        
    } 

})









module.exports = router;
