import {useState} from 'react';
import {useDispatch} from "react-redux";
import ValidationForm from "./ValidationForm.tsx";
import {setFormData} from "../../../redux/reducer/forms-reducer.ts";

const ValidationFormContainer = () => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [consent, setConsent] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
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
