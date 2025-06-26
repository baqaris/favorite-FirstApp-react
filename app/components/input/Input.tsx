import { useState } from "react";
import styles from "./Input.module.css";



export default () => {

    const [text,setText] = useState('ბაქარ');
 

    const onChange =(e)=>{
        setText(e.target.value);
    }



    return (
        <div className={styles.container}>
            <input type="text"
                value={text}
                onChange={onChange}
                placeholder="ჩაწერე სახელი"
            />

            
        </div>
    );
}