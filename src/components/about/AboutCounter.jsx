import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
    // 1. 设置合理的数值和动画时间
    useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
    useCountUp({ ref: 'companiesCounter', end: 2, duration: 2 });
    useCountUp({ ref: 'projectsCounter', end: 20, duration: 2 });
    useCountUp({ ref: 'technologiesCounter', end: 15, duration: 2 });

    return (
        <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
            <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">

                {/* 1. 工作经验 - 核心竞争力 */}
                <CounterItem
                    title="Years of Experience"
                    counter={<span id="experienceCounter"/>}
                    measurement="+" // 加个+号表示“4年多”
                />

                {/* 2. 500强企业经历 - 品牌背书 (华为+民生) */}
                <CounterItem
                    title="Fortune 500 Companies"
                    counter={<span id="companiesCounter"/>}
                    measurement=""
                />

                {/* 3. 交付项目数 - 展示产出能力 */}
                <CounterItem
                    title="Projects Delivered"
                    counter={<span id="projectsCounter"/>}
                    measurement="+" // 表示不止这些
                />

                {/* 4. 技术栈数量 - 呼应下面的 AboutSkills */}
                <CounterItem
                    title="Technologies Mastered"
                    counter={<span id="technologiesCounter"/>}
                    measurement="+"
                />
            </div>
        </div>
    );
}

export default AboutCounter;