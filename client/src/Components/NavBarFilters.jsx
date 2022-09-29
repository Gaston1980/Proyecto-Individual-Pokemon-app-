import React from 'react';
import styles from './navbarfilters.module.css';
import { Link } from 'react-router-dom';
import {sortedPokemons, createdOrApiPokemons, pokemonsByType, reiniciarPokemons} from "../Actions/index.js";
import { useDispatch } from 'react-redux'


export default function NavBarFilters () {

const dispatch = useDispatch();


    return (

        <nav className={styles.navFilters}>
            
            <Link to="/home" style={{textDecoration:"none"}} onClick={() => dispatch(reiniciarPokemons())}>
            <span className={styles.span}>HOME</span>
            </Link>
            
           

            <label className={styles.labels} htmlFor="tipos">Types: </label>
            <select name="tipos"id="tipos"
            onChange={(e) => dispatch(pokemonsByType(e.target.value))}
            >
            <option value="All">All Types</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="steel">Steel</option>
            <option value="ghost">Ghost</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="shadow">Shadow</option>
            <option value="unknown">Unknown</option>
            </select>

            <label className={styles.labels} htmlFor="mayor-menor-a-z">Sort by: </label>
            <select name="mayor-menor-a-z"id="mayor-menor-a-z" 
            onChange={(e) => dispatch(sortedPokemons(e.target.value))}
            >
                <option value="Choose one:">Choose one:</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Highest Attack">Highest Attack</option>
                <option value="Lowest Attack">Lowest Attack</option>
            </select>

            <label className={styles.labels} htmlFor="creados-api">Created/Api: </label>
            <select name="creados-api"id="creados-api"
            onChange={(e) => dispatch(createdOrApiPokemons(e.target.value))}
            >
            <option value="All">All</option>
            <option value="Created">Created</option>
            <option value="Api">Api</option>
            </select>
        </nav>
    )
}

