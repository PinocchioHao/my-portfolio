import { useContext } from "react";
import profileImage from "../../images/profile.png";
import AboutMeContext from "../../context/AboutMeContext.jsx";
import ReactMarkdown from 'react-markdown';

const AboutMeBio = () => {
    const { aboutMe } = useContext(AboutMeContext);

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            {/* 左侧头像 */}
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <img src={profileImage} className="rounded-lg w-96 shadow-lg" alt="Profile" />
            </div>

            {/* 右侧简介 */}
            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.map((bio) => (
                    <div
                        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg leading-relaxed"
                        key={bio.id}
                    >
                        <ReactMarkdown
                            components={{
                                // 修改：只加粗，不加颜色，保持专业感
                                strong: ({node, ...props}) => (
                                    <span className="font-bold" {...props} />
                                )
                            }}
                        >
                            {bio.bio}
                        </ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMeBio;