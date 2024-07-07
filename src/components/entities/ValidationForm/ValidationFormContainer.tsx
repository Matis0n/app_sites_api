import {useDispatch} from "react-redux";
import ValidationForm from "./ValidationForm.tsx";
import {AppDispatch, setFormData} from "../../../redux/reducer/forms-reducer.ts";
import {IMyForm} from "../../../types/type.ts";

const ValidationFormContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (data: IMyForm) => {
        dispatch(setFormData({name: data.name, phone: data.phone, email: data.email, message: data.message}))
    }

    return (
        <ValidationForm handleSubmit={handleSubmit}/>
    );
}

export default ValidationFormContainer;
