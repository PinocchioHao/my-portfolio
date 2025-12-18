import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// 安全获取图片数组，默认为空数组
	const projectImages = singleProjectData?.ProjectImages || [];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{projectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full object-cover" // 加了 w-full 保证图片撑满格子
							alt={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;