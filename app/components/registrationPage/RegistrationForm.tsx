"use client";
import RegButton from "../registrationButton/RegButton";
import styles from "./RegistrationForm.module.css";
import RegistrationVideo from "../RegistrationVideo/RegistrationVideo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ChatBot from "../chatBot/registrationForm/ChatBotRegistration";


export default function RegistrationForm() {
    const router = useRouter();

    const [name, setName] = useState("");

    const [lastname, setLastname] = useState('');

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");
    const addPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const [repeatPassword, setRepeatPassord] = useState("");
    const addReapatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassord(e.target.value)
    }

    const [agreed, setAgreed] = useState(false);
    const makeShure = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(e.target.checked)
    }



    const registration = () => {
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        if (lastname.trim() === "") {
            alert("Please enter your lastname");
            return;
        }
        if (password.trim() === "" || repeatPassword.trim() === "") {
            alert('please enter both password!!!');
            return;
        }

        if (phone.trim() === "") {
            alert("please Enter phone Number");
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        if (password !== repeatPassword) {
            alert('Passwords do not match!!!');
            return;
        }
        if (!agreed) {
            alert('You must agree to the terms!');
            return;
        }

        const user = {
            name: name,
            lastname: lastname,
        };

        localStorage.setItem("user", JSON.stringify(user));

        router.push("/dashboard");
    }


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const lastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value)
    }

    const addMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const addPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const onlyNumber = input.replace(/\D/g, "");
        setPhone(onlyNumber);

    }

    return (
        <div className={styles.container}>

            <div className={styles.videoWrapper}>

                <RegistrationVideo />

                <div className={styles.content}>

                    <h1>Make you first Registration</h1>
                    <div className={styles.formInput}>


                        <div className={styles.nameInput}>
                            <input type="text"
                                value={name}
                                onChange={onChange}
                                placeholder="Enter your Name"

                            />

                            <input type="text"
                                value={lastname}
                                onChange={lastName}
                                placeholder="Enter your lastname"
                            />

                        </div>


                        <input type="email"
                            value={email}
                            onChange={addMail}
                            placeholder="Set your Email"
                        />

                        <input type="tel"
                            value={phone}
                            onChange={addPhone}
                            placeholder="Set your phone number"
                        />

                        <input type="password"
                            value={password}
                            onChange={addPassword}
                            placeholder="Set your Password"
                        />
                        <input type="password"
                            value={repeatPassword}
                            onChange={addReapatPassword}
                            placeholder="Repeat your Password"
                        />
                        <div className={styles.checkboxCont}>
                            <input type="checkbox"
                                checked={agreed}
                                onChange={makeShure}
                            />
                            <p>ეთანხმები თუ არა პირობებს</p>
                        </div>
                        <RegButton title="Registration" mode="outline"
                            onClick={registration}
                        />

                    </div>
                </div>
            </div>
            <>
                <ChatBot />
            </>
        </div>


    );
}