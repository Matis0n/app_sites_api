import styles from './ValidationForm.module.scss';
import circleIcon from './../../../assets/img/circle.svg';
import {SubmitHandler, useForm} from "react-hook-form";
import {FC} from "react";
import {IMyForm} from "../../../types/type.ts";


interface IProps {
    handleSubmit: SubmitHandler<IMyForm>
}

const ValidationForm: FC<IProps> = ({handleSubmit}) => {

    const {register, handleSubmit: formSubmit, reset, formState: {errors}} = useForm<IMyForm>()
    const submit: SubmitHandler<IMyForm> = (data) => {
        handleSubmit(data)
        reset()
    }

    return (
        <form className={styles.validation} onSubmit={formSubmit(submit)}>
            <div className={styles.validation__indentation}>
                <img className={styles.validation__image} src={circleIcon} alt="circleIcon"/>
                <h1>Расскажите <br/> о вашем проекте</h1>
            </div>
            <div className={styles.validation__position}>
                <div className={styles.validation__form}>
                    <input
                        className={styles.validation__input}
                        type="text"
                        {...register("name", {
                            required: "Введите имя",
                            pattern: {
                                value: /^[a-zA-Zа-яА-Я]+$/,
                                message: "Имя должно содержать только буквы"
                            }
                        })}
                    />
                    <label className={styles.validation__label}>Ваше имя*</label>
                    {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
                </div>
                <div className={styles.validation__form}>
                    <input
                        className={styles.validation__input}
                        type="email"
                        {...register("email", {
                            required: "Введите email",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Неверный формат email"
                            }
                        })}
                    />
                    <label className={styles.validation__label}>Email*</label>
                    {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
                </div>
                <div className={styles.validation__form}>
                    <input
                        className={styles.validation__input}
                        type="tel"
                        {...register('phone', {
                            required: "Введите номер телефона",
                            pattern: {
                                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                message: "Неверный формат номера телефона"
                            }
                        })}
                    />
                    <label className={styles.validation__label}>Телефон*</label>
                    {errors.phone && <p style={{color: "red"}}>{errors.phone.message}</p>}
                </div>
            </div>
            <div className={styles.validation__form}>
                <input
                    className={`${styles.validation__input} ${styles.validation__input_message}`}
                    {...register('message', {required: "Введите сообщение"})}
                />
                <label className={styles.validation__label}>Сообщение*</label>
                {errors.message && <p style={{color: "red"}}>{errors.message.message}</p>}
            </div>
            <div className={styles.validation__content}>
                <input
                    type="checkbox"
                    className={styles.validation__checkbox}
                    id="consentCheckbox"
                    {...register('consent', {required: "Дайте согласие на обработку персональных данных"})}
                />
                <label htmlFor="consentCheckbox" className={styles['validation__checkbox--custom']}></label>
                <label>Согласие на обработку персональных данных</label>
                {errors.consent && <p style={{color: "red"}}>{errors.consent.message}</p>}
            </div>
            <div className={styles.validation__button}>
                <button className={styles['validation__button--container']}>Обсудить проект</button>
            </div>
        </form>
    );
};

export default ValidationForm;
