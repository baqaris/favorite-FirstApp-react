"use client";

import { BackTohome } from "../components/button/BackTohome";

import styles from "./contactus.module.css"
export default() =>{
    return(
        
        
        <div className={styles.contactus}>
            <p>contact US Page</p>
            <div className={styles.buttons}>
                <BackTohome/>
            </div>
        </div>
       
    );
}