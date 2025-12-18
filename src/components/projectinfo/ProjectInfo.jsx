// import { useContext } from 'react';
// import SingleProjectContext from '../../context/SingleProjectContext';
//
// const ProjectInfo = () => {
// 	const { singleProjectData } = useContext(SingleProjectContext);
//
// 	return (
// 		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
// 			<div className="w-full sm:w-1/3 text-left">
// 				{/* Single project client details */}
// 				<div className="mb-7">
// 					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
// 						{singleProjectData.ProjectInfo.ClientHeading}
// 					</p>
// 					<ul className="leading-loose">
// 						{singleProjectData.ProjectInfo.CompanyInfo.map(
// 							(info) => {
// 								return (
// 									<li
// 										className="font-general-regular text-ternary-dark dark:text-ternary-light"
// 										key={info.id}
// 									>
// 										<span>{info.title}: </span>
// 										<a
// 											href="https://stoman.me"
// 											className={
// 												info.title === 'Website' ||
// 												info.title === 'Phone'
// 													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
// 													: ''
// 											}
// 											aria-label="Project Website and Phone"
// 										>
// 											{info.details}
// 										</a>
// 									</li>
// 								);
// 							}
// 						)}
// 					</ul>
// 				</div>
//
// 				{/* Single project objectives */}
// 				<div className="mb-7">
// 					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
// 						{singleProjectData.ProjectInfo.ObjectivesHeading}
// 					</p>
// 					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
// 						{singleProjectData.ProjectInfo.ObjectivesDetails}
// 					</p>
// 				</div>
//
// 				{/* Single project technologies */}
// 				<div className="mb-7">
// 					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
// 						{singleProjectData.ProjectInfo.Technologies[0].title}
// 					</p>
// 					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
// 						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
// 							', '
// 						)}
// 					</p>
// 				</div>
//
// 				{/* Single project social sharing */}
// 				<div>
// 					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
// 						{singleProjectData.ProjectInfo.SocialSharingHeading}
// 					</p>
// 					<div className="flex items-center gap-3 mt-5">
// 						{singleProjectData.ProjectInfo.SocialSharing.map(
// 							(social) => {
// 								return (
// 									<a
// 										key={social.id}
// 										href={social.url}
// 										target="__blank"
// 										aria-label="Share Project"
// 										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
// 									>
// 										<span className="text-lg lg:text-2xl">
// 											{social.icon}
// 										</span>
// 									</a>
// 								);
// 							}
// 						)}
// 					</div>
// 				</div>
// 			</div>
//
// 			{/*  Single project right section */}
// 			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
// 				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
// 					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
// 				</p>
// 				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
// 					return (
// 						<p
// 							key={details.id}
// 							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
// 						>
// 							{details.details}
// 						</p>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };
//
// export default ProjectInfo;




import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { FiGlobe } from 'react-icons/fi'; // 假设您可能用到一些默认图标

const ProjectInfo = () => {
	// 从上下文中获取项目数据
	const { singleProjectData } = useContext(SingleProjectContext);

	// 提前检查 ProjectInfo 是否存在，以防在数据加载前渲染出错
	const projectInfo = singleProjectData?.ProjectInfo;

	// 如果数据正在加载或不存在，可以返回一个加载指示或空
	if (!projectInfo) {
		// 可以在这里返回一个加载动画或 Skeleton
		return <div className="container mx-auto mt-5 sm:mt-10 text-center dark:text-white">Loading project details...</div>;
	}

	// 确保 Technologies 是一个有效的数组，避免后续索引访问报错
	const technologies = projectInfo.Technologies || [];

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">

				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{projectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{/* 安全检查：确保 CompanyInfo 是一个数组 */}
						{Array.isArray(projectInfo.CompanyInfo) && projectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href={info.details.startsWith('http') ? info.details : '#'} // 假设 Website 或 Phone 可能是链接
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{projectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					{/* 仅在 Technologies 数组有元素时渲染标题和内容 */}
					{technologies.length > 0 && (
						<>
							<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
								{technologies[0].title}
							</p>
							<p className="font-general-regular text-primary-dark dark:text-ternary-light">
								{/* **核心修复区域**：安全检查 techs 是否为数组，然后执行 join */}
								{Array.isArray(technologies[0].techs)
									? technologies[0].techs.join(', ')
									: technologies[0].techs || '' // 如果不是数组，显示原始值（可能是字符串）或空
								}
							</p>
						</>
					)}
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{projectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{/* 安全检查：确保 SocialSharing 是一个数组 */}
						{Array.isArray(projectInfo.SocialSharing) && projectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										{/* 这里假设 social.icon 是一个字符串，如果它是 React Component，需要修改渲染方式 */}
										<span className="text-lg lg:text-2xl">
                                  {social.icon === 'FiGlobe' ? <FiGlobe /> : social.icon}
                               </span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/* Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{projectInfo.ProjectDetailsHeading}
				</p>
				{/* 安全检查：确保 ProjectDetails 是一个数组 */}
				{Array.isArray(projectInfo.ProjectDetails) && projectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;