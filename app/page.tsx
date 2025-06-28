"use client";




import RegButton from "./components/registrationButton/RegButton";
import style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1>welcome to main page</h1>
      </div>
      <div className={style.Linkpage}>
        <p>this is page for LINK move to another page!</p>
        <div className={style.avtorizacia}>
         
         <RegButton mode="fill" title="რეგისტრაცია"/>
     
        </div>

      </div>
      <Link href="components/musicPlayer/music" id="musicButton">Music</Link>
      <div className={style.NovadoContainer}>

    <div className={style.goToNovado}>
    <Link href="/novadoPage">Novado </Link>
    </div>
      </div>

    </main>
  );
}