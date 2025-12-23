import ContactForm from "../contact/ContactForm.jsx";
import ContactDetails from "../contact/ContactDetails.jsx";
import {motion} from "framer-motion";

// const Contact = () => {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{
//                 ease: 'easeInOut',
//                 duration: 0.5,
//                 delay: 0.1,
//             }}
//             className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
//         >
//             <ContactForm />
//             <ContactDetails />
//         </motion.div>
//     );
// };
// export default Contact;


import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.1,
            }}
            className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
        >
            {/* 核心修改：去掉左右分栏，直接居中展示一个“联系卡片” */}
            <div className="w-full lg:w-1/2 mx-auto text-center bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-xl p-6 sm:p-10">

                <h2 className="font-general-medium text-2xl sm:text-4xl text-primary-dark dark:text-primary-light mb-8">
                    Let's Connect
                </h2>

                {/* 简短的介绍文案 */}
                <p className="font-general-regular text-lg text-ternary-dark dark:text-ternary-light mb-8 leading-loose">
                    I am currently looking for full-time opportunities in Backend or Full-stack Development.
                    Feel free to reach out via email or connect on LinkedIn.
                </p>

                {/* 联系方式列表 */}
                <div className="flex flex-col gap-6 items-center">

                    {/* Location */}
                    <div className="flex items-center gap-3 text-lg text-ternary-dark dark:text-ternary-light">
                        <FiMapPin className="text-2xl text-indigo-500" />
                        <span>Wollongong, NSW, Australia</span>
                    </div>

                    {/* Email - 点击直接发邮件 */}
                    <a
                        href="mailto:lyhkakaka@gmail.com"
                        className="flex items-center gap-3 text-lg text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 duration-300"
                    >
                        <FiMail className="text-2xl text-indigo-500" />
                        <span>lyhkakaka@gmail.com</span>
                    </a>

                    {/* 社交图标区域 - 重点展示 */}
                    <div className="flex gap-8 mt-4">
                        <a
                            href="https://github.com/YourGithub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark p-4 rounded-lg shadow-sm duration-300"
                        >
                            <FiGithub className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/YourLinkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark p-4 rounded-lg shadow-sm duration-300"
                        >
                            <FiLinkedin className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;