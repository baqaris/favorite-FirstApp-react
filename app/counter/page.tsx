"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Input from "../components/input/Input";

export default function CounterButton() {

   const [counter, setCounter] = useState(0);
   const [userName, setUserName] =useState("")

   const Change =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setUserName(e.target.value)
   }
   const toUserText =()=>{
    setUserName(userName);
    setUserName("")

   }

   const move = () =>{
    setCounter(counter => counter + 1)
   }
  


    return (

        <div className={styles.container}>
            <button  onClick={move}>
                
                {counter}
                
                </button>

                <Input />

                <>
                <input type="text"
                 placeholder="text this"
                 value={userName}
                 onChange={Change}
                 />

                 <button onClick={toUserText}>text sender</button>
                </>
        </div>
        
    )
  }



  