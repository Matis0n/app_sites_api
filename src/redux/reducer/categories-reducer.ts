import {testAPI} from "../../api/api.ts"
import {CategoriesType} from "../../types/type.ts";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store.ts";

const SET_CATEGORIES = 'SET-CATEGORIES';

let initialState = {
    categories: [] as Array<CategoriesType>
};

type InitialStateType = typeof initialState
type ActionsTypes = CategoriesActionCreatorType //CategoriesActionCreatorType | остальные ActionCreator типы |..|

export type CategoriesActionCreatorType = {
    type: typeof SET_CATEGORIES
    payload: CategoriesType[]
}
export type  AppDispatch = ThunkDispatch<RootState, unknown, ActionsTypes>


const projectsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export const setCategoriesActionCreator = (category: CategoriesType[]): CategoriesActionCreatorType =>
    ({ type: SET_CATEGORIES, payload: category })


export const getProjectsCategoriesData = () =>
    async (dispatch:AppDispatch) => {
        try {
            const category = await testAPI.getProjectsCategories()
            dispatch(setCategoriesActionCreator(category))
        } catch (error) {
            console.log('error', error)
        }
    }

export default projectsReducer
