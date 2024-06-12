import {FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import ValidationForm from "./ValidationForm.tsx";
import {AppDispatch, setFormData} from "../../../redux/reducer/forms-reducer.ts";


const ValidationFormContainer = () => {
    const [newName, setNewName] = useState<string>('')
    const [newPhone, setNewPhone] = useState<string>('')
    const [newEmail, setNewEmail] = useState<string>('')
    const [newMessage, setNewMessage] = useState<string>('')
    const [consent, setConsent] = useState<boolean>(false)

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!consent) {
            alert('Пожалуйста, подтвердите согласие на обработку персональных данных')
            return
        }
        if (consent) {
            alert('Данные отправлены')
            setConsent(false)
        }
        dispatch(setFormData(newName,newPhone, newEmail, newMessage))
        setNewName('')
        setNewPhone('')
        setNewEmail('')
        setNewMessage('')
    }

    return (
        <ValidationForm
            newName={newName}
            setNewName={setNewName}
            newPhone={newPhone}
            setNewPhone={setNewPhone}
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            consent={consent}
            setConsent={setConsent}
            handleSubmit={handleSubmit}
        />
    );
}

export default ValidationFormContainer;
