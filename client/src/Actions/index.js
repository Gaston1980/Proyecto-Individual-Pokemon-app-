import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_TYPES = "GET_TYPES"
export const SORTED_POKEMONS = "SORTED_POKEMONS"
export const CREATED_OR_API_POKEMONS = "CREATED_OR_API_POKEMONS"
export const POKEMONS_BY_TYPE = "POKEMONS_BY_TYPE"
export const REINICIAR_POKEMONS = "REINICIAR_POKEMONS"

export const getAllPokemons = () => dispatch => {;
    return fetch('http://localhost:3001/pokemons')
    .then(res => res.json())
    .then(obj => dispatch({type: GET_ALL_POKEMONS, payload: obj}))
    .catch(err => console.log(err))
    }

export const getPokemonByName = (name) => dispatch => {;
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
    .then(res => res.json())
    .then(obj => dispatch({type: GET_POKEMON_BY_NAME, payload: obj}))
    .catch(err => console.log(err))
    }
 




export const getPokemonDetails = (id) => dispatch => {
    return fetch(`http://localhost:3001/pokemons/${id}`)
    .then(res => res.json())
    .then(obj => dispatch({type: GET_POKEMON, payload: obj}))
    .catch(err => console.log(err))
    }

    
export const createPokemon = (payload) => dispatch => {
   
    return axios.post("http://localhost:3001/pokemons/",payload)
    .then(res => dispatch({type: CREATE_POKEMON, payload: res.data}) )
    .catch(err => console.log(err))
}
        
export const getTypes = () => dispatch => {
    return fetch("http://localhost:3001/types")
    .then(res => res.json())
    .then(array => dispatch({type: GET_TYPES, payload: array}))
    .catch(err => console.log(err))
} 

export const sortedPokemons = (payload) => {
    return { 
        type: SORTED_POKEMONS, 
        payload 

        }}

export const createdOrApiPokemons = (payload) => {
    return { 
        type: CREATED_OR_API_POKEMONS, 
        payload 
        
        }}

export const pokemonsByType = (payload) => {
    return { 
         type: POKEMONS_BY_TYPE, 
         payload 
                
        }}


export const reiniciarPokemons = (payload) => {
return {
    type: REINICIAR_POKEMONS,
    payload
}
}        