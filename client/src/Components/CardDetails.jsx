import React from 'react';
import styles from './carddetails.module.css';
import {Link} from "react-router-dom";
import { getPokemonDetails, reiniciarPokemons } from '../Actions';
import { connect } from 'react-redux';

 export class CardDetails extends React.Component {

componentDidMount() {
const id = this.props.match.params.id;
this.props.getPokemonDetails(id);
}
 
 render(){ 

    const detalles = this.props.detalles;
    return (
        <>
        <nav className={styles.nav}>
            <Link to="/home" onClick={()=> this.props.reiniciarPokemons() } >
              <span className={styles.spanhome}>HOME</span>
            </Link>
        </nav>

        <div className={styles.divCard}>
           <h3 className={styles.h3}>{detalles.name}</h3>
           <img className={styles.PokemonImg} src={detalles.img} alt="pokemonImg"/>
           <p className={styles.p}>Types: {detalles.types && detalles.types.join(' | ')} </p> 
           <p className={styles.p}>ID: {detalles.id}</p> 
           <p className={styles.p}>Health Power: {detalles.hp}</p> 
           <p className={styles.p}>Attack: {detalles.attack}</p> 
           <p className={styles.p}>Defense: {detalles.defense}</p>
           <p className={styles.p}>Speed: {detalles.speed}</p> 
           <p className={styles.p}>Height: {detalles.height}</p>
           <p className={styles.p}>Weight: {detalles.weight}</p> 
           <p className={styles.p}>Abilities: {detalles.abilities}</p>     
        </div>

        <footer className={styles.footer}>
           <p className={styles.pfooter}>Pokemon App created by Gaston Frissiones 2022</p>
        </footer>

        </>
          );
      }}

function mapStateToProps(state) { // permite consumir del estado global
    return {
        detalles: state.pokemon
      }
    }

function mapDispatchToProps(dispatch){ // permite dispatchar actions
    return {
        getPokemonDetails: id => dispatch(getPokemonDetails(id)),
        reiniciarPokemons: () => dispatch(reiniciarPokemons())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardDetails);

