"use client";
import styles from "./burgerMenu.module.css";
import { Menu } from "lucide-react";
import { useState } from "react";

type Props = {
    onClick: () => void;
    className?: "active" | "notActive";
    title?: string;
}

export default function BurgerMenu({ onClick, title = "Menu", className = "active" }: Props) {

const [showTooltip, setShowTooltip] = useState(false);


    return (
        <div className={styles.tooltipWrapper}
        onMouseEnter={()=> setShowTooltip(true)}
        onMouseLeave={()=> setShowTooltip(false)}
        >

      
        <button onClick={onClick} >

            <Menu className={styles[className]}
            />

        </button>

        {showTooltip && <div className={styles.tooltip}>{title}</div>}
          </div>

    );

}