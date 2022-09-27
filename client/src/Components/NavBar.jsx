import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo-Pokemon280x77.png'
import SearchBar from './SearchBar';

export default function NavBar() {
    return (
       
        <nav className={styles.nav}>
         
            <img className={styles.LogoPokemon} src={Logo} alt="logoPokemon"/>  
            < SearchBar/>
            <Link to="/home/create">
            <button className={styles.btnCrear}>CREAR</button>
            </Link>  
             
        </nav>
       )
    }