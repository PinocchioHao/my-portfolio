import {motion} from 'framer-motion';
import {FiMail, FiMapPin, FiCheckCircle, FiClock, FiArrowUpRight} from 'react-icons/fi';

const Contact = () => {
    // 移除了复制相关的状态和函数

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            // 移除了 overflow-hidden，因为不再有背景溢出的元素
            className="relative container mx-auto flex flex-col justify-center items-center py-10 lg:py-20 min-h-[80vh]"
        >
            {/* ==================== 已移除背景动画光球 ==================== */}

            {/* ==================== 主内容区域 ==================== */}
            <div className="relative z-10 w-full max-w-4xl">

                {/* 状态徽章 */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        // 去掉了 backdrop-blur，因为背景现在是纯色了
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-ternary-dark border border-gray-200 dark:border-gray-700 rounded-full shadow-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span
                            className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                            Available for work
                        </span>
                    </motion.div>
                </div>

                {/* 标题区域 */}
                <div className="text-center mb-12">
                    <h1 className="font-general-bold text-4xl sm:text-6xl text-primary-dark dark:text-primary-light mb-6 tracking-tight">
                        Code with purpose.
                        <br/>
                        Built to last.
                    </h1>
                    <p className="font-general-regular text-lg sm:text-xl text-ternary-dark dark:text-ternary-light max-w-2xl mx-auto leading-relaxed">
                        Bringing architectural discipline and full-stack agility.<br className="hidden sm:block" />
                        Focused on <b>clean code</b>, <b>stability</b>, and <b>precision</b>.
                    </p>
                </div>

                {/* 核心交互区：Email 跳转卡片 (改为 <a> 标签) */}
                <motion.div
                    // 微调了悬停效果，使其更具点击感
                    whileHover={{scale: 1.01, translateY: -2}}
                    whileTap={{scale: 0.99}}
                    className="mx-auto max-w-2xl mb-12"
                >
                    <a
                        href="mailto:lyhkakaka@gmail.com"
                        className="group relative cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-4 p-2 pl-8 pr-2 bg-white dark:bg-ternary-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* 左侧图标和文字 */}
                        <div className="flex items-center gap-4 py-4 sm:py-0">
                            <div
                                className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-500 group-hover:rotate-12 transition-transform duration-300">
                                <FiMail className="text-2xl"/>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-0.5">
                                    Drop me a line at
                                </p>
                                <p className="text-xl sm:text-2xl font-general-semibold text-primary-dark dark:text-primary-light group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    lyhkakaka@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* 右侧动作按钮 (改为发送图标) */}
                        <div className="w-full sm:w-auto">
                            <div
                                className="w-full sm:w-auto px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-primary-dark dark:bg-indigo-500 text-white group-hover:shadow-lg group-hover:shadow-indigo-500/30 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600">
                                <span>Send Email</span>
                                {/* 使用右上箭头图标，暗示跳转 */}
                                <FiArrowUpRight
                                    className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                            </div>
                        </div>
                    </a>
                </motion.div>

                {/* 底部信息 Grid (Bento Box Style) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 sm:px-0">

                    {/* 格子 1: Location */}
                    <motion.div
                        whileHover={{y: -5}}
                        // 去掉了 backdrop-blur
                        className="bg-white dark:bg-ternary-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-500">
                            <FiMapPin className="text-xl"/>
                        </div>
                        <h3 className="text-lg font-bold text-primary-dark dark:text-primary-light mb-1">Location</h3>
                        <p className="text-gray-500 dark:text-gray-400">Wollongong, NSW</p>
                    </motion.div>

                    {/* 格子 2: Timezone */}
                    <motion.div
                        whileHover={{y: -5}}
                        className="bg-white dark:bg-ternary-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-full text-orange-500">
                            <FiClock className="text-xl"/>
                        </div>
                        <h3 className="text-lg font-bold text-primary-dark dark:text-primary-light mb-1">Timezone</h3>
                        <p className="text-gray-500 dark:text-gray-400">GMT+10 / +11 (AEST)</p>
                    </motion.div>

                    {/* 格子 3: Preference */}
                    <motion.div
                        whileHover={{y: -5}}
                        className="bg-white dark:bg-ternary-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-full text-green-500">
                            <FiCheckCircle className="text-xl"/>
                        </div>
                        <h3 className="text-lg font-bold text-primary-dark dark:text-primary-light mb-1">Availability</h3>
                        <p className="text-gray-500 dark:text-gray-400">Immediate Start</p>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default Contact;