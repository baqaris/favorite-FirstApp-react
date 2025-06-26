import { useState } from "react";
import styles from "./NameText.module.css";
export default () => {



    const [getMessage, setGetMessage] = useState("");
    const [getMessages, setGetMessages] = useState([""]);

    const onChange = (e) => {
        setGetMessage(e.target.value)
    }
    const click = () => {
        setGetMessages([...getMessages, getMessage]);
        setGetMessage('')
    }


    return (

        <>
            <input type="text"
                value={getMessage}
                onChange={onChange}
                placeholder="Please text your Name"
                className={styles.input}
            />
            <button className={styles.button}
                onClick={click}

            >
                დაამატე


            </button>
            <ul className={styles.ullist}>
                {
                   getMessage && getMessages.map(getMessage => <li>{getMessage}</li>)
                }
            </ul>

            
        </>
    );
}