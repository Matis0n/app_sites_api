import  {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjectsCategoriesData} from "../../../redux/reducer/categories-reducer.ts";
import CategoryProject from "./CategoryProject.js";
import {RootState} from "../../../redux/store.ts";
import {ICategories} from "../../../types/type.ts";
import { ThunkDispatch } from 'redux-thunk';
import {AnyAction} from "redux";

const CategoryProjectContainer = () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

    const categories = useSelector<RootState,ICategories[]>(state => state.categoriesPage.categories);
    useEffect(() => {
        dispatch(getProjectsCategoriesData());
    }, [dispatch]);

    return <CategoryProject categories={categories}/>;
};

export default CategoryProjectContainer;
