import { FiMenu, FiMoon, FiSun, FiX, FiArrowDownCircle } from 'react-icons/fi'; // 1. 引入下载图标
import { useState } from "react";
import UseThemeSwitcher from "../../hooks/useThemeSwitcher.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';


const AppHeader = () => {
    // 控制移动端菜单是否展开
    const [showMenu, setShowMenu] = useState(false);
    // 3. 删除 showModal 状态
    // const [showModal, setShowModal] = useState(false);

    // 切换主题
    const [activeTheme, setTheme] = UseThemeSwitcher();

    // 汉堡按钮控制移动端菜单是否显示
    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    // 4. 删除 showHireMeModal 函数
    /* function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }
    */

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">

                {/* Logo 部分 */}
                <div>
                    <Link to="/">
                        {activeTheme === 'dark' ? (
                            <img src={logoDark} className="w-36" alt="Dark Logo" />
                        ) : (
                            <img src={logoLight} className="w-36" alt="Light Logo" />
                        )}
                    </Link>
                </div>

                {/* Header links large screen */}
                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <Link
                        to="/projects"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/contact"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                        aria-label="Contact"
                    >
                        Contact
                    </Link>
                </div>

                {/* Header right section buttons */}
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">

                    {/* 5. 修改这里：将 Button 改为 a 标签 */}
                    <div className="hidden md:flex">
                        <a
                            href="/files/Yorick(Yuhao)Liu_Resume.pdf" // 确保你的简历文件路径正确
                            download="Yorick_Liu_Resume.pdf"     // 下载时的文件名
                            target="_blank"
                            rel="noreferrer"
                            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 flex items-center gap-2"
                            aria-label="Download Resume"
                        >
                            <FiArrowDownCircle className="w-5 h-5 mr-1" />
                            <span>
                                Resume
                            </span>
                        </a>
                    </div>

                    {/* Theme switcher large screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                        )}
                    </div>
                </div>
            </div>

        </motion.nav>
    );
}

export default AppHeader;