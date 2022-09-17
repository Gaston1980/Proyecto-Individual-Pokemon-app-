export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_TYPES = "GET_TYPES"



export const getAllPokemons = () => dispatch => {;
    return fetch('http://localhost:3001/pokemons')
    .then(res => res.json())
    .then(obj => dispatch({type: GET_ALL_POKEMONS, payload: obj}))
    }

export const getPokemonByName = (name) => dispatch => {;
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
    .then(res => res.json())
    .then(obj => dispatch({type: GET_POKEMON_BY_NAME, payload: obj}))
    }
  //  getPokemonByName la va dispatchar el SearchBar




export const getPokemonDetails = (id) => dispatch => {
    return fetch(`http://localhost:3001/pokemons/${id}`)
    .then(res => res.json())
    .then(obj => dispatch({type: GET_POKEMON, payload: obj}))
    }

    
export const createPokemon = (payload) => dispatch => {
    return fetch.post("http://localhost:3001/pokemons/",payload)
    .then(res => res.json())
    .then(obj => dispatch({type: CREATE_POKEMON, payload: obj}))
}
        
export const getTypes = () => dispatch => {
    return fetch("http://localhost:3001/types")
    .then(res => res.json())
    .then(array => dispatch({type: GET_TYPES, payload: array}))
}    
        