import {AboutMeContextProvider} from "../../context/AboutMeContext.jsx";
import AboutMeBio from "../about/AboutMeBio.jsx";
import {motion} from "framer-motion";
import AboutCounter from "../about/AboutCounter.jsx";
import AboutClients from "../about/AboutClients.jsx";

const AboutMe = () => {
    return (
        <AboutMeContextProvider>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, delay: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className="container mx-auto"
            >
                <AboutMeBio/>
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, delay: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
            >
                <AboutCounter/>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, delay: 1}}
                exit={{opacity: 0}}
                className="container mx-auto"
            >
                <AboutClients/>
            </motion.div>

        </AboutMeContextProvider>
    );


}

export default AboutMe;