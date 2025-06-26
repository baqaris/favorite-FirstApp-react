import Link from "next/link";
import styles from "./BackTohome.module.css"


export const BackTohome = () => {
    return (

        <Link href="/">
            <button className={styles.BackTohome}>🏠Home</button>
        </Link>
    );
}