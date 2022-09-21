import React from 'react';
import styles from './navbarfilters.module.css';
import { Link } from 'react-router-dom';
import {sortedPokemons, createdOrApiPokemons, pokemonsByType, getAllPokemons} from "../Actions/index.js";
import { useSelector, useDispatch } from 'react-redux'


export default function NavBarFilters () {
// importar las actions
//use dispatch
const dispatch = useDispatch();


    return (

        <nav className={styles.navFilters}>
            <Link to="/">
            <span className={styles.span}>INICIO</span>
            </Link>
            <Link to="/home" onClick={()=> dispatch(getAllPokemons())}>
            <span className={styles.span}>REINICIAR</span>
            </Link>
            <label className={styles.labels}for="mayor-menor-a-z">Filtros: </label>
            <select name="mayor-menor-a-z"id="mayor-menor-a-z"
                onChange={(e) => dispatch(sortedPokemons(e.target.value))}
            >
                <option value="Normal">Normal</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Highest Attack">Highest Attack</option>
                <option value="Lowest Attack">Lowest Attack</option>
            </select>

            <label className={styles.labels} for="creados-api">Creados/Api: </label>
            <select name="creados-api"id="creados-api"
            onChange={(e) => dispatch(createdOrApiPokemons(e.target.value))}
            >
            <option value="All">All</option>
            <option value="Creados">Creados</option>
            <option value="Api">Api</option>
            </select>

            <label className={styles.labels} for="tipos">Tipos: </label>
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
        </nav>
    )
}

// Notas:   onChange en cada select con dispatch de action con e.target.value (para acceder al input value)
// reducer:recibe las 3 actions (toda la logica va ahi)
// una action x select 3
// en cada case debo preguntar con if que es lo que llega por payload y ejecutar su logica
// lo que devuelve es una reasignacion del estado pokemonrenderizado con lo que me quedo guardado del filtrado, ordenamiento
