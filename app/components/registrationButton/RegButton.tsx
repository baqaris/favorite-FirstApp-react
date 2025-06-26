
import styles from "./RegButton.module.scss"

type Props = {

    title: string;
    className?: string;
    disabled?: boolean;
    mode?: "fill" | "outline" | "addElement";
    onClick?: () => void;
    icon?: React.ReactNode;
}

export default (props: Props) => {
    const classes = [styles.container, props.className]

    if(props.mode == "outline") classes.push(styles.outline)
        if(props.mode =="addElement") classes.push(styles.addElement)
        else classes.push(styles.fill)
  
        
    return (
        <button disabled={props.disabled}
         className={classes.join(" ").trim()} 
         onClick={props.onClick}
         >
            {props.icon && <span className={styles.icon} style={{ marginRight: "8px" }}>{props.icon}</span>}
            {props.title}
            

        </button>

    );
}