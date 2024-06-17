import {testAPI} from "../../api/api.ts";
import {ProjectsType} from "../../types/type.ts";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../store.ts";

const SET_PROJECTS = 'SET-PROJECTS';

let initialState = {
    projects: [] as ProjectsType[],

};

type InitialStateType = typeof initialState
type ActionsTypes = ProjectsActionCreatorType

export type ProjectsActionCreatorType = {
    type: typeof SET_PROJECTS
    payload: ProjectsType[]
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


export const setProjectsActionCreator = (project: ProjectsType[]): ProjectsActionCreatorType =>
    ({type: SET_PROJECTS, payload: project})


export const getProjectsData = () =>
    async (dispatch: AppDispatch) => {
        try {
            const project = await testAPI.getProjects()
            dispatch(setProjectsActionCreator(project))
        } catch (error) {
            console.log('error', error)
        }
    }

export default projectsReducer