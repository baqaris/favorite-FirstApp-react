import Link from "next/link";
import styles from "./Header.module.css";


export default function Header(){

    return(
        <header className={styles.container}>
            <Link href="/baqari">Go to Baqari's page!</Link>
            <Link href="/sabrdzolo">Go to sabrdzolo's page!</Link>
            <Link href="/contactus">Contuct Us</Link>
            <Link href="/aboutus">Simple Registration</Link>
            <Link href="/counter">Count Page</Link>
        </header>
    );
}