import {testAPI} from "../../api/api.ts";
import {IProjects} from "../../types/type.ts";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store.ts";

const SET_PROJECTS = 'SET-PROJECTS';

let initialState = {
    projects: [] as IProjects[],

};

type InitialStateType = typeof initialState
type ActionsTypes = ProjectsActionCreatorType

export type ProjectsActionCreatorType = {
    type: typeof SET_PROJECTS
    payload: IProjects[]
}
export type  AppDispatch = ThunkDispatch<RootState, unknown, ActionsTypes>


const projectsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state
    }
}


export const setProjectsActionCreator = (project: IProjects[]): ProjectsActionCreatorType =>
    ({type: SET_PROJECTS, payload: project})


export const getProjectsData = () =>
    async (dispatch: AppDispatch) => {

        try {
            const response = await testAPI.getProjects()
            let project = response.data.items
            dispatch(setProjectsActionCreator(project as []))
        } catch (error) {
            console.log('error', error)
        }
    }

export default projectsReducer