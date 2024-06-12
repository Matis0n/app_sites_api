import  {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, getProjectsCategoriesData} from "../../../redux/reducer/categories-reducer.ts";
import CategoryProject from "./CategoryProject.js";
import {RootState} from "../../../redux/store.ts";
import {ICategories} from "../../../types/type.ts";


const CategoryProjectContainer = () => {
    const dispatch = useDispatch<AppDispatch>();

    const categories = useSelector<RootState,ICategories[]>(state => state.categoriesPage.categories);
    useEffect(() => {
        dispatch(getProjectsCategoriesData());
    }, [dispatch]);

    return <CategoryProject categories={categories}/>;
};

export default CategoryProjectContainer;
