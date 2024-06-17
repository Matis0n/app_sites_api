export type CategoriesType = {
    id: number
    name: string
}

export interface ICategoriesItems {
    items: CategoriesType[]
}

export type ProjectsType = {
    id: number
    title: string
    slug?: string
    image: string
}

export interface IProjectsItems{
    items: ProjectsType[]
}

export interface IUsersForm {
    name: string | null
    phone: string | null
    email: string | null
    message: string | null
}

export interface IMyForm {
    name: string
    phone: string
    email: string
    message: string
    consent?: string
}