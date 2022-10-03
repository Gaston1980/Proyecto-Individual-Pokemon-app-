// Get All Pokemons from Api con Async Await - Map - Promise.all
// Problems: sucede muy seguidamente que algunas de las promesas no se resuelven en el 
// promise.all y tirar error. No eficiente funciona 3 de 10.
const resultaxios = await axios("https://pokeapi.co/api/v2/pokemon?limit=40")
   let arrayPromises = [];
    resultaxios.data.results.map((p) => arrayPromises.push(axios(p.url)));// hago el subrequest
    console.log("ArrayPromises",arrayPromises)
    const resultPromiseAll = await Promise.all(arrayPromises)
        
        
       pokemonsCards = resultPromiseAll.map((p)=> {
            //console.log("P:",p)
            let types =[];
            p.data.types.forEach( t => types.push(t.type.name)) 
            var obj = {
                id: p.data.id,
                name: p.data.name,//[0].toUpperCase()+ p.name.slice(1),
                img: p.data.sprites.other.dream_world.front_default,
                attack: p.data.stats[1].base_stat,
                types: types
             }
             console.log("Objeto:",obj)
             return obj
        })
        //console.log("PokemonsCards:",pokemonsCards)

        
     
     const pokemonsApiAndDb = pokemonsCards.concat(pokemonsFromDBClean)//Junto las dos busquedas 
     res.status(200).json(pokemonsApiAndDb)
       