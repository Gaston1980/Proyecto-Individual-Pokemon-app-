import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./landingpage.module.css"


export default function LandingPage() {
    return (
        <div className={styles.div}>
        <Link to="/home">
        <button className={styles.btnHome}>ENTRAR</button>
        </Link>
        </div>
    )
}