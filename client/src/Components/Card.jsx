import React from 'react';
import styles from "./card.module.css";
import { Link } from 'react-router-dom';


export default function Card (props) {
   
   return (

        <div className={styles.divCard}> 
            {props.id === "0000404"? <h3 className={styles.h3}> {props.name} </h3> :
            <Link to={`/home/details/${props.id}`}>
              <h3 className={styles.h3}>{props.name}</h3>
            </Link>}
            <img className={styles.PokemonImg} src={props.img} alt="pokemonImg"/>
            {!props.types ? null : <p className={styles.p}>Type: {props.types}</p> } 
         </div>
        );
    };

    