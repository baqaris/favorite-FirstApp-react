"use client";


import styles from "./page.module.css";
import BankchatBot from "@/app/components/bankChatBot/BankchatBot";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { error } from "console";


type Props = {
    icon: string;
    title: string;


}



export default function practicingPage() {

    const router = useRouter();

    const [isSingin, setIsSingIn] = useState(false);

    const hendleSingInOrSingUp = () => {
        setIsSingIn(!isSingin);
    }

    {/*-----  Registration------- */ }




    const [firstName, setFirstName] = useState("");

    const hendleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFirstName(value);
        validateField("firstName", value)
    }

    const [lastName, setLastName] = useState("");

    const hendleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLastName(value);
        validateField("lastName", value);
    }

    const [email, setEmail] = useState("");

    const hendleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        validateField("email", value)
    }

    const [phone, setPhone] = useState("");

    const hendlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhone(value)
        validateField("phone", value);
    }


    const [password, setPassword] = useState("");

    const hendlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        validateField("password", value);

    }

    const [repeatPassword, setRepeatPassord] = useState("");

    const hendleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRepeatPassord(value);
        validateField("repeatPassword", value);
    }




    const registration = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            firstName: firstName.trim() === "",
            lastName: lastName.trim() === "",
            email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            phone: phone.trim() === "",
            password: password.trim() === "",
            repeatPassword: repeatPassword !== password || repeatPassword.trim() === "",
        };

        const hasError = Object.values(newErrors).some((error) => error);

        if (hasError) {
            setErrors(newErrors);
            alert("Please fill all fields correctly.");
            return;
        }


        const user = {
            name: firstName,
            lastName,
            email,
        };
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/practicingPage/bankDashboard");
    };







    {/*------- Log in------- */ }

    const [logEmail, setLogEmail] = useState("")
    const hendleLogInEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogEmail(e.target.value)
    }

    const [logInpassword, setLogInPassword] = useState("");
    const hendleLogInPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInPassword(e.target.value)

    }

    const logInSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (logEmail.trim() === "") {
            alert("Email is not correct");
            return;
        }
        if (logInpassword.trim() === "") {
            alert("Your password is not correct");
            return;
        }

        const savedUser = localStorage.getItem("user");
        if (!savedUser) {
            alert("No user found. Please register.");
            return;
        }

        const parsedUser = JSON.parse(savedUser);

        if (parsedUser.name !== logEmail && parsedUser.email !== logEmail) {
            alert("Invalid user");
            return;
        }

        router.push("/practicingPage/bankDashboard");
    };


    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        password: false,
        repeatPassword: false,
    });


  

    const validateField = (field: string, value: string) => {
        if (field === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setErrors((prev) => ({
                ...prev,
                email: !emailRegex.test(value),
            }));
        } else if (field === "repeatPassword") {
            setErrors((prev) => ({
                ...prev,
                repeatPassword: value !== password,
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                [field]: value.trim() === "",
            }));
        }
    };





    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.bankContainer}>
                <div className={styles.bankLogoContainer}>
                    {<img src="/bankLogo.png" alt="bank icon" />}
                    <p>Bank of Georgia</p>

                </div>
                <div className={styles.registrationContainer}>
                    {isSingin ? (
                        <div>
                            <h1>Create an account </h1>
                            <div className={styles.inputContainer}>

                                <form onSubmit={registration}>
                                    <section className={styles.formSection}>
                                        <input type="text" id="name" required placeholder="First Name" value={firstName} onChange={hendleFirstName} className={`${styles.inputBase} ${errors.firstName ? styles.erorInput : ""}`} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="text" id="LastName" placeholder="Last Name" value={lastName} onChange={hendleLastName} className={`${styles.inputBase} ${errors.lastName ? styles.erorInput : ""}`} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="email" required id="email" placeholder="Email" value={email} onChange={hendleEmail} className={`${styles.inputBase} ${errors.email ? styles.erorInput : ""}`} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="tel" id="Phone" placeholder="Phone" required value={phone} onChange={hendlePhone} className={`${styles.inputBase} ${errors.phone ? styles.erorInput : ""}`} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="password" id="password" placeholder="Password" value={password} onChange={hendlePassword} className={`${styles.inputBase} ${errors.password ? styles.erorInput : ""}`} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="password" id="password" placeholder="Confirm Password" value={repeatPassword} onChange={hendleRepeatPassword} className={`${styles.inputBase} ${errors.repeatPassword ? styles.erorInput : ""}`} />
                                    </section>

                                    <button type="submit">Register</button>
                                    <div className={styles.singIncontainer}>
                                        <p>Already have an account?</p>
                                        <p onClick={hendleSingInOrSingUp}>Login in</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1>Login in to your account</h1>
                            <div className={styles.inputContainer}>
                                <form onSubmit={logInSubmit}>
                                    <section className={styles.formSection}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" required value={logEmail} onChange={hendleLogInEmail} className={`${styles.inputBase} ${errors.email ? styles.erorInput : ""}`} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" value={logInpassword} onChange={hendleLogInPassword} className={`${styles.inputBase} ${errors.password ? styles.erorInput : ""}`} />
                                    </section>
                                    <button type="submit">Log in</button>
                                    <div className={styles.singIncontainer}>
                                        <p>Don't have an account?</p>
                                        <p onClick={hendleSingInOrSingUp}>Sing up</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>


            </div>

            <BankchatBot title="Help" />
        </div>
    );
}