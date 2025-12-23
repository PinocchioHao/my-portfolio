import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import {useState} from "react";
import UseThemeSwitcher from "../../hooks/UseThemeSwitcher.jsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import HireMeModal from '../HireMeModal';

const AppHeader = () => {
    // 控制移动端菜单是否展开
    const [showMenu, setShowMenu] = useState(false);
    // 控制Hire Me弹窗是否展示
    const [showModal, setShowModal] = useState(false);
    // 切换主题
    const [activeTheme, setTheme] = UseThemeSwitcher();

    // TODO 小屏菜单


    // 汉堡按钮控制移动端菜单是否显示
    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    // 显示Hire Me弹窗   TODO 删去hire me，改成简历下载
    function showHireMeModal() {
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

    return (
        <motion.nav
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            <div
                className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">

                <div>
                    <Link to="/">
                        {activeTheme === 'dark' ? (
                            <img
                                src={logoDark}
                                className="w-36"
                                alt="Dark Logo"
                            />
                        ) : (
                            <img
                                src={logoLight}
                                className="w-36"
                                alt="Dark Logo"
                            />
                        )}
                    </Link>
                </div>

                {/* Header links large screen */}
                <div
                    className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <Link
                        to="/projects"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/contact"
                        className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Contact"
                    >
                        Contact
                    </Link>
                </div>
                {/* Header right section buttons */}
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">

                    <div className="hidden md:flex">
                        <button
                            onClick={showHireMeModal}
                            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                            aria-label="Hire Me Button"
                        >
                            Hire Me
                        </button>
                    </div>

                    {/* Theme switcher large screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon
                                className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"/>
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl"/>
                        )}
                    </div>
                </div>
            </div>

            {/* Hire me modal */}
            <div>
                {showModal ? (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                ) : null}
            </div>
        </motion.nav>
    );

}

export default AppHeader;