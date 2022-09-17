import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./form.module.css";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { createPokemon, getTypes } from '../Actions';

export default function Form () {
  const dispatch = useDispatch();
  useEffect(() => {  // actua como un DidMount y DidUpdate
    dispatch(getTypes())
     },[dispatch])
  


const message = useSelector(state => state.message)


const [name, setName] = useState('');
const [hp, setHp] = useState("");
const [attack, setAttack] = useState("");
const [defense, setDefense] = useState("");
const [speed, setSpeed] = useState("");
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
const [image, setImage] = useState("");
const [type, setType] = useState("");
const [abilities, setAbilities] = useState("");
const [errorName, setErrorName] = useState('');
const [errorHp, setErrorHp] = useState('');
const [errorAttack, setErrorAttack] = useState('');
const [errorDefense, setErrorDefense] = useState('');
const [errorSpeed, setErrorSpeed] = useState('');
const [errorWeight, setErrorWeight] = useState('');
const [errorHeight, setErrorHeight] = useState('');
const [errorImage, setErrorImage] = useState('');
const [errorType, setErrorType] = useState('');
const [errorAbilities, setErrorAbilities] = useState('');

function validateName(value) {
  
    if(value  !== "Gaston") {
      setErrorName('>>>> El nombre tiene que contener caracteres alfabeticos <<<< ');
    } else {
      setErrorName('');
  }
    setName(value);
  }

  function validateHp(value) {
    if(value !== "Gaston") {
      setErrorHp('>>>> El nombre tiene que contener caracteres alfabeticos <<<< ');
    } else {
      setErrorHp('');
    }
    setHp(value);
  
  }

  function validateAttack(value) {
  }

  function validateDefense(value) {
  }

  function validateSpeed(value) {
  }

  function validateWeight(value) {
  }

  function validateHeight(value) {
  } 

  function validateHeight(value) {
  }
  
  function validateImage (value) {
    if(value.slice(-4) !== ".png") {
      setErrorImage('>>>> La imagen debe ser del tipo .png unicamente <<<< ');
      
    } else {
      setErrorHp('');
    }
    setImage(value);
  }

  function validateType (value) {
  }
  


  

function onSubmit (e) {
e.preventDefault() // para que no se re-renderice el form cuando se hace el submit
// aca hay que dispatch la action createpokemon // dispatch(actionname)
const obj = {name: name, health_Power: hp, attack: attack, defense: defense, speed: speed, height: height,  weight: weight, abilities: abilities   }
dispatch(createPokemon(obj))
setName("");
setHp("");
setAttack("");
setDefense("");
setSpeed("");
setWeight("");
setHeight("");
setImage("");
setType("");
setAbilities("");
}


    return (
      <div className={styles.div}>
        <nav className={styles.nav}>
          <span className={styles.span}>CREA TU POKEMON</span>
          <Link to="/home">
            <span className={styles.spanhome}>HOME</span>
          </Link>
        </nav>
        <form type="POST" enctype="multipart/form-data" className={styles.form} onSubmit={onSubmit}>
             <label className={styles.label}>Name: </label>
             <input className={errorName? styles.invalido : styles.valido} // aca digo si hay error, osea error no esta vacio, aplicar la clase de estilos "danger"
             key="name" name="name" value={name} type="text" required onChange={(e) => validateName(e.target.value)}/>
             {!errorName ? null : <span className={styles.errorMessage}>{errorName}</span>} 

             <label className={styles.label}>HP: </label> 
             <input className={errorHp? styles.invalido : styles.valido}
             key="hp" name="hp" value={hp} type="text" required onChange={(e) => validateHp(e.target.value)}/>
             {!errorHp ? null : <span className={styles.errorMessage}>{errorHp}</span>}

             <label className={styles.label}>Attack: </label> 
             <input className={errorAttack? styles.invalido : styles.valido}
             key="attack" name="attack" value={attack} type="text" required onChange={(e) => validateAttack(e.target.value)}/>
             {!errorAttack ? null : <span>{errorAttack}</span>}

             <label className={styles.label}>Defense: </label> 
             <input className={errorDefense? styles.invalido : styles.valido}
             key="defense" name="defense" value={defense} type="text" required onChange={(e) => validateDefense(e.target.value)}/>
             {!errorDefense ? null : <span>{errorDefense}</span>}

             <label className={styles.label}>Speed: </label> 
             <input className={errorSpeed? styles.invalido : styles.valido}
             key="speed" name="speed" value={speed} type="text" required onChange={(e) => validateSpeed(e.target.value)}/>
             {!errorSpeed ? null : <span>{errorSpeed}</span>}

             <label className={styles.label}>Weight: </label> 
             <input className={errorWeight? styles.invalido : styles.valido}
             key="weight" name="weight" value={weight} type="text" required onChange={(e) => validateWeight(e.target.value)}/>
             {!errorWeight ? null : <span>{errorWeight}</span>}

             <label className={styles.label}>Height: </label> 
             <input className={errorHeight? styles.invalido : styles.valido}
             key="height" name="height" value={height} type="text" required onChange={(e) => validateHeight(e.target.value)}/>
             {!errorHeight ? null : <span>{errorHeight}</span>}

             <label className={styles.imglabel}>Image: </label> 
             <input className={errorImage? styles.invalido : styles.valido}
             key="image" name="image" value={image} type="file"  required onChange={(e) => validateImage(e.target.value)}/>
             {!errorImage ? null : <span className={styles.errorMessage}>{errorImage}</span> }

             <label className={styles.typelabel}>Type: </label> 
             <input className={errorType? styles.invalido : styles.valido}
             key="type" name="type" value={type} type="text"  required onChange={(e) => validateType(e.target.value)}/>
             {!errorType ? null : <p>{errorType}</p>}





        <button className={styles.button} type="submit" disabled={errorAttack || errorDefense || errorHeight || errorHp || errorImage || errorName || errorSpeed || errorType || errorWeight ? true : false} >Create Pokemon</button> 

      </form>
      <footer className={styles.footer}>
        <p className={styles.pfooter}>Pokemon App created by Gaston Frissiones 2022</p>
      </footer>
      </div>
    )
}

//Notas: accept=".png" 