import { AboutMeContextProvider } from "../../context/AboutMeContext.jsx";
import AboutMeBio from "../about/AboutMeBio.jsx";
import AboutCounter from "../about/AboutCounter.jsx";
import AboutSkills from "../about/AboutSkills.jsx"; // 1. 引入新组件
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <AboutMeContextProvider>
            {/* Bio Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio />
            </motion.div>

            {/* Counter Section (建议保留，可以放 years of experience, projects completed 等) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
            >
                <AboutCounter />
            </motion.div>

            {/* Skills Section (原 Clients 区域) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                {/* 2. 替换为 AboutSkills */}
                <AboutSkills />
            </motion.div>

        </AboutMeContextProvider>
    );
}

export default AboutMe;