"use client"
import { title } from "process";
import styles from "./BankchatBot.module.css"

type Props={
    title:string;
    mode?:"fill" | "outline";
    onClick?:()=> void;
    
}


export default function BankchatBot({title}:Props){



    


    return(
        <div className={styles.chatBot}>
            {title}

            {/* Make chatbot commponent for opening chat area*/}
        </div>
    );
}