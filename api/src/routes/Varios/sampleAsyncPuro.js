
// Get All Pokemons from APi con Async Await puro y ciclo For
// Problems: sucede seguidamente que no se terminan de resolver todas las promesas
// en el Promise.all y tira error. No eficiente, funciona 3 de 10
const resultaxios = await axios("https://pokeapi.co/api/v2/pokemon?limit=40")
    //console.log("Response:",response) 
 for(let i=0; i<resultaxios.data.results.length; i++){ // aca hago el subrequest a cada pokemon url
 const  resultsubrequest = await axios(`${resultaxios.data.results[i].url}`) // url dinamica
      // aca saco las propiedades que necesito de cada pokemon
        let types =[];
        resultsubrequest.data.types.forEach( t => types.push(t.type.name)) 
        pokemonsCards.push({
            id: resultsubrequest.data.id,
            name: resultsubrequest.data.name[0].toUpperCase()+resultsubrequest.data.name.slice(1),
            img: resultsubrequest.data.sprites.other.dream_world.front_default,
            attack: resultsubrequest.data.stats[1].base_stat,
            types: types

        });   
 }
 const pokemonsApiAndDb = pokemonsCards.concat(pokemonsFromDBClean)//Junto las dos busquedas 
 res.status(200).json(pokemonsApiAndDb)
   