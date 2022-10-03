import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"; //para que no haya errores de tipeo
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMON_DETAILS = "GET_POKEMON_DETAILS";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_TYPES = "GET_TYPES"
export const SORTED_POKEMONS = "SORTED_POKEMONS"
export const CREATED_OR_API_POKEMONS = "CREATED_OR_API_POKEMONS"
export const POKEMONS_BY_TYPE = "POKEMONS_BY_TYPE"
export const REINICIAR_POKEMONS = "REINICIAR_POKEMONS"
export const DELETE_POKEMON_DB = "DELETE_POKEMON_DB"
export const UPDATE_POKEMON = "UPDATE_POKEMON"
export const CLEAN_POKEMON_STATE = "CLEAN_POKEMON_STATE"


export const getAllPokemons = () => dispatch => {;
    return fetch('http://localhost:3001/pokemons') // {status: pending, result:undefined}
    .then(res => res.json()) // SH -->{status:fulfilled, result:value}
    .then(obj => dispatch({type: GET_ALL_POKEMONS, payload: obj}))
    .catch(err => console.log(err))// EH-->{status:rejected, result:error}
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
    .then(obj => dispatch({type: GET_POKEMON_DETAILS, payload: obj}))
    .catch(err => console.log(err))
    }
   
export const createPokemon = (payload) => dispatch => {
    return axios.post("http://localhost:3001/pokemons/",payload)
    .then(res => dispatch({type: CREATE_POKEMON, payload: res.data}) )
    .catch(err => console.log(err))
    }

export const updatePokemon = (payload) => dispatch => {
    return axios.put("http://localhost:3001/pokemons/",payload)
    .then(res => dispatch({type: UPDATE_POKEMON, payload: res.data}) )
    .catch(err => console.log(err))
    }



        
export const getTypes = () => dispatch => {
    return fetch("http://localhost:3001/types")
    .then(res => res.json())
    .then(array => dispatch({type: GET_TYPES, payload: array}))
    .catch(err => console.log(err))
    } 

export const sortedPokemons = (payload) => {
    console.log(payload)
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
        }} 
        
export const cleanPokemonState = (payload) => {
    return {
        type: CLEAN_POKEMON_STATE,
        payload
        }}  

export const deletePokemonDB  = (id) => dispatch => {
    return axios.delete(`http://localhost:3001/pokemons/${id}`)
    .then(res => dispatch({type: DELETE_POKEMON_DB, payload: res.data}) )
    .catch(err => console.log("CatchAction:",err))
    }

