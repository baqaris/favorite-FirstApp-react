"use client";


import { BackTohome } from "../components/button/BackTohome";
import styles from "./page.module.css"




export default () => {
const imageUrls = "favicon.ico";
const ImageUrlsSize = "150px";
    
    return (
        <div className={styles.sabrdzolo}>
            <h1>all is good</h1>
            <div className={styles.buttons}>
                <img src={imageUrls} width={ImageUrlsSize}/>
                <BackTohome />
            </div>


        </div>
    );
}