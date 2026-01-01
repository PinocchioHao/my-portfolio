// src/context/SingleProjectContext.jsx

import { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData.jsx'; // 引入您的数据源

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	// 使用 useParams 钩子获取 URL 中的动态参数 (即项目ID)
	const { id } = useParams();

	const [singleProjectData, setSingleProjectData] = useState({
		ProjectInfo: {
			// 初始化为空对象或默认结构，防止渲染时报错
			CompanyInfo: [],
			Technologies: [{}],
			SocialSharing: [],
			ProjectDetails: [],
		},
	});

	useEffect(() => {
		// 1. 将 URL 中的 ID (字符串) 转换为数字进行匹配
		const projectId = parseInt(id);

		// 2. 在所有项目中查找匹配的 ID
		const currentProject = projectsData.find(p => p.id === projectId);

		if (currentProject) {
			// 3. 找到项目，设置到 state 中
			setSingleProjectData(currentProject);
		} else {
			// 4. 没找到项目，可以设置一个 404 页面或默认错误信息
			console.error(`Project with ID ${id} not found.`);
		}
	}, [id]); // 依赖 id，当 URL 改变时重新加载数据

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;