import React, {useState} from 'react';
import styles from './paginacion.module.css';

export const Paginacion = ({pagina, setPagina, maximo}) => {
const [input, setInput] = useState (1);

  const nextPage = () => {
    setInput (input + 1); 
    setPagina (pagina + 1);
  };

  const previousPage = () => {
    setInput (input - 1);
    setPagina (pagina - 1);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) { // cuando aprieten Enter
    setPagina (e.target.value);
    if (e.target.value < 1 ||
        e.target.value > Math.ceil(maximo) ||
        isNaN(e.target.value)
      ) {
        setPagina (1);
        setInput (1);
      } else {
        setPagina(e.target.value);
      }
    }
  };

  const onChange = e => {
  setInput (e.target.value);
  };

  return (
    <div className={styles.containerPag}>
      <button className={styles.buttonPag}
        disabled={pagina === 1 || pagina < 1} 
        onClick={previousPage}>
        &#5130;
      </button>
      <input className={styles.inputPag}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)} 
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> de {maximo} </p>
      <button className={styles.buttonPag}
        disabled={pagina === maximo || pagina > maximo}
        onClick={nextPage}>
        &#5125;
      </button>
    </div>
  );
};
