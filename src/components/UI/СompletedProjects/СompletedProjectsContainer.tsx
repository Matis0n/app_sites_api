import CompletedProjects from "./СompletedProjects.tsx";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {getProjectsData} from "../../../redux/reducer/projects-reducer.ts";

const CompletedProjectsContainer=()=>{

    const dispatch = useDispatch()
    const projects = useSelector(state => state.projectsPage.projects)

    useEffect(() => {
        dispatch(getProjectsData())
    }, [dispatch]);
    return(
        <CompletedProjects projects = {projects} />
    );
}
export default CompletedProjectsContainer