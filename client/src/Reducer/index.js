import { GET_ALL_POKEMONS, GET_POKEMON_DETAILS, CREATE_POKEMON,UPDATE_POKEMON, GET_POKEMON_BY_NAME, GET_TYPES, SORTED_POKEMONS, CREATED_OR_API_POKEMONS, POKEMONS_BY_TYPE, REINICIAR_POKEMONS,CLEAN_POKEMON_STATE, DELETE_POKEMON_DB } from "../Actions/index.js"
import Swal from 'sweetalert2'

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
                pokemones: action.payload, 
                pokemonrenderizado: action.payload,
               
            }

        case GET_POKEMON_BY_NAME:
          console.log("Payload:",action.payload) 
            return {
                ...state,
                pokemonrenderizado: action.payload
            } 

        case GET_POKEMON_DETAILS:
            return {
                ...state,
                pokemon: action.payload
            }

        case CREATE_POKEMON:
            Swal.fire(action.payload)
            return {
                ...state,
                message: action.payload
             }
        case UPDATE_POKEMON:
            Swal.fire(action.payload)
            return {
                ...state,
                message: action.payload
            }

        case DELETE_POKEMON_DB:
            Swal.fire({text:"El Pokemon se ha borrado de la base de datos", width:"22em", icon:"success",confirmButtonColor:"rgb(94, 89, 89)"})
                return {
                    ...state,
                    pokemon: action.payload
                 }    

        case GET_TYPES:
            return {
               ...state,
                types: action.payload
             }

        case REINICIAR_POKEMONS:
            return {
               ...state,
              pokemonrenderizado: [...state.pokemones]
             }

        case CLEAN_POKEMON_STATE:
                return {
                   ...state,
                  pokemon: {}
                 }

        case SORTED_POKEMONS:
            if(action.payload === "Choose one:"){
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
            if(action.payload === "Created"){
                let allPokemons = state.pokemones
                let pokemonsCreados = allPokemons.filter(poke => 
                    isNaN(poke.id) ) //devuelva todos los que no sea un numero el id
                    //console.log(pokemonsCreados)
              return {
                     ...state,
                     pokemonrenderizado: [...pokemonsCreados]
                      }      
               }else
               if(action.payload === "Api"){
                let allPokemons = state.pokemones
                let pokemonsApi = allPokemons.filter(poke => 
                    !(isNaN(poke.id)) )
                    //console.log(pokemonsApi)
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
                    
                }
           
            
            } else {
                    let allPokemons = state.pokemones;
                    let pokemonByType = [];
                    for(let i=0; i< allPokemons.length; i++){
                      if(allPokemons[i].types.includes(action.payload)){
                        pokemonByType.push(allPokemons[i])
                      }
                    } 
                     
                    return {
                        ...state,
                        pokemonrenderizado: [...pokemonByType]
                    }
                }
                
            default: 
            return state
    }
}

