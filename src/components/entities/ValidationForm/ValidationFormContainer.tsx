import {useDispatch} from "react-redux";
import ValidationForm from "./ValidationForm.tsx";
import {AppDispatch, setFormData} from "../../../redux/reducer/forms-reducer.ts";
import {IMyForm} from "../../../types/type.ts";

const ValidationFormContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (data: IMyForm) => {
        dispatch(setFormData(data.name, data.phone, data.email, data.message))
    }

    return (
        <ValidationForm handleSubmit={handleSubmit}/>
    );
}

export default ValidationFormContainer;
