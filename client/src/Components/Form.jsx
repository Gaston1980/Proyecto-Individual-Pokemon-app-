import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./form.module.css";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { createPokemon, getTypes } from '../Actions';

export default function Form () {
const dispatch = useDispatch();
  

useEffect(() => {  // actua como un DidMount y DidUpdate
dispatch(getTypes())
},[dispatch]) // array de dependencias
  

const [name, setName] = useState("");
const [hp, setHp] = useState("");
const [attack, setAttack] = useState("");
const [defense, setDefense] = useState("");
const [speed, setSpeed] = useState("");
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
const [abilities, setAbilities] = useState("");
const [image, setImage] = useState("");
const [type, setType] = useState([]);

const [errorName, setErrorName] = useState("");
const [errorHp, setErrorHp] = useState("");
const [errorAttack, setErrorAttack] = useState("");
const [errorDefense, setErrorDefense] = useState("");
const [errorSpeed, setErrorSpeed] = useState("");
const [errorWeight, setErrorWeight] = useState("");
const [errorHeight, setErrorHeight] = useState("");
const [errorAbilities, setErrorAbilities] = useState("");
const [errorImage, setErrorImage] = useState("");


function validateName(value) {
if(!/^[a-z]+$/.test(value)) { // solo caracteres a-z minusculas y al menos uno
setErrorName('>>>> Solo caracteres de la "a-z" minusculas y al menos uno <<<<');
} else {
setErrorName('');
}
setName(value);
}

function validateHp(value) {
if(!/^((?!(0))[0-9]{1,2})$/.test(value)) { // que no empiece con 0, solo caracteres del 0-9, se acepta uno o dos caracteres unicamente
setErrorHp('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
} else {
setErrorHp('');
}
setHp(value);
}

function validateAttack(value) {
if(!/^((?!(0))[0-9]{1,2})$/.test(value)) { 
setErrorAttack('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
} else {
setErrorAttack('');
}
setAttack(value);
}
  
function validateDefense(value) {
if(!/^((?!(0))[0-9]{1,2})$/.test(value)) { 
setErrorDefense('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
} else {
setErrorDefense('');
}
setDefense(value);
}

function validateSpeed(value) {
if(!/^((?!(0))[0-9]{1,2})$/.test(value)) { 
setErrorSpeed('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
} else {
setErrorSpeed('');
}
setSpeed(value);
}

function validateHeight(value) {
if(!/^((?!(0))[0-9]{1,2})$/.test(value)) { 
setErrorHeight('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
} else {
setErrorHeight('');
}
setHeight(value);
}

function validateWeight(value) {
if(!/^((?!(0))[0-9]{1,3})$/.test(value)) { 
setErrorWeight('>>>> Solo caracteres numericos... min 1 max 999 <<<< ');
} else {
setErrorWeight('');
}
setWeight(value); 
}

function validateAbilities(value) {
if(!/^[a-z]+$/.test(value)) { // solo caracteres a-z minusculas y al menos uno
setErrorAbilities('>>>> Solo caracteres de la "a-z" minusculas y al menos uno <<<<');
} else {
setErrorAbilities('');
}
setAbilities(value);
}
  
function validateImage (value) {
if (!/^(http[s]?)/.test(value)){
setErrorImage('>>>> La Url de la imagen debe comenzar con http <<<< ')
} else {
setErrorImage('');
}
setImage(value);
}

const handleOnChange = (e) => {
setType([...type, e.target.value])
}
  
  
const onDelete = (e) => {
//console.log(e.target.value)
setType(type.filter(t => t !== e.target.value))
}

function onSubmit (e) {
e.preventDefault()
const obj = { name: name,health_Power: hp, attack: attack, defense: defense, speed: speed, height: height,  weight: weight, abilities: abilities, image: image, type: type.length < 1? ["normal"] : type   }
//console.log(obj)
dispatch(createPokemon(obj));
setName("");
setHp("");
setAttack("");
setDefense("");
setSpeed("");
setWeight("");
setHeight("");
setImage("");
setAbilities("");
setType([])
}

return (
      <div className={styles.div}>
        <nav className={styles.nav}>
          <span className={styles.span}>CREA TU POKEMON</span>
          <Link to="/home">
          <span className={styles.spanhome}>HOME</span>
          </Link>
        </nav>
        <form type="POST"  className={styles.form} onSubmit={onSubmit}>

        <button name="submit"className={styles.button} type="submit"  disabled={!attack || errorAttack || !defense || errorDefense || !height || errorHeight || !hp || errorHp || !image || errorImage  || !name || errorName || !speed || errorSpeed || !weight || errorWeight || !abilities || errorAbilities ? true : false} >Create Pokemon</button> 

             <label className={styles.label}>Name: </label>
             <input className={errorName? styles.invalido : styles.valido} // aca digo si hay error, aplicar la clase de estilos "invalido"
             key="name" name="name" value={name} type="text" required onChange={(e) => validateName(e.target.value)}
             placeholder= "Type your pokemon name here..." autoComplete="off"/>
             {!errorName ? null : <span className={styles.errorMessage}>{errorName}</span>} 

             <label className={styles.label}>HP: </label> 
             <input className={errorHp? styles.invalido : styles.valido}
             key="hp" name="hp" value={hp} type="text" required onChange={(e) => validateHp(e.target.value)}
             placeholder= "Type the value from 1 to 99 here..." autoComplete="off"/>
             {!errorHp ? null : <span className={styles.errorMessage}>{errorHp}</span>}

             <label className={styles.label}>Attack: </label> 
             <input className={errorAttack? styles.invalido : styles.valido}
             key="attack" name="attack" value={attack} type="text" required onChange={(e) => validateAttack(e.target.value)}
             placeholder= "Type the value from 1 to 99 here..." autoComplete="off"/>
             {!errorAttack ? null : <span className={styles.errorMessage}>{errorAttack}</span>}

             <label className={styles.label}>Defense: </label> 
             <input className={errorDefense? styles.invalido : styles.valido}
             key="defense" name="defense" value={defense} type="text" required onChange={(e) => validateDefense(e.target.value)}
             placeholder= "Type the value from 1 to 99 here..." autoComplete="off"/>
             {!errorDefense ? null : <span className={styles.errorMessage}>{errorDefense}</span>}

             <label className={styles.label}>Speed: </label> 
             <input className={errorSpeed? styles.invalido : styles.valido}
             key="speed" name="speed" value={speed} type="text" required onChange={(e) => validateSpeed(e.target.value)}
             placeholder= "Type the value from 1 to 99 here..." autoComplete="off"/>
             {!errorSpeed ? null : <span className={styles.errorMessage}>{errorSpeed}</span>}

             <label className={styles.label}>Weight: </label> 
             <input className={errorWeight? styles.invalido : styles.valido}
             key="weight" name="weight" value={weight} type="text" required onChange={(e) => validateWeight(e.target.value)}
             placeholder= "Type the value from 1 to 999 here..." autoComplete="off"/>
             {!errorWeight ? null : <span className={styles.errorMessage}>{errorWeight}</span>}

             <label className={styles.label}>Height: </label> 
             <input className={errorHeight? styles.invalido : styles.valido}
             key="height" name="height" value={height} type="text" required onChange={(e) => validateHeight(e.target.value)}
             placeholder= "Type the value from 1 to 99 here..." autoComplete="off"/>
             {!errorHeight ? null : <span className={styles.errorMessage}>{errorHeight}</span>}

             <label className={styles.label}>Ability: </label> 
             <input className={errorAbilities? styles.invalido : styles.valido}
             key="ability" name="ability" value={abilities} type="text" required onChange={(e) => validateAbilities(e.target.value)}
             placeholder= "Type the ability name here..." autoComplete="off"/>
             {!errorAbilities ? null : <span className={styles.errorMessage}>{errorAbilities}</span>}


             <label className={styles.imglabel}>Image: </label> 
             <input className={errorImage? styles.invalido : styles.valido}
             key="image" name="image" value={image} type="text"  required onChange={(e) => validateImage(e.target.value)}
             placeholder= "Type the Url img here..." autoComplete="off"/>
             {!errorImage ? null : <span className={styles.errorMessage}>{errorImage}</span> }

             <label className={styles.typelabel}>Type: </label> 
             <select  name="types"id="types"  defaultValue="" className={styles.select}  disabled={type.length === 2} 
              onChange={handleOnChange}
             >
            <option disabled value="" >Elije 1 o 2 opciones</option>  
            <option >normal</option>
            <option >fighting</option>
            <option>flying</option>
            <option>poison</option>
            <option>ground</option>
            <option>rock</option>
            <option>bug</option>
            <option>steel</option>
            <option>ghost</option>
            <option>fire</option>
            <option>water</option>
            <option>grass</option>
            <option>electric</option>
            <option>psychic</option>
            <option>ice</option>
            <option>dragon</option>
            <option>dark</option>
            <option>fairy</option>
            <option>shadow</option>
            <option>unknown</option>
            </select>
           
       </form>

       <ul className={styles.ulselect}>
          {type.map((type, index)=>{
          return (
              <li className={styles.liselect} key={index}>
              <label className={styles.labelselect}>{type}</label>
              <button
                name="delete"
                className={styles.buttonselect} 
                value={type}
                onClick={(e)=>onDelete(e)}
              >X</button>
              </li>
              )
              })}
      </ul>

      <footer className={styles.footer}>
        <p className={styles.pfooter}>Pokemon App created by Gaston Frissiones 2022</p>
      </footer>
      
      </div>
    ) }
   

