"use client";

import RegistrationForm from "../components/registrationPage/RegistrationForm";
import styles from "./page.module.css";

export default function Registration(){

    return(
    
    <div className={styles.container}>
        
        <RegistrationForm />

    </div>
       
    );
}