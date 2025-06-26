"use client";

import { useEffect, useRef } from "react";
import styles from "./BackgroundVideo.module.css";

export default function BackgroundVideo() {

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
            className={styles.BackgroundVideo}>

               { <source src="/musicBackgroundVideo/backgroundVideo.mp4" type="video/mp4" />}

         
        </video>
    );


}