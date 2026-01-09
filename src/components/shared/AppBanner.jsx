import useThemeSwitcher from '../../hooks/useThemeSwitcher.jsx';
import { FiArrowDownCircle, FiMessageSquare } from 'react-icons/fi'; // 引入 Message 图标
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 引入 Link

const AppBanner = () => {
    const [activeTheme] = useThemeSwitcher();

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
        >
            <div className="w-full md:w-1/2 text-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
                    className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
                >
                    Hi, I am <span className="text-indigo-500 dark:text-indigo-400">Yorick Liu</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                    className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                    A Full-Stack Developer <br/>
                    <span className="text-base md:text-lg text-gray-400 font-normal">
                        Specializing in Backend Architecture & Java Ecosystem
                    </span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
                    className="font-general-regular mt-6 text-md md:text-lg leading-relaxed text-gray-500 dark:text-gray-300 text-center sm:text-left max-w-lg"
                >
                    Master of CS student at <b>UoW</b> with <b>4 years</b> of experience at <b>Fortune 500</b> companies including <b>Huawei</b> & <b>China Minsheng Bank</b>. Building scalable, secure, and user-centric solutions.
                </motion.p>

                {/* --- 核心修改区域：双按钮布局 --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 mt-8"
                >
                    {/* 1. 主按钮：下载简历 (高亮) */}
                    <a
                        download="Yorick_Liu_Resume.pdf"
                        href="/files/Yorick(Yuhao)Liu_Resume.pdf"
                        className="font-general-medium flex justify-center items-center w-40 sm:w-48 py-3 rounded-lg shadow-lg text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 duration-300"
                        aria-label="Download Resume"
                    >
                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                        <span>Resume</span>
                    </a>

                    {/* 2. 次按钮：联系我 (描边风格，更轻量) */}
                    {/* 删除了之前的社交图标，改用这个按钮引导去 Contact 页 */}
                    <Link
                        to="/contact"
                        className="font-general-medium flex justify-center items-center w-40 sm:w-48 py-3 rounded-lg border border-indigo-200 dark:border-ternary-dark text-ternary-dark dark:text-ternary-light hover:bg-indigo-50 dark:hover:bg-ternary-dark duration-300"
                        aria-label="Contact Me"
                    >
                        <FiMessageSquare className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
                        <span>Contact Me</span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-1/2 text-right float-right mt-8 sm:mt-0"
            >
                <img
                    src={activeTheme === 'dark' ? developerLight : developerDark}
                    alt="Developer"
                    className="w-full lg:w-3/4 ml-auto"
                />
            </motion.div>
        </motion.section>
    );
};

export default AppBanner;