// src/context/ProjectsContext.jsx
import { useState, createContext } from 'react';

// 核心修改：引入那个唯一的、详细的数据源
import { projectsData as projectsDataMap } from '../data/projectsData.jsx';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
    // 直接使用详细数据。
    // 虽然数据里包含了很多详情页才用的字段，但 ProjectsGrid 组件只会读取它需要的 title, category, img，
    // 多余的字段会被忽略，不会报错。
    const [projects, setProjects] = useState(projectsDataMap);

    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                setProjects,
                searchProject,
                setSearchProject,
                selectProject,
                setSelectProject,
            }}
        >
            {props.children}
        </ProjectsContext.Provider>
    );
};