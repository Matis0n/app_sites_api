import {testAPI} from "../../api/api.ts";
import {IUsersForm} from "../../types/type.ts";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store.ts";


const SET_FORM_DATA = 'SET-FORM-DATA';

let initialState:IUsersForm = {
    name: null as string | null,
    phone: null as string | null,
    email: null as string | null,
    message: null as string | null,
};

type InitialStateType = typeof initialState
type ActionsTypes = FormDataActionCreatorType

export type FormDataActionCreatorType = {
    type: typeof SET_FORM_DATA
    payload: IUsersForm
}
export type  AppDispatch = ThunkDispatch<RootState, unknown, ActionsTypes>


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


export const setFormDataActionCreator = ({name, phone, email, message}:IUsersForm): FormDataActionCreatorType => ({
    type: SET_FORM_DATA,
    payload: {name, phone, email, message},
});

export const setFormData = ({name, phone, email, message}:IUsersForm) =>
    async (dispatch: AppDispatch) => {
        try {
            await testAPI.submitData({name, phone, email, message});
            dispatch(setFormDataActionCreator({name, phone, email, message}));
        } catch (error) {
            console.error('Ошибка настройки данных формы:', error)
        }
    }

export default formReducer;
