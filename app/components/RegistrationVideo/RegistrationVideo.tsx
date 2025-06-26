"use client";

import { useEffect, useRef } from "react";
import styles from "./Registration.module.css"

export default function RegistrationVideo() {

   const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        videoRef.current?.load(); 
    }, []);



    return (
        <video
            autoPlay
            muted
            loop
            playsInline 
            key="background"
            className={styles.video}>

               { <source src="/musicBackgroundVideo/anime.mp4" type="video/mp4" />}

         
        </video>
    );


}