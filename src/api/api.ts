import axios from "axios";
import {ICategoriesItems, IProjectsItems, IUsersForm} from "../types/type.ts";

const instance = axios.create({
    baseURL: 'https://api.test.cyberia.studio/api/v1/'
})

export const testAPI = {
    getProjects(){
        return instance.get<IProjectsItems>(`projects`).then(res => res.data.items)
    },
    getProjectsCategories(){
        return instance.get<ICategoriesItems>(`project-categories`).then(res => res.data.items)
    },
    submitData({name, phone, email, message}:IUsersForm) {
        return instance.post<IUsersForm>(`feedbacks`, {name, phone, email, message})
    }
}
