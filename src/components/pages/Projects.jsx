import {ProjectsProvider} from "../../context/ProjectsContext.jsx";
import ProjectsGrid from "../projects/ProjectsGrid.jsx";

const Projects = () => {
    return (
        <ProjectsProvider>
            <div className="container mx-auto">
                <ProjectsGrid/>
            </div>
        </ProjectsProvider>
    );
}
export default Projects;