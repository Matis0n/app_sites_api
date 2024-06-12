type itemCategoriesType = {
    id: number
    name: string
}

export interface ICategories extends itemCategoriesType {
    items: itemCategoriesType[]
}

type itemsProjectsType = {
    id: number
    title: string
    slug?: string
    image: string
}

export interface IProjects extends itemsProjectsType{
    items: itemsProjectsType[]
}

export interface IUsersForm {
    name: string | null
    phone: string | null
    email: string | null
    message: string | null
}

