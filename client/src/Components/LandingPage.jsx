import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./landingpage.module.css"


export default function LandingPage() {
    return (
        <div className={styles.div}>
        <Link to="/home" style={{textDecoration:"none"}}> 
        <button className={styles.btnHome}>WELCOME</button>
        </Link>
        </div>
    )
}