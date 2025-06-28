import { useState } from "react";
import styles from "./NameText.module.css";


type Props= {
    title?: string;
    className?: string;
    mode?: "baqar" | "novatori";
}


export default (props:Props) => {



    const [getMessage, setGetMessage] = useState("");
    const [getMessages, setGetMessages] = useState([""]);

    const onChange = (e) => {
        setGetMessage(e.target.value)
    }
    const click = () => {
        setGetMessages([...getMessages, getMessage]);
        setGetMessage('')
    }
    const classes = [styles.bakar, props.className];
    if(props.mode ==="baqar"){
        classes.push(styles.baqar);
    }else{classes.push(styles.novatori)}
    

    return (

        <>
            <input type="text"
                value={getMessage}
                onChange={onChange}
                placeholder="Please text your Name"
                className={styles.input}
            />
            <button className={ classes.join(" ").trim()}
                onClick={click}
                

            >
                {props.title}


            </button>
            <ul className={styles.ullist}>
                {
                   getMessage && getMessages.map(getMessage => <li>{getMessage}</li>)
                }
            </ul>

            
        </>
    );
}