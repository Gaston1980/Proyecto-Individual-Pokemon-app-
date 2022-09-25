/*console.log("Entre al else")
    let pokemonsFromDB = []; 
    pokemonsFromDB = await Pokemon.findAll({ include:{model: Type, attributes:["name"],through:{
    attributes: [],}}}) // devuelve un array de obj
    
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

    await axios("https://pokeapi.co/api/v2/pokemon?limit=40")
    console.log("Entre al axios")
   
    .then(async response => {
        console.log("Response:",response) 
     for(let i=0; i<response.data.results.length; i++){ // aca hago el subrequest a cada pokemon url
         await axios(`${response.data.results[i].url}`)
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
         .catch(err => console.log(err))
     }
     const pokemonsApiDb = pokemonsCards.concat(pokemonsFromDBClean) 
     res.status(200).json(pokemonsApiDb)
       })
  
    }
})*/