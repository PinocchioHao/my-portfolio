import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';

const AppBanner = () => {
    const [activeTheme] = useThemeSwitcher();

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
        >
            {/* --- 左侧文字区域 --- */}
            <div className="w-full md:w-1/2 text-left">

                {/* 1. 名字 + 渐变特效 */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
                >
                    Hi, I am <span className="text-indigo-500 dark:text-indigo-400">Yorick Liu</span>
                </motion.h1>

                {/* 2. 核心定位 (Job Title) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                    A Full-Stack Developer <br/>
                    <span className="text-base md:text-lg text-gray-400 font-normal">
                        Specializing in Backend Architecture & Java Ecosystem
                    </span>
                </motion.p>

                {/* 3. 个人简介 (Elevator Pitch) - 结合你的背景 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="font-general-regular mt-6 text-md md:text-lg leading-relaxed text-gray-500 dark:text-gray-300 text-center sm:text-left max-w-lg"
                >
                    Master of CS student at <b>UoW</b> with <b>4 years</b> of experience at <b>Fortune 500</b> companies including <b>Huawei</b> & <b>China Minsheng Bank</b>. Building scalable, secure, and user-centric solutions.
                </motion.p>

                {/* 4. 按钮组 & 社交链接 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.4,
                    }}
                    className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 mt-8"
                >
                    {/* 简历下载按钮 */}
                    <a
                        download="Yorick_Liu_Resume.pdf"
                        href="/files/Yorick_Liu_Resume.pdf"
                        className="font-general-medium flex justify-center items-center w-40 sm:w-48 py-3 rounded-lg shadow-lg text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 duration-300"
                        aria-label="Download Resume"
                    >
                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                        <span>
                            Resume
                        </span>
                    </a>

                    {/* 社交图标 (快速入口) */}
                    <div className="flex gap-4">
                        <a href="https://github.com/PinocchioHao" target="_blank" className="p-3 bg-gray-50 dark:bg-ternary-dark rounded-lg text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm duration-300">
                            <FiGithub className="w-6 h-6"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yorick-yuhao-liu-81420431b/" target="_blank" className="p-3 bg-gray-50 dark:bg-ternary-dark rounded-lg text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm duration-300">
                            <FiLinkedin className="w-6 h-6"/>
                        </a>
                        <a href="mailto:lyhkakaka@gmail.com" className="p-3 bg-gray-50 dark:bg-ternary-dark rounded-lg text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 shadow-sm duration-300">
                            <FiMail className="w-6 h-6"/>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* --- 右侧图片区域 --- */}
            {/* 建议：如果你有职业照，这里放照片最好。如果没有，保留插画。 */}
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-1/2 text-right float-right mt-8 sm:mt-0"
            >
                <img
                    src={activeTheme === 'dark' ? developerLight : developerDark}
                    alt="Developer"
                    className="w-full lg:w-3/4 ml-auto" // 控制图片大小，不要太大
                />
            </motion.div>
        </motion.section>
    );
};

export default AppBanner;