import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';


// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
    const [projects, setProjects] = useState(projectsData);
    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');


    return (
        // 把所有状态和方法通过 Context 提供给子组件使用。
        // 子组件可以通过 useContext(ProjectsContext) 来访问这些数据。
        <ProjectsContext.Provider
            value={{
                projects,
                setProjects,
                searchProject, // 项目搜索框输入内容
                setSearchProject, // 更新搜索内容
                selectProject, // 项目分类框选中内容
                setSelectProject,
            }}
        >
            {props.children}
        </ProjectsContext.Provider>
    );
};