import React from 'react';
import { getPokemonByName } from '../Actions';
import styles from "./searchbar.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SearchBar () {

    const dispatch = useDispatch(); // para disponer de las actions y dispacharlas
    const [pokemonName, setPokemonName] = useState('');// creo estado local para manejar el input value de la SearchBar
    
    
    
    return (

      
    <div className={styles.divSearchBar}>

        <input className={styles.input} 
        placeholder="   Search Pokemon by name..." 
        name="searchedPokemon" value={pokemonName} type="text"
        onChange={(e) => setPokemonName(e.target.value)}
        /> 
        
        <button className={styles.btnBuscar} type="submit" disabled = {pokemonName? false : true}
        onClick = { () => { dispatch(getPokemonByName(pokemonName))}}>BUSCAR</button>
   

        </div>
  )
};
       
   