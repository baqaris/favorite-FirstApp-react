
import { BackTohome } from "../button/BackTohome";
import styles from "./Footer.module.css";

export default () =>{

    return(
        <footer className={styles.container}>
            <div className={styles.footerContent}>
                <h1>This is Footer page</h1>
                <p>© 2025 All rights reserved.</p>
                <BackTohome />
            </div>
        </footer>
    );
}