import {testAPI} from "../../api/api.ts";
import {IUsersForm} from "../../types/type.ts";
import {ThunkDispatch} from "redux-thunk";


const SET_FORM_DATA = 'SET-FORM-DATA';

let initialState = {
    name: null as string | null,
    phone: null as number | null,
    email: null as string | null,
    message: null as string | null,
};

type InitialStateType = typeof initialState
const formReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

type ActionsTypes = FormDataActionCreatorType

export type FormDataActionCreatorType = {
    type: typeof SET_FORM_DATA
    payload: IUsersForm
}

export const setFormDataActionCreator = (name: string, phone: number, email: string, message: string): FormDataActionCreatorType => ({
    type: SET_FORM_DATA,
    payload: {name, phone, email, message},
});

export const setFormData = (name: string, phone: number, email: string, message: string) =>
    async (dispatch: ThunkDispatch<InitialStateType, unknown, ActionsTypes>) => {
        try {
            await testAPI.submitData(name, phone, email, message);
            dispatch(setFormDataActionCreator(name, phone, email, message));
        } catch (error) {
            console.error('Ошибка настройки данных формы:', error)
        }
    }

export default formReducer;
