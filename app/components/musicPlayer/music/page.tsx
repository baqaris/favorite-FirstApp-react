"use client";

import { useRef, useState, useEffect } from "react";


import BackgroundVideo from "../backgroundVideo/BackgroundVideo";
import styles from "./page.module.css";

type Props = {

    title: string;

}


export default (props: Props) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [progress, setProgress] = useState(0);

    const handlePlay = () => {
        audioRef.current?.play();
    };

    const handlePause = () => {
        audioRef.current?.pause();
    };

    const handleStop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setProgress(0);
        }
    };

    const updateProgress = () => {
        const audio = audioRef.current;
        if (audio && audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            setProgress(percent);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener("timeupdate", updateProgress);
        }
        return () => {
            audio?.removeEventListener("timeupdate", updateProgress);
        };
    }, []);



    return (
        <div className={styles.mainContiner}>

            <BackgroundVideo />

            <div className={styles.playerContainer}>
                <h1>Music Player</h1>

                <audio ref={audioRef} src="/mp3File/WizKhalifa-WorkHardPlayHard[MusicVideo].mp3" />

             

                <div className={styles.progressContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className={styles.imageGirl}>

                   
                    <div className={styles.paceImage}>
                        
                    </div>

                </div>
                   <div className={styles.controls}>
                    <button onClick={handlePlay}>
                        <img src="/mp3icons/play.svg" alt="Play" />
                    </button>
                    <button onClick={handlePause}>
                        <img src="/mp3icons/Pause.svg" alt="Pause" />
                    </button>
                    <button onClick={handleStop}>
                        <img src="/mp3icons/Repeat.svg" alt="Repeat" />
                    </button>
                </div>

            </div>



        </div>
    );

}