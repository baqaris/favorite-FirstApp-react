"use client";

import Link from "next/link";
import styles from "./novado.module.css";

type Props ={
    title?: string

}

export default function Novado (props: Props) {

 



    return (


        <div>
            <button className={styles.novadoButton}>If you want to Enter <span>novado's</span> page <Link href="/novadoPage"> Click here</Link></button>
        </div>
    );
}