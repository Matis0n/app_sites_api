import styles from "./ButtonElement.module.scss"
import {FC} from "react";

interface IProps{
    title:string
}

const ButtonElement: FC<IProps> = ({title}) => {
    return (
        <div className={styles.button}>
            <button className={styles.button__container}>{title}</button>
        </div>
    );
}

export default ButtonElement