const getPokemonById = async (req,res) => {

    const {id} = req.params;
    const pokemonDetails = {};
    try {
     await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => { 
    
           pokemonDetails.id = response.data.id,
           pokemonDetails.name = response.data.name,
           pokemonDetails.img = response.data.sprites.other.dream_world.front_default,
           pokemonDetails.attack = response.data.stats[1].base_stat,
           pokemonDetails.types = [],
           response.data.types.forEach( t => pokemonDetails.types.push(t.type.name)) 
           pokemonDetails.hp = response.data.stats[0].base_stat,
           pokemonDetails.defense = response.data.stats[2].base_stat,
           pokemonDetails.speed = response.data.stats[5].base_stat,
           pokemonDetails.height = response.data.height,
           pokemonDetails.weight = response.data.weight,
           pokemonDetails.abilities = response.data.abilities[0].ability.name
    
    
            
            
            res.json(pokemonDetails)
        })
       
    } catch (e) {res.status(404).json({msg:"Pokemon no encontrado"})}
    }

    module.exports = getPokemonById;
    
    
    