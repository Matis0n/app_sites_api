import React from 'react';
import styles from './ValidationForm.module.scss';
import circleIcon from './../../../assets/img/circle.svg';

const ValidationForm = (props) => {
    const {
        newName,
        newPhone,
        newEmail,
        newMessage,
        consent,
        setNewName,
        setNewPhone,
        setNewEmail,
        setNewMessage,
        setConsent,
        handleSubmit
    } = props

    function onSetNewName(e) {
        setNewName(e.target.value);
    }

    function onSetNewEmail(e) {
        setNewEmail(e.target.value);
    }

    function onSetNewPhone(e) {
        setNewPhone(e.target.value);
    }

    function onSetNewMessage(e) {
        setNewMessage(e.target.value);
    }

    function onCheckConsent(e) {
        setConsent(e.target.checked);
    }

    return (
        <form className={styles.validation} onSubmit={handleSubmit}>
            <div className={styles.validation__indentation}>
                <img className={styles.validation__image} src={circleIcon} alt="circleIcon"/>
                <h1>Расскажите <br/> о вашем проекте</h1>
            </div>
            <div className={styles.validation__position}>
                <div className={styles.validation__form}>
                    <input
                        className={styles.validation__input}
                        type="text"
                        required
                        pattern="[A-Za-zА-Яа-яЁё\s]+"
                        title="Имя должно содержать только буквы."
                        value={newName}
                        onChange={onSetNewName}
                    />
                    <label className={styles.validation__label}>Ваше имя*</label>
                </div>
                <div className={styles.validation__form}>
                    <input
                        className={styles.validation__input}
                        type="email"
                        required
                        value={newEmail}
                        onChange={onSetNewEmail}
                    />
                    <label className={styles.validation__label}>Email*</label>
                </div>
                <div className={styles.validation__form}>
                    <input
                        className={styles.validation__input}
                        type="tel"
                        required
                        pattern="7\d{10}"
                        title="Введите номер в формате: 7xxxxxxxxxx"
                        value={newPhone}
                        onChange={onSetNewPhone}
                    />
                    <label className={styles.validation__label}>Телефон*</label>
                </div>
            </div>
            <div className={styles.validation__form}>
                <input
                    className={`${styles.validation__input} ${styles.validation__input_message}`}
                    required
                    value={newMessage}
                    onChange={onSetNewMessage}
                />
                <label className={styles.validation__label}>Сообщение*</label>
            </div>
            <div className={styles.validation__content}>
                <input
                    type="checkbox"
                    className={styles.validation__checkbox}
                    id="consentCheckbox"
                    checked={consent}
                    onChange={onCheckConsent}
                />
                <label htmlFor="consentCheckbox" className={styles['validation__checkbox--custom']}></label>
                <label>Согласие на обработку персональных данных</label>
            </div>
            <div className={styles.validation__button}>
                <button type="submit" className={styles['validation__button--container']}>Обсудить проект</button>
            </div>
        </form>
    );
};

export default ValidationForm;
