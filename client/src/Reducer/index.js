import { GET_ALL_POKEMONS, GET_POKEMON, CREATE_POKEMON, GET_POKEMON_BY_NAME, GET_TYPES } from "../Actions/index.js"

const initialState = {
    pokemones: [], 
    pokemon: {},
    message: "",
    types: [],
    pokemonrenderizado:[]
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_POKEMONS: 
            return {
                ...state,
                pokemones: state.pokemones.concat(action.payload),
                pokemonrenderizado: action.payload
            }
        case GET_POKEMON_BY_NAME: 
            return {
                ...state,
                pokemonrenderizado: (action.payload)
            }   
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
            case CREATE_POKEMON:
        return {
          ...state,
          message: action.payload
        }
        case GET_TYPES:
        return {
          ...state,
          types: action.payload
        }
        default: 
            return state
    }
}

