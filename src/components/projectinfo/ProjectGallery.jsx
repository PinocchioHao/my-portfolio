import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const projectImages = singleProjectData?.ProjectImages || [];

	// --- 状态管理 ---
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	// --- 新增：滚动容器的 Ref ---
	const scrollContainerRef = useRef(null);

	// --- 核心逻辑 1: 横向滚动缩略图 ---
	const scroll = (direction) => {
		const { current } = scrollContainerRef;
		if (current) {
			// 每次滚动大概滚一个屏幕宽度的 2/3，或者固定像素
			const scrollAmount = 300;
			if (direction === 'left') {
				current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
			} else {
				current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
			}
		}
	};

	// --- 核心逻辑 2: 灯箱操作 (保持不变) ---
	const openLightbox = (index) => {
		setCurrentIndex(index);
		setIsOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeLightbox = () => {
		setIsOpen(false);
		document.body.style.overflow = 'auto';
	};

	const goToNext = useCallback((e) => {
		e?.stopPropagation();
		setCurrentIndex((prevIndex) =>
			prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
		);
	}, [projectImages.length]);

	const goToPrevious = useCallback((e) => {
		e?.stopPropagation();
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
		);
	}, [projectImages.length]);

	// 键盘监听
	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') closeLightbox();
			if (e.key === 'ArrowRight') goToNext();
			if (e.key === 'ArrowLeft') goToPrevious();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, goToNext, goToPrevious]);

	return (
		<div className="mt-12 relative group">
			{/* =======================================================
               第一部分：页面内缩略图展示 (Carousel / 横向滚动模式)
               =======================================================
            */}

			{/* 只有当图片多于 3 张时，或者为了交互感，才显示左右控制按钮 */}
			{projectImages.length > 0 && (
				<>
					{/* 左滚动按钮 (绝对定位) */}
					<button
						onClick={() => scroll('left')}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-ternary-dark/80 p-3 rounded-full shadow-md text-primary-dark dark:text-white hover:bg-indigo-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
						aria-label="Scroll Left"
					>
						<FiChevronLeft size={24} />
					</button>

					{/* 右滚动按钮 (绝对定位) */}
					<button
						onClick={() => scroll('right')}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-ternary-dark/80 p-3 rounded-full shadow-md text-primary-dark dark:text-white hover:bg-indigo-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
						aria-label="Scroll Right"
					>
						<FiChevronRight size={24} />
					</button>
				</>
			)}

			{/* 滚动容器
                flex: 横向排列
                overflow-x-auto: 允许横向滚动
                no-scrollbar: 下面通过内联样式隐藏滚动条，保持美观
                scroll-smooth: 平滑滚动
            */}
			<div
				ref={scrollContainerRef}
				className="flex overflow-x-auto gap-6 pb-6 px-1 scroll-smooth"
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox & IE 隐藏滚动条
			>
				{/* Webkit 浏览器隐藏滚动条的 hack */}
				<style>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

				{projectImages.map((project, index) => (
					<div
						className="min-w-[85%] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 relative"
						key={project.id}
						onClick={() => openLightbox(index)}
					>
						{/* 图片容器 - 固定高度，保证整齐 */}
						<div className="h-64 sm:h-72 w-full">
							<img
								src={project.img}
								className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
								alt={project.title}
							/>
						</div>

						{/* 可选：图片标题遮罩，放在底部 */}
						<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
							<p className="text-white text-sm font-medium">{project.title}</p>
						</div>
					</div>
				))}
			</div>


			{/* =======================================================
               第二部分：全屏灯箱 (保持原样，无需改动逻辑)
               =======================================================
            */}
			{isOpen && (
				<div
					className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
					onClick={closeLightbox}
				>
					<button
						className="absolute top-5 right-5 text-white/70 hover:text-white z-[1000] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
						onClick={closeLightbox}
					>
						<FiX size={36} />
					</button>

					{projectImages.length > 1 && (
						<button
							className="absolute left-2 sm:left-10 text-white/70 hover:text-white p-4 rounded-full hover:bg-white/10 transition-all z-[1000]"
							onClick={goToPrevious}
						>
							<FiChevronLeft size={48} />
						</button>
					)}

					<div
						className="relative max-w-full max-h-screen p-2 flex flex-col items-center justify-center h-full w-full"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={projectImages[currentIndex].img}
							alt={projectImages[currentIndex].title}
							className="max-h-[85vh] max-w-[90vw] object-contain rounded-md shadow-2xl animate-fade-in-up"
						/>
						<div className="mt-4 text-center">
							<h3 className="text-white text-xl font-medium tracking-wide">
								{projectImages[currentIndex].title}
							</h3>
							<p className="text-white/60 text-sm mt-1">
								{currentIndex + 1} / {projectImages.length}
							</p>
						</div>
					</div>

					{projectImages.length > 1 && (
						<button
							className="absolute right-2 sm:right-10 text-white/70 hover:text-white p-4 rounded-full hover:bg-white/10 transition-all z-[1000]"
							onClick={goToNext}
						>
							<FiChevronRight size={48} />
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default ProjectGallery;