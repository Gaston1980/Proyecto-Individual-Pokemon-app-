import React from 'react';
import styles from './carddetails.module.css';
import {Link} from "react-router-dom";
import { getPokemonDetails, reiniciarPokemons, deletePokemonDB, cleanPokemonState } from '../Actions';
import { connect } from 'react-redux';

 export class CardDetails extends React.Component {

componentDidMount() {
const id = this.props.match.params.id; // const params = useParams() 
this.props.getPokemonDetails(id); // params.id
}
componentWillUnmount(){
this.props.cleanPokemonState();
}

 
 render(){ 
    const id = this.props.match.params.id;//lo uso en el delete
    const detalles = this.props.detalles;
    return (
        <>
        <nav className={styles.nav}>
            <Link to="/home" style={{textDecoration:"none"}} onClick={()=> this.props.reiniciarPokemons() } >
              <span className={styles.spanhome}>HOME</span>
            </Link>
        </nav>

        <div className={styles.divCard}>
           {id.includes("IDDB")? <button className={styles.bttndelete} disabled={detalles.name === "POKEMON DELETED"? true:false} onClick={()=> this.props.deletePokemonDB(id)}>DELETE</button> :null}
           <h3 className={styles.h3}>{detalles.name}</h3>
           <img className={styles.PokemonImg} src={detalles.img} alt="pokemonImg"/>
           {!detalles.types? null : <p className={styles.p}>Types: {detalles.types && detalles.types.join(' | ')} </p> }
           {detalles.id === "x"? null : <p className={styles.p}>ID: {detalles.id}</p> }
           {!detalles.hp? null : <p className={styles.p}>Health Power: {detalles.hp}</p> }
           {detalles.attack === "x"? <h3 className={styles.h3}>{detalles.name}</h3> :<p className={styles.p}>Attack: {detalles.attack}</p> }
           {detalles.defense ==="https://res.cloudinary.com/dyycj9vam/image/upload/v1673818030/Delete_card_1_copy_2_gljc3f.png"?<img className={styles.PokemonImg} src={detalles.defense} alt="pokemonImg"/> :<p className={styles.p}>Defense: {detalles.defense}</p>}
           {!detalles.speed? null :<p className={styles.p}>Speed: {detalles.speed}</p> }
           {!detalles.height? null :<p className={styles.p}>Height: {detalles.height}</p>}
           {!detalles.weight? null :<p className={styles.p}>Weight: {detalles.weight}</p> }
           {detalles.abilities === "!x!"?<h3 className={styles.h3}>{detalles.name}</h3>:<p className={styles.p}>Abilities: {detalles.abilities}</p> }    
        </div>

        <footer className={styles.footer}>
           <p className={styles.pfooter}>Pokemon App created by Gaston Frissiones 2022</p>
        </footer>

        </>
          );
      }}

function mapStateToProps(state) { 
    return {
        detalles: state.pokemon
      }
    }

function mapDispatchToProps(dispatch){ 
    return {
        getPokemonDetails: id => dispatch(getPokemonDetails(id)),
        reiniciarPokemons: () => dispatch(reiniciarPokemons()),
        deletePokemonDB: id => dispatch(deletePokemonDB(id)),
        cleanPokemonState: () => dispatch(cleanPokemonState())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardDetails);

