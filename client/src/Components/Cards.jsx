import React, {useEffect, useState} from 'react';
import styles from "./cards.module.css"
import Card from "./Card.jsx";
import {Paginacion}  from './Paginacion.jsx';
import { getAllPokemons } from '../Actions';
import { connect, useDispatch } from 'react-redux';


export  function Cards(props) {
    
const dispatch = useDispatch();
    
useEffect(() => {  
dispatch(getAllPokemons());
},[dispatch]) 
            
const [pagina, setPagina] = useState (1);
const [porPagina, setPorPagina] = useState (12);
    
const cardsArray = props.pokemones;
const maximo = Math.ceil(cardsArray.length / porPagina); // defino el maximo de paginas


if(props.pokemones) {  
    return (
        <>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        <div className={styles.divCards}>
            {props.pokemones?.slice (  //0,12 //recorta el array de a 12 cards
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                )
                .map(pokemon =>
                    <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.img} 
                        types={ pokemon.types && pokemon.types.join(' | ')}
                    />
                    ) } 
        </div>
        </>
    )}
else {
    return (
        <p>No se econtraron Pokemons</p>
    )
}} 
    
export const mapStateToProps = function(state) {
    return {
        pokemones: state.pokemonrenderizado
      }
    }

export default connect(mapStateToProps, null)(Cards);

