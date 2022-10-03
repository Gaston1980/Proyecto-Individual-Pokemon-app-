import React from 'react';
import { useState } from 'react';
import styles from "./formupdate.module.css";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { updatePokemon } from '../Actions';

export default function FormUpdate () {

    const dispatch = useDispatch();
  

   // useEffect(() => {  // actua como un DidMount y DidUpdate
   // },) 
      
    
    const [where, setWhere] = useState("");
    const [name, setName] = useState("");
    const [hp, setHp] = useState("");
    const [attack, setAttack] = useState("");
    const [defense, setDefense] = useState("");
    const [speed, setSpeed] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [abilities, setAbilities] = useState("");
    const [image, setImage] = useState("");
    
    
    const [errorWhere, setErrorWhere] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorHp, setErrorHp] = useState("");
    const [errorAttack, setErrorAttack] = useState("");
    const [errorDefense, setErrorDefense] = useState("");
    const [errorSpeed, setErrorSpeed] = useState("");
    const [errorWeight, setErrorWeight] = useState("");
    const [errorHeight, setErrorHeight] = useState("");
    const [errorAbilities, setErrorAbilities] = useState("");
    const [errorImage, setErrorImage] = useState("");
    
    
    function validateWhere(value) {
    if(!/^[a-z]+$/.test(value)) { // solo caracteres a-z minusculas y al menos uno
    setErrorWhere('>>>> Solo caracteres de la "a-z" minusculas y al menos uno <<<<');
    } else {
    setErrorWhere('');
    }
    setWhere(value);
    }

    function validateName(value) {
      if(!/^[a-z]*$/.test(value)) { // solo caracteres a-z minusculas y al menos uno
      setErrorName('>>>> Solo caracteres de la "a-z" minusculas <<<<');
      } else {
      setErrorName('');
      }
      setName(value);
      }
      
    
    function validateHp(value) {
    if(!/^((?!(0))[0-9]{1,2})*$/.test(value)) { // que no empiece con 0, solo caracteres del 0-9, se acepta uno o dos caracteres unicamente
    setErrorHp('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
    } else {
    setErrorHp('');
    }
    setHp(value);
    }
    
    function validateAttack(value) {
    if(!/^((?!(0))[0-9]{1,2})*$/.test(value)) { 
    setErrorAttack('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
    } else {
    setErrorAttack('');
    }
    setAttack(value);
    }
      
    function validateDefense(value) {
    if(!/^((?!(0))[0-9]{1,2})*$/.test(value)) { 
    setErrorDefense('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
    } else {
    setErrorDefense('');
    }
    setDefense(value);
    }
    
    function validateSpeed(value) {
    if(!/^((?!(0))[0-9]{1,2})*$/.test(value)) { 
    setErrorSpeed('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
    } else {
    setErrorSpeed('');
    }
    setSpeed(value);
    }
    
    function validateHeight(value) {
    if(!/^((?!(0))[0-9]{1,2})*$/.test(value)) { 
    setErrorHeight('>>>> Solo caracteres numericos... min 1 max 99 <<<< ');
    } else {
    setErrorHeight('');
    }
    setHeight(value);
    }
    
    function validateWeight(value) {
    if(!/^((?!(0))[0-9]{1,3})*$/.test(value)) { 
    setErrorWeight('>>>> Solo caracteres numericos... min 1 max 999 <<<< ');
    } else {
    setErrorWeight('');
    }
    setWeight(value); 
    }
    
    function validateAbilities(value) {
    if(!/^[a-z]*$/.test(value)) { // solo caracteres a-z minusculas y al menos uno
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
    
   
    
    function onSubmit (e) {
    e.preventDefault()
    const obj = { where: where, name:name, health_Power: hp, attack: attack, defense: defense, speed: speed, height: height,  weight: weight, abilities: abilities, image: image }
    //console.log(obj)
    dispatch(updatePokemon(obj));
    setWhere("");
    setName("");
    setHp("");
    setAttack("");
    setDefense("");
    setSpeed("");
    setWeight("");
    setHeight("");
    setImage("");
    setAbilities("");
    }
    
    return (
          <div className={styles.div}>

            <nav className={styles.nav}>
              <span className={styles.span}>MODIFY YOUR POKEMON</span>
              <Link to="/home" style={{textDecoration:"none"}}>
              <span className={styles.spanhome}>HOME</span>
              </Link>
            </nav>

            <form type="PUT"  className={styles.form} onSubmit={onSubmit}>
    
            <button name="submit"className={styles.button} type="submit"  disabled={ errorName || errorAttack || errorDefense || errorHeight || errorHp || errorImage || errorSpeed || errorWeight || errorAbilities || !where || errorWhere ? true : false} >Update Pokemon</button> 
    
                 <label className={styles.label}>Pokemon to be Updated: </label>
                 <input className={errorWhere? styles.invalido : styles.valido} // aca digo si hay error, aplicar la clase de estilos "invalido"
                 key="where" name="where" value={where} type="text" required onChange={(e) => validateWhere(e.target.value)}
                 placeholder= "Type the pokemon name to be modified here..." autoComplete="off"/>
                 {!errorWhere ? null : <span className={styles.errorMessage}>{errorWhere}</span>} 
                 
                 <label className={styles.label}>Name: </label>
                 <input className={errorName? styles.invalido : styles.valido} // aca digo si hay error, aplicar la clase de estilos "invalido"
                 key="name" name="name" value={name} type="text"  onChange={(e) => validateName(e.target.value)}
                 placeholder= "Type the new pokemon name here..." autoComplete="off"/>
                 {!errorName ? null : <span className={styles.errorMessage}>{errorName}</span>}


                 <label className={styles.label}>Update HP: </label> 
                 <input className={errorHp? styles.invalido : styles.valido}
                 key="hp" name="hp" value={hp} type="text"  onChange={(e) => validateHp(e.target.value)}
                 placeholder= "Type the new value for HP from 1 to 99 here..." autoComplete="off"/>
                 {!errorHp ? null : <span className={styles.errorMessage}>{errorHp}</span>}
    
                 <label className={styles.label}>Update Attack: </label> 
                 <input className={errorAttack? styles.invalido : styles.valido}
                 key="attack" name="attack" value={attack} type="text" onChange={(e) => validateAttack(e.target.value)}
                 placeholder= "Type the new value for Attack from 1 to 99 here..." autoComplete="off"/>
                 {!errorAttack ? null : <span className={styles.errorMessage}>{errorAttack}</span>}
    
                 <label className={styles.label}>Update Defense: </label> 
                 <input className={errorDefense? styles.invalido : styles.valido}
                 key="defense" name="defense" value={defense} type="text" onChange={(e) => validateDefense(e.target.value)}
                 placeholder= "Type the new value for Defense from 1 to 99 here..." autoComplete="off"/>
                 {!errorDefense ? null : <span className={styles.errorMessage}>{errorDefense}</span>}
    
                 <label className={styles.label}>Update Speed: </label> 
                 <input className={errorSpeed? styles.invalido : styles.valido}
                 key="speed" name="speed" value={speed} type="text"  onChange={(e) => validateSpeed(e.target.value)}
                 placeholder= "Type the new value for Speed from 1 to 99 here..." autoComplete="off"/>
                 {!errorSpeed ? null : <span className={styles.errorMessage}>{errorSpeed}</span>}
    
                 <label className={styles.label}>Update Weight: </label> 
                 <input className={errorWeight? styles.invalido : styles.valido}
                 key="weight" name="weight" value={weight} type="text"  onChange={(e) => validateWeight(e.target.value)}
                 placeholder= "Type the new value for Weight from 1 to 999 here..." autoComplete="off"/>
                 {!errorWeight ? null : <span className={styles.errorMessage}>{errorWeight}</span>}
    
                 <label className={styles.label}>Update Height: </label> 
                 <input className={errorHeight? styles.invalido : styles.valido}
                 key="height" name="height" value={height} type="text"  onChange={(e) => validateHeight(e.target.value)}
                 placeholder= "Type the new value for Height from 1 to 99 here..." autoComplete="off"/>
                 {!errorHeight ? null : <span className={styles.errorMessage}>{errorHeight}</span>}
    
                 <label className={styles.label}>Update Ability: </label> 
                 <input className={errorAbilities? styles.invalido : styles.valido}
                 key="ability" name="ability" value={abilities} type="text"  onChange={(e) => validateAbilities(e.target.value)}
                 placeholder= "Type the new ability name here..." autoComplete="off"/>
                 {!errorAbilities ? null : <span className={styles.errorMessage}>{errorAbilities}</span>}
    
    
                 <label className={styles.imglabel}>Update Image: </label> 
                 <input className={errorImage? styles.invalido : styles.valido}
                 key="image" name="image" value={image} type="text"  onChange={(e) => validateImage(e.target.value)}
                 placeholder= "Type the new Url img here..." autoComplete="off"/>
                 {!errorImage ? null : <span className={styles.errorMessage}>{errorImage}</span> }
          </form>
    
          <footer className={styles.footer}>
            <p className={styles.pfooter}>Pokemon App created by Gaston Frissiones 2022</p>
          </footer>
          
          </div>
        ) }
       
    
    