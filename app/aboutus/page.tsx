"use client";
import RegistrationVideo from "../components/RegistrationVideo/RegistrationVideo";
import RegistrationForm from "../components/registrationPage/RegistrationForm";
import styles from "./page.module.css"
import { BackTohome } from "../components/button/BackTohome";


export default () => {
    return (
        <div className={styles.aboutus}>
           
            <p>This is page for about US</p>
            <div >
                <BackTohome />
                
            </div>
            <div className={styles.homePage}>
                <RegistrationForm />
                

            </div>
           
        </div>
    )
}