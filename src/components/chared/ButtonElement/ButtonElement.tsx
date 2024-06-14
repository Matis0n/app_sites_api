import styles from "./ButtonElement.module.scss"
import {FC} from "react";
import {ITitle} from "../../../types/type.ts";


const ButtonElement: FC<ITitle> = ({title}) => {
    return (
        <div className={styles.button}>
            <button className={styles.button__container}>{title}</button>
        </div>
    );
}

export default ButtonElement