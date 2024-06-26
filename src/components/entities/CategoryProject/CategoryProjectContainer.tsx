import  {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, getProjectsCategoriesData} from "../../../redux/reducer/categories-reducer.ts";
import CategoryProject from "./CategoryProject.tsx";
import {RootState} from "../../../redux/store.ts";
import {CategoriesType} from "../../../types/type.ts";


const CategoryProjectContainer = () => {
    const dispatch = useDispatch<AppDispatch>();

    const categories = useSelector<RootState,CategoriesType[]>(state => state.categoriesPage.categories);
    useEffect(() => {
        dispatch(getProjectsCategoriesData());
    }, [dispatch]);

    return <CategoryProject categories={categories}/>;
};

export default CategoryProjectContainer;
