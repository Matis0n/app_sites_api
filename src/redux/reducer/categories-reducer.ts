import {testAPI} from "../../api/api.ts"
import {ICategories} from "../../types/type.ts";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store.ts";

const SET_CATEGORIES = 'SET-CATEGORIES';

let initialState = {
    categories: [] as Array<ICategories>
};

type InitialStateType = typeof initialState

const projectsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: [...state.categories,...action.payload]
            }
        default:
            return state
    }
}

type ActionsTypes = CategoriesActionCreatorType //CategoriesActionCreatorType | остальные ActionCreator типы |..|

export type CategoriesActionCreatorType = {
    type: typeof SET_CATEGORIES
    payload: ICategories[]
}

export const setCategoriesActionCreator = (category: ICategories[]): CategoriesActionCreatorType =>
    ({ type: SET_CATEGORIES, payload: category })

export const getProjectsCategoriesData = () =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionsTypes>) => {
        try {
            const response = await testAPI.getProjectsCategories()
            const category = response.data.items
            dispatch(setCategoriesActionCreator(category as []))
        } catch (error) {
            console.log('error', error)
        }
    }

export default projectsReducer
