"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Input from "../components/input/Input";

export default function CounterButton() {

   const [counter, setCounter] = useState(0);

   const move = () =>{
    setCounter(counter => counter + 1)
   }
  

    return (
        <div className={styles.container}>
            <button  onClick={move}>
                
                {counter}
                
                </button>

                <Input />
        </div>
    )
  }



  