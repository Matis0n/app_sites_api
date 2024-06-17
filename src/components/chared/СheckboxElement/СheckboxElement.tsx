import styles from "./СheckboxElement.module.scss";
import {FC} from "react";
import {IMyForm} from "../../../types/type.ts";
import {FieldError, UseFormRegister} from "react-hook-form";


interface IProps {
    title:string
    register: UseFormRegister<IMyForm>;
    consent: "consent";
    errors?: FieldError;
}

const СheckboxElement: FC<IProps> = ({title, register, consent, errors}) => {
    return (
        <div className={styles.checkbox__content}>
            <input
                type="checkbox"
                className={styles.checkbox__items}
                id="consentCheckbox"
                {...register(consent, {required: "Дайте согласие на обработку персональных данных"})}
            />
            <label htmlFor="consentCheckbox" className={styles['checkbox__items--custom']}></label>
            <label>{title}</label>
            {errors && <p style={{color: "red"}}>{errors.message}</p>}
        </div>
    );
}
export default СheckboxElement