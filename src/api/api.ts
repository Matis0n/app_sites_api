import axios, {AxiosResponse} from "axios";
import {ICategoriesItems, CategoriesType, IProjectsItems, ProjectsType, IUsersForm} from "../types/type.ts";

const instance = axios.create({
    baseURL: 'https://api.test.cyberia.studio/api/v1/'
})

export const testAPI = {
    getProjects(): Promise<Array<ProjectsType>> {
        return instance.get<IProjectsItems>(`projects`).then(res => res.data.items)
    },
    getProjectsCategories(): Promise<Array<CategoriesType>> {
        return instance.get<ICategoriesItems>(`project-categories`).then(res => res.data.items)
    },
    submitData({name, phone, email, message}:IUsersForm): Promise<AxiosResponse<IUsersForm>> {
        return instance.post<IUsersForm>(`feedbacks`, {name, phone, email, message})
    }
}
