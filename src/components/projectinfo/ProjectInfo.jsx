import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import ReactMarkdown from 'react-markdown'; // 1. 引入库

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const projectInfo = singleProjectData?.ProjectInfo;

	if (!projectInfo) return <div className="text-center">Loading...</div>;

	const technologies = projectInfo.Technologies || [];

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			{/* ============ 左侧：侧边栏 (Sidebar) ============ */}
			<div className="w-full sm:w-1/3 text-left">
				{/* ... 侧边栏代码保持不变 ... */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{projectInfo.InfoHeading}
					</p>
					<ul className="leading-loose">
						{Array.isArray(projectInfo.InfoData) && projectInfo.InfoData.map((info) => (
							<li className="font-general-regular text-ternary-dark dark:text-ternary-light" key={info.id}>
								<span className="font-bold">{info.title}: </span>
								<span>{info.details}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="mb-7">
					{technologies.length > 0 && (
						<>
							<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
								{technologies[0].title}
							</p>
							<p className="font-general-regular text-primary-dark dark:text-ternary-light">
								{Array.isArray(technologies[0].techs)
									? technologies[0].techs.join(', ')
									: technologies[0].techs}
							</p>
						</>
					)}
				</div>

				{projectInfo.Resources && projectInfo.Resources.length > 0 && (
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{projectInfo.ResourcesHeading}
						</p>
						<div className="flex flex-col gap-2 mt-2">
							{projectInfo.Resources.map((resource) => (
								<a
									key={resource.id}
									href={resource.details.startsWith('http') ? resource.details : '#'}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 font-general-regular text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 duration-300"
								>
									<span className="text-xl">{resource.icon}</span>
									<span>{resource.title}</span>
								</a>
							))}
						</div>
					</div>
				)}
			</div>

			{/* ============ 右侧：主内容 (Main Content) ============ */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{projectInfo.ProjectDetailsHeading}
				</p>

				{Array.isArray(projectInfo.ProjectDetails) && projectInfo.ProjectDetails.map((block) => (
					<div key={block.id} className="mb-8">
						{/* 如果有子标题 (如 "My Contributions") 则显示 */}
						{block.heading && (
							<h4 className="font-general-medium text-xl text-secondary-dark dark:text-secondary-light mb-2">
								{block.heading}
							</h4>
						)}

						{/* 2. 使用 ReactMarkdown 替换原来的 <p> */}
						<div className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light leading-relaxed">
							<ReactMarkdown
								components={{
									// 针对加粗文本 (**text**) 的样式
									strong: ({node, ...props}) => <span className="font-bold text-primary-dark dark:text-primary-light" {...props} />,

									// 针对段落的样式
									p: ({node, ...props}) => <p className="mb-4" {...props} />,

									// 针对列表 (ul) 的样式
									ul: ({node, ...props}) => <ul className="list-disc list-outside ml-5 mb-4" {...props} />,

									// 针对列表项 (li) 的样式
									li: ({node, ...props}) => <li className="mb-1" {...props} />,

									// 针对链接 [text](url) 的样式
									a: ({node, ...props}) => <a className="text-indigo-500 hover:underline cursor-pointer" target="_blank" {...props} />
								}}
							>
								{block.details}
							</ReactMarkdown>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectInfo;