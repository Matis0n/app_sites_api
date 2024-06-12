import axios, {AxiosResponse} from "axios";
import {ICategories, IProjects, IUsersForm} from "../types/type.ts";

const instance = axios.create({
    baseURL: 'https://api.test.cyberia.studio/api/v1/'
})

export const testAPI = {
    getProjects(): Promise<AxiosResponse<IProjects>> {
        return instance.get<IProjects>(`projects`)
    },
    getProjectsCategories(): Promise<AxiosResponse<ICategories>> {
        return instance.get<ICategories>(`project-categories`)
    },
    submitData(name: string, phone: string, email: string, message: string): Promise<AxiosResponse<IUsersForm>> {
        return instance.post<IUsersForm>(`feedbacks`, {name, phone, email, message})
    }
}
