import { useState } from "react";
import styles from "./Input.module.css";

   type Props = {
        title: String;
        onClick?: () => void;
        mode?: "add" | "notExist";
        className?: String;

    }

export default ( props:Props) => {


 
    const [text,setText] = useState('');
    const classes =[styles.addButton, props.className]

    if(props.mode === "notExist") classes.push(styles.notExist);
    else classes.push(styles.add);

    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
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