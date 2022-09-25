
const { Router } = require('express');
const axios = require('axios');
//const {Op} = require("sequelize");

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
    console.log(name)
    const pokemonsCards = [];
  
    if(name) { 
  
        try {
            // Busco en la DB
            let pokemonsFromDB = []; 
            pokemonsFromDB = await Pokemon.findAll({ where: {name:name},include:{model: Type, attributes:["name"],through:{
            attributes: [],}}}) // devuelve un array de obj
            console.log("pokemonsFromDB:",pokemonsFromDB)
            let pokemonsFromDBClean = [];
           
            pokemonsFromDB?.map(pokemon => { 
                let types =[];
                pokemon.types.forEach( t => types.push(t.name)) 
                pokemonsFromDBClean.push({
                id: pokemon.idVirtual,
                name: pokemon.name,
                img: pokemon.image,
                attack: pokemon.attack,
                types: types,
        
            })}) 
           
      //Busco en la API    
    await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
       console.log("AxiosByName:Response.data:",response.data)
       let types =[];
       response.data.types.forEach( t => types.push(t.type.name))
        pokemonsCards.push({
            id: response.data.id,
            name: response.data.name,
            img: response.data.sprites.other.dream_world.front_default,
            attack: response.data.stats[1].base_stat,
            types: types,

        });})
        .catch(error => { // <----si no lo ecuentra en la Api, esta te retorna un error
            console.log("Entro al Promise Catch")
            console.log("pokemonsFromDBClean.length:",pokemonsFromDBClean.length)
            if(pokemonsFromDBClean.length>0) return res.json(pokemonsFromDBClean)
            else return res.json([{name:"POKEMON NOT FOUND", img:"https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/13846-pikachu-con-pokebola-png.png?resize=500%2C500&ssl=1" }])
        
         } )
         res.json(pokemonsCards) // <---si lo encuentra en la Api

    } catch (e)  {console.log(e)} //no res.json(e) xq se rompe

    } else { //Sino hay name, entro a buscar todos los Pokemons  

       try {
            
    //Primero los busco en la DB
    let pokemonsFromDB = []; 
    pokemonsFromDB = await Pokemon.findAll({ include:{model: Type, attributes:["name"],through:{
    attributes: [],}}}) // devuelve un array de obj
    
    let pokemonsFromDBClean = [];
    console.log("Resultado DB:",pokemonsFromDB)
    pokemonsFromDB?.map(pokemon => { 
        let types =[];
        pokemon.types.forEach( t => types.push(t.name)) 
        pokemonsFromDBClean.push({
        id: pokemon.idVirtual,
        name: pokemon.name,
        img: pokemon.image,
        attack: pokemon.attack,
        types: types,

    })}) 
    console.log("Clean:",pokemonsFromDBClean)

  // Luego busco todos en la API
  await axios("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then(async response => {
        //console.log("Response:",response) 
     for(let i=0; i<response.data.results.length; i++){ // aca hago el subrequest a cada pokemon url
         await axios(`${response.data.results[i].url}`) // url dinamica
         .then(response => { // aca saco las propiedades que necesito de cada pokemon
            let types =[];
            response.data.types.forEach( t => types.push(t.type.name)) 
            pokemonsCards.push({
                id: response.data.id,
                name: response.data.name,
                img: response.data.sprites.other.dream_world.front_default,
                attack: response.data.stats[1].base_stat,
                types: types

            });
         })
         
     }
     const pokemonsApiAndDb = pokemonsCards.concat(pokemonsFromDBClean)//Junto las dos busquedas 
     res.status(200).json(pokemonsApiAndDb)
       })
    } catch (error) {res.status(400).json(error)}
    }
})



