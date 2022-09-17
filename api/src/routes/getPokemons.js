const getPokemons = async (req,res) => {

    const pokemonsCards = [];
    try {
    await axios("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then(async response => { 
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
                types

            });
         })
     }
     res.status(200).json(pokemonsCards)
       })
    } catch (e) {res.status(400).json(e)}
    }



    module.exports = getPokemons;
    