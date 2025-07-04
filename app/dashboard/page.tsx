"use client";
import {LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import RegButton from "../components/registrationButton/RegButton";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import Novado from "../components/novado/Novado";
import Link from "next/link";





export default function Dashboard() {

    const [showMenu, setShowMenu] = useState(false);
     const [username, setUsername] = useState("");
    
     useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUsername(`${user.name} ${user.lastname}`)
        }
    }, []);

    const pushDiv = () => {
        setShowMenu(!showMenu);
    }


    const [addText, setAddText] = useState("");
    const [addTexts, setAddTexts] = useState<string[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddText(e.target.value);
        
    }

    const onAdd =()=>{
        if(addText.trim() !== ""){
        setAddTexts([...addTexts, addText])
        setAddText("")
        }
    }
    


    const router = useRouter();
    const logOut = () => {
        router.push("registration");
    }
    return (
        <div className={styles.dashbloard}>
            <div className={styles.over}></div>
            <div className={styles.content}>

                <div className={styles.navigation}>



                    <div className={styles.HumburgerIcon}
                        onClick={pushDiv}
                    >

                        {<img src="/Hamburger_icon.svg.png" />}
                    </div>
                    {
                        showMenu &&
                        <ul className={styles.menuList}> Banks➡️
                            <li><Link href="/practicingPage/login">Georgian bank</Link></li>
                            <li>TBC bank</li>
                            <li>Liberty bank</li>

                        </ul>

                    }
                    
                    <div className={styles.logOutContainer}>
                        <p>hello {username}</p>
                    <RegButton
                        title="Log Out"
                        mode="outline"
                        onClick={logOut}
                        icon={<LogOut size={15} />}

                    />
                    </div>


                </div>

                <div className={styles.main}>
                    <h2>There is main page</h2>
                    <h3>Lets start practicing input Elements</h3>
                    <div className={styles.containerInput}>

                        <div className={styles.gap}>
                            <input type="text"
                                value={addText}
                                onChange={onChange}
                            />
                            <RegButton title="add Element" mode="addElement" onClick={onAdd}/>

                        </div>
                        {
                            <ul>
                               {
                                addTexts.map(addText => <li>{addText}</li>)
                               }
                            </ul>
                        }
                        <div>
                            <Novado title="Go to Novado" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}