import { GET_ALL_POKEMONS, GET_POKEMON, CREATE_POKEMON, GET_POKEMON_BY_NAME, GET_TYPES, SORTED_POKEMONS, CREATED_OR_API_POKEMONS, POKEMONS_BY_TYPE } from "../Actions/index.js"

const initialState = {
    pokemones: [], 
    pokemon: {},
    message: "",
    types: [],
    pokemonrenderizado:[],
    
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
        case SORTED_POKEMONS:
            if(action.payload === "Normal"){
                return {
                    ...state,
                    pokemonrenderizado: [...state.pokemones]
                  }   
            }else
            if(action.payload === "A-Z"){
            let sortedAZ = state.pokemonrenderizado.sort((a,b) => {
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                 // a = b
                  return 0;
                })
                return {
                    ...state,
                    pokemonrenderizado: [...sortedAZ]
                  }  
            } else
            if(action.payload === "Z-A"){
                let sortedZA = state.pokemonrenderizado.sort((a,b) => {
                    if (b.name > a.name) {
                        return 1;
                      }
                      if (b.name < a.name) {
                        return -1;
                      }
                      
                      return 0;
                    })
                    return {
                        ...state,
                        pokemonrenderizado: [...sortedZA]
                      }  
                } else
                if(action.payload === "Highest Attack"){
                    
                    let sortedHA = state.pokemonrenderizado.sort((a,b) => {
                        if (b.attack > a.attack) {
                            return 1;
                          }
                          if (b.attack < a.attack) {
                            return -1;
                          }
                        //a = b
                          return 0;
                        })
                        return {
                            ...state,
                            pokemonrenderizado: [...sortedHA]
                          }  
                    } else
                    if(action.payload === "Lowest Attack"){
                        let sortedLA = state.pokemonrenderizado.sort((a,b) => {
                            if (a.attack > b.attack) {
                                return 1;
                              }
                              if (a.attack < b.attack) {
                                return -1;
                              }
                             
                              return 0;
                            })
                            return {
                                ...state,
                                pokemonrenderizado: [...sortedLA]
                              }  
                        }break;
        case CREATED_OR_API_POKEMONS:
            if(action.payload === "All"){
                return {
                    ...state,
                    pokemonrenderizado: [...state.pokemones]
                  }   
            }else
            if(action.payload === "Creados"){
                let allPokemons = state.pokemones
                let pokemonsCreados = allPokemons.filter(poke => 
                    poke.hasOwnProperty("idVirtual") )
                    console.log(pokemonsCreados)
                    return {
                        ...state,
                        pokemonrenderizado: [...pokemonsCreados]
                      }      
               } else
               if(action.payload === "Api"){
                let allPokemons = state.pokemones
                let pokemonsApi = allPokemons.filter(poke => 
                    !poke.hasOwnProperty("idVirtual") )
                    console.log(pokemonsApi)
                    return {
                        ...state,
                        pokemonrenderizado: [...pokemonsApi]
                      }      
               }break;
            
        case POKEMONS_BY_TYPE:
            if(action.payload === "All"){
                return {
                    ...state,
                    pokemonrenderizado: [...state.pokemones]
                    
                }} else {
                    let allPokemons = state.pokemones
                    let pokemonByType = allPokemons.filter(pokemon => pokemon.types === action.payload )
                    return {
                        ...state,
                        pokemonrenderizado: [...pokemonByType]
                    }
                }
                
            default: 
            return state
    }
}

