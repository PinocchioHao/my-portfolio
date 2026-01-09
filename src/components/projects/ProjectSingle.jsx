import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, id }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
            className="h-full" // 1. 关键：Motion div 也要占满高度
        >
            <Link to={`/projects/${id}`} aria-label="Single Project" className="h-full block">
                {/* 2. 关键：卡片容器设为 h-full，并使用 flex 布局 */}
                <div className="h-full flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark">

                    {/* 图片区域 */}
                    <div className="flex-shrink-0"> {/* 防止图片被压缩 */}
                        <img
                            src={image}
                            // 3. 关键：图片必须固定高度 (例如 h-60 或 h-64) + object-cover
                            // 这样无论上传什么比例的图，看起来都很整齐
                            className="rounded-t-xl border-none w-full h-64 object-cover"
                            alt="Single Project"
                        />
                    </div>

                    {/* 文字内容区域 */}
                    {/* 4. 关键：flex-grow 让这个区域自动撑满剩余高度 */}
                    <div className="text-center px-4 py-6 flex-grow flex flex-col justify-center">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                            {title}
                        </p>
                        <span className="text-lg text-ternary-dark dark:text-ternary-light">
                            {category}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;