import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube, FiMail,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

// 1. 只保留你真正使用的两个高质量社交账号
const socialLinks = [
    {
        id: 1,
        icon: <FiGithub/>,
        url: 'https://github.com/PinocchioHao',
    },
    {
        id: 2,
        icon: <FiLinkedin/>,
        url: 'https://www.linkedin.com/in/yorick-yuhao-liu-81420431b/',
    },
    {
        id: 3,
        icon: <FiMail/>,
        url: 'mailto:lyhkakaka@gmail.com',
    },
];

const AppFooter = () => {
    return (
        <div className="container mx-auto">
            {/* 2. 调整布局：大幅减少上下的 Padding (pt-20 -> pt-10)，让它紧凑一点 */}
            <div className="pt-10 sm:pt-14 pb-8 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">

                {/* Footer social links */}
                <div className="font-general-regular flex flex-col justify-center items-center mb-6 sm:mb-10">

                    {/* 3. 删除了巨大的 "Follow me" 文本，直接展示图标 */}

                    <ul className="flex gap-4 sm:gap-8">
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-3 duration-300"
                            >
                                {/* 4. 稍微调小了一点图标尺寸 */}
                                <i className="text-xl sm:text-2xl">
                                    {link.icon}
                                </i>
                            </a>
                        ))}
                    </ul>
                </div>

                <AppFooterCopyright />
            </div>
        </div>
    );
};

export default AppFooter;