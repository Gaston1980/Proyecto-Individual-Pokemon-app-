import React, {useEffect} from 'react';
import styles from "./cards.module.css"
import Card from "./Card.jsx"
import { getAllPokemons } from '../Actions';
import { connect, useDispatch } from 'react-redux';




export  function Cards(props) {
const dispatch = useDispatch();
    
   useEffect(() => {  // actua como un DidMount y DidUpdate
      dispatch(getAllPokemons());
    },[dispatch])

   if(props.pokemones) {  
    return (
        <div className={styles.divCards}>
            {
                props.pokemones?.map(pokemon =>
                    <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.img}
                        types={pokemon.types}
                    />
                    )  
            } 
            
        </div>
        
    )
        }
else {
    return (
        <p>No se econtraron Pokemons</p>
    )
}
} 
    
export const mapStateToProps = function(state) {
    return {
        pokemones: state.pokemonrenderizado
      }
    }




export default connect(mapStateToProps, null)(Cards);

