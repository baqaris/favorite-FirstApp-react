"use client";


import styles from "./page.module.css";
import BankchatBot from "@/app/components/bankChatBot/BankchatBot";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


type Props = {
    icon: string;
    title: string;

}


export default function practicingPage({ icon, title }: Props) {

    const router = useRouter();

    const [isSingin, setIsSingIn] = useState(false);

    const hendleSingInOrSingUp = () => {
        setIsSingIn(!isSingin);
    }

    {/*-----  Registration------- */ }




    const [firstName, setFirstName] = useState("");

    const hendleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const [lastName, setLastName] = useState("");

    const hendleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    const [email, setEmail] = useState("");

    const hendleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const [phone, setPhone] = useState("");

    const hendlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const phoneInput = input.replace(/\D/g,"");
        setPhone(phoneInput);
    }
   

    const [password, setPassword] = useState("");

    const hendlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const [repeatPassword, setRepeatPassord] = useState("");

    const hendleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassord(e.target.value)
    }




    const registration = (e:React.FormEvent) => {
        e.preventDefault()
        if (firstName.trim() === "") {
            alert("please fill up all page")
            return;
        }
        if (lastName.trim() === "") {
            alert("");
            return;
        }
        if (email.trim() === "") {
            alert("<3");
            return;
        }
        if (phone.trim()=== ""){
            alert("Please Fill phone number")
            return;

        }

            if (password.trim() === "" || repeatPassword.trim() === "") {
                alert("")
                return;
            }


        if (password !== repeatPassword) {
            alert("Please mutch passwords")
            return;
        }


        const user = {
            name: firstName,
            lastName: lastName,
            email: email,
        };

        localStorage.setItem("user", JSON.stringify(user));


        router.push("/dashboard")
    }






    {/*------- Log in------- */ }

    const [logEmail, setLogEmail] = useState("")
    const hendleLogInEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogEmail(e.target.value)
    }

    const [logInpassword, setLogInPassword] = useState("");
    const hendleLogInPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInPassword(e.target.value)

    }

    const logInSubmit = (e:React.FormEvent) => {
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

  router.push("/dashboard");
};




    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.bankContainer}>
                <div className={styles.bankLogoContainer}>
                    {icon && <img src="/bankLogo.png" alt="bank icon" />}
                    <p>Bank of Georgia</p>

                </div>
                <div className={styles.registrationContainer}>
                    {isSingin ? (
                        <div>
                            <h1>Create an account </h1>
                            <div className={styles.inputContainer}>

                                <form onSubmit={registration}>
                                    <section className={styles.formSection}>
                                        <input type="text" id="name" required placeholder="First Name" value={firstName} onChange={hendleFirstName} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="text" id="LastName" placeholder="Last Name" value={lastName} onChange={hendleLastName} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="email" required id="email" placeholder="Email" value={email} onChange={hendleEmail} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="tel" id="Phone" placeholder="Phone" required value={phone} onChange={hendlePhone} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="password" id="password" placeholder="Password" value={password} onChange={hendlePassword} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <input type="password" id="password" placeholder="Confirm Password" value={repeatPassword} onChange={hendleRepeatPassword} />
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
                                        <input type="email" id="email" required value={logEmail} onChange={hendleLogInEmail} />
                                    </section>
                                    <section className={styles.formSection}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" value={logInpassword} onChange={hendleLogInPassword} />
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