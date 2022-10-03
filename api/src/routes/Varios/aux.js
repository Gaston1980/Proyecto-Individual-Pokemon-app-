// Get All Pokemons from Api Hibrido: async await, promesas y ciclo for.
// Tarda pero funciona siempre, todas las promesas se resuelven exitosamente

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
            name: response.data.name[0].toUpperCase()+response.data.name.slice(1),
            img: response.data.sprites.other.dream_world.front_default,
            attack: response.data.stats[1].base_stat,
            types: types

        });
     })
     
 }
 const pokemonsApiAndDb = pokemonsCards.concat(pokemonsFromDBClean)//Junto las dos busquedas 
 res.status(200).json(pokemonsApiAndDb)
   })