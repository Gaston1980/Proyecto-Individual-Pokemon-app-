import React from 'react';
import styles from "./card.module.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemonDetails } from '../Actions';
// falta importar cosas


export default function Card (props) {
   //const dispatch = useDispatch(); // equivale al mapDispatchToProps, permite disponer y dispatch actions
   // onClick = { () => { dispatch(getPokemonDetails(props.id))}}
   // {`/home/details/${props.id}`} 
   return (

        <div className={styles.divCard}>
            <Link to={`/home/details/${props.id}`}
            
            
             >
              <h3 className={styles.h3}>{props.name}</h3>
            </Link>
            <img className={styles.PokemonImg} src={props.img} alt="pokemonImg"/>
            <p className={styles.p}>Type: {props.types}</p>   
            </div>
        );
    };

    /* export const mapDispatchToProps = {deleteHouse};  // se uso para el boton de eliminar

export default connect(null, mapDispatchToProps)(HouseCard);
*/