import { createContext, useState } from "react";
import { aboutMeData as aboutMeDataJson } from '../data/aboutMeData.jsx';
// 引入新的 skills 数据
import { skillsHeading as skillsHeadingText, skillsData as skillsDataJson } from '../data/aboutMeData.jsx';

const AboutMeContext = createContext();

export const AboutMeContextProvider = ({ children }) => {
    const [aboutMe, setAboutMe] = useState(aboutMeDataJson);

    // 替换掉原来的 clientsHeading 和 clientsData
    const skillsHeading = skillsHeadingText;
    const [skillsData, setSkillsData] = useState(skillsDataJson);

    return (
        <AboutMeContext.Provider
            value={{
                aboutMe,
                setAboutMe,
                skillsHeading, // 传递技能标题
                skillsData,    // 传递技能数据
                setSkillsData,
            }}
        >
            {children}
        </AboutMeContext.Provider>
    );
};

export default AboutMeContext;