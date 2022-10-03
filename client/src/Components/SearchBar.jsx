import React from 'react';
import { getPokemonByName } from '../Actions';
import styles from "./searchbar.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SearchBar () {

const dispatch = useDispatch(); // mapDispacthToProps
const [pokemonName, setPokemonName] = useState('');
    
const toLowerCaseInput = (value) => {
let newValue = value.toLowerCase()//para que se convierta todo lo tipeado en minusculas
setPokemonName(newValue)
}


const handleOnClick = (e) => {
e.preventDefault()
dispatch(getPokemonByName(pokemonName))
setPokemonName("")
}
    
    
  return (
       <div className={styles.divSearchBar}>

        <input className={styles.input} 
        autoComplete="off"
        placeholder="   Search Pokemon by name..." 
        name="searchedPokemon" value={pokemonName} type="text"
        onChange={(e) => toLowerCaseInput(e.target.value)}
        /> 
        
        <button className={styles.btnBuscar} type="submit" 
        onClick = {handleOnClick} >SEARCH</button>
   
       </div>
        )
      };
       
  