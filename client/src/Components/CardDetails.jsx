import React from 'react';
import styles from './carddetails.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonDetails } from '../Actions';
import { connect } from 'react-redux';

 

export  class CardDetails extends React.Component {
    //const dispatch = useDispatch();
   
  //  dispatch(getPokemonDetails(id))
  //const detalles = useSelector(state => state.pokemon)
  //useEffect(() => {  // actua como un DidMount y DidUpdate
    
  //      },[detalles])

componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPokemonDetails(id)
    const detalles = this.props.detalles
  }
 // <p className={styles.p}>Type: {detalles.types[0]}</p> 
     // consume lo que hay en pokemon del estado global
                                                      // equivalente al mapStatetoprops
    render(){ 



        const detalles = this.props.detalles
    return (
        <div className={styles.divCard}>
           <h3 className={styles.h3}>{detalles.name}</h3>
           <img className={styles.PokemonImg} src={detalles.img} alt="pokemonImg"/>
           <p className={styles.p}>Type: {detalles.types}</p> 
            <p className={styles.p}>ID: {detalles.id}</p> 
            <p className={styles.p}>Health Power: {detalles.hp}</p> 
            <p className={styles.p}>Attack: {detalles.attack}</p> 
            <p className={styles.p}>Defense: {detalles.defense}</p>
            <p className={styles.p}>Speed: {detalles.speed}</p> 
            <p className={styles.p}>Height: {detalles.height}</p>
            <p className={styles.p}>Weight: {detalles.weight}</p> 
            <p className={styles.p}>Abilities: {detalles.abilities}</p>     
            </div>
        );
    
}}

function mapStateToProps(state) {
    return {
        detalles: state.pokemon
      }
    }

function mapDispatchToProps(dispatch){
    return {
        getPokemonDetails: id => dispatch(getPokemonDetails(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CardDetails);