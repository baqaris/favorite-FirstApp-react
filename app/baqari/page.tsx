"use client";


import styles from './page.module.css'
import { BackTohome } from '../components/button/BackTohome';
import NameText from '../components/inputSecondForBaqar/NameText';



export default () => {
    return (
        <div className={styles.divContainer}>
            <h1 className={styles.name}>hello bakar</h1>
           <BackTohome />
           <NameText />
        </div>
    );
}