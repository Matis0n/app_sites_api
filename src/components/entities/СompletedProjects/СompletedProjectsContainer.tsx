import CompletedProjects from "./СompletedProjects.tsx";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {AppDispatch, getProjectsData} from "../../../redux/reducer/projects-reducer.ts";
import {RootState} from "../../../redux/store.ts";
import {ProjectsType} from "../../../types/type.ts";

const CompletedProjectsContainer=()=>{

    const dispatch = useDispatch<AppDispatch>()
    const projects = useSelector<RootState,Array<ProjectsType>>(state => state.projectsPage.projects)

    useEffect(() => {
        dispatch(getProjectsData())
    }, [dispatch]);
    return(
        <CompletedProjects projects = {projects} />
    );
}
export default CompletedProjectsContainer