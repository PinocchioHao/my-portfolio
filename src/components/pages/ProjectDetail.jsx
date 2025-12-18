import ProjectGallery from '../projectinfo/ProjectGallery';
import ProjectHeader from '../projectinfo/ProjectHeader';
import ProjectInfo from '../projectinfo/ProjectInfo';
import ProjectRelatedProjects from '../projectinfo/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				{/*<ProjectRelatedProjects />*/}
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectDetail;