router.get("/pokemons/:id",async (req,res) => {
   
const {id} = req.params;
const idSliced = id.slice(4); // 1
if( id.slice(0,4) === "IDDB") { // id.slice(0,4) = IDDB
  try {
      //Si el Id empieza con IDDB busco en la DB
    const pokemonByIdFromDB =  await Pokemon.findByPk(idSliced,{include:{model: Type, attributes:["name"],through:{
    attributes: []}}}) // devuelve un obj
    // console.log(pokemonByIdFromDB)
    let types =[];
    pokemonByIdFromDB.types.forEach( t => types.push(t.name)) 
    const pokemonsByIdFromDBClean = {
    
        id : pokemonByIdFromDB.idVirtual, //IDDB
        name : pokemonByIdFromDB.name,
        img : pokemonByIdFromDB.image,
        attack : pokemonByIdFromDB.attack,
        types : types,
        hp: pokemonByIdFromDB.hp,
        defense: pokemonByIdFromDB.defense,
        speed: pokemonByIdFromDB.speed,
        height: pokemonByIdFromDB.height,
        weight: pokemonByIdFromDB.weight,
        health_Power: pokemonByIdFromDB.hp,
        abilities: pokemonByIdFromDB.abilities

    }
    console.log("PokemonByIdFromDBClean",pokemonsByIdFromDBClean )
    res.json(pokemonsByIdFromDBClean)
  } catch (error) {res.status(404).json(error)}
      

} else { //Si el ID es solo numerico busco en la API
    const pokemonDetails = {};
    try {
     await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => { 
            let types =[];
            response.data.types.forEach( t => types.push(t.type.name)) 
           pokemonDetails.id = response.data.id,
           pokemonDetails.name = response.data.name,
           pokemonDetails.img = response.data.sprites.other.dream_world.front_default,
           pokemonDetails.attack = response.data.stats[1].base_stat,
           pokemonDetails.types = types,
           pokemonDetails.hp = response.data.stats[0].base_stat,
           pokemonDetails.defense = response.data.stats[2].base_stat,
           pokemonDetails.speed = response.data.stats[5].base_stat,
           pokemonDetails.height = response.data.height,
           pokemonDetails.weight = response.data.weight,
           pokemonDetails.abilities = response.data.abilities[0].ability.name

            res.json(pokemonDetails)
        })
       
    } catch (e) {res.status(404).json(e)}
}
    })



router.get("/types",async (req,res) => {
//Se dispatcha la solicitud al entrar al Form
// para que cuando se vaya a crear un Pokemon, ya esten los types creados en la DB  
try {
    //Busco los types en Type de la DB
   const typeFound = await Type.findAll()// devuelve un array de obj {id,name}
   const cleanFound = [];
   for(let i=0; i< typeFound.length; i++){
       cleanFound.push(typeFound[i].name)
   }
   if(cleanFound.length > 0) return res.json(cleanFound);//Porque ya estan todos los types creados en Type DB
   //Si no estan creados en la DB, Busco los types en la API y los creo en la DB
   const arrayOfTypes = [];
   const types = await axios("https://pokeapi.co/api/v2/type")
   
   for(let i=0; i < types.data.results.length; i++){
    array.push(types.data.results[i].name )
    await Type.create({name:types.data.results[i].name }) 
   } 
   
    res.json(arrayOfTypes)
   } catch (e ) {res.status(400).json(e)}  
     
   }) 

router.post("/pokemons",async (req,res) => {
const {name,health_Power,attack,defense,speed,weight,height,image,type, abilities} = req.body;
//console.log("Name:",name, "Abilities:",abilities, "Type:",type)
    try {
        //Creo el Pokemon en Pokemon DB
       const newPokemonDB = await Pokemon.create(
       {name,hp: health_Power,attack,defense,speed,weight,height,image, abilities}
       )
       //Se hace la relacion del Pokemon con Type segun sus types
       for(let i=0; i<type.length; i++){
        const typeid = await Type.findAll({where: {name: type[i]}})
        newPokemonDB.addType(typeid[0].id) 
       }
      
        res.json("Tu Pokemon se ha creado exitosamente")
        } catch (error) { res.json("Se ha producido un error, por favor intenta nuevamente") }
        
     })   








module.exports = router;
