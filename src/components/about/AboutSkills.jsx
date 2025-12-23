import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { motion } from "framer-motion";

const AboutSkills = () => {
    const { skillsHeading, skillsData } = useContext(AboutMeContext);

    // 辅助函数：将 0-100 的数值转换为 1-5 的能量等级
    const getLevel = (percentage) => {
        if (percentage >= 90) return 5; // 大师/精通
        if (percentage >= 75) return 4; // 高级/熟练
        if (percentage >= 50) return 3; // 中级
        if (percentage >= 25) return 2; // 初级
        return 1; // 入门
    };

    return (
        <div className="mt-10 sm:mt-20">
            {/* 标题 */}
            <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-12">
                {skillsHeading}
            </p>

            {/* 卡片网格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.map((category) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: category.id * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* 1. 分类标题 */}
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            {category.icon}
                            <h3 className="font-general-medium text-xl text-primary-dark dark:text-primary-light">
                                {category.title}
                            </h3>
                        </div>

                        {/* 2. 技能列表 */}
                        <div className="flex flex-col gap-5">
                            {category.skills.map((skill, index) => {
                                const level = getLevel(skill.percentage);

                                return (
                                    <div key={index} className="w-full">
                                        {/* 技能名称与图标 */}
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">
                                                    {skill.icon}
                                                </span>
                                                <span className="font-general-regular text-ternary-dark dark:text-ternary-light text-md">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>

                                        {/* 3. 能量格 (Energy Bars) */}
                                        <div className="flex gap-1.5 h-2.5">
                                            {/* 生成 5 个格子 */}
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    // 初始状态：灰色
                                                    className={`flex-1 rounded-sm ${
                                                        i < level
                                                            ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" // 激活：靛蓝 + 发光效果
                                                            : "bg-gray-200 dark:bg-gray-700 opacity-50" // 未激活：灰色
                                                    }`}
                                                    // 动画：依次点亮
                                                    initial={{ opacity: 0.3, scale: 0.8 }}
                                                    whileInView={{
                                                        opacity: i < level ? 1 : 0.3,
                                                        scale: 1
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: 0.1 + (i * 0.1) // Stagger 效果：0.1s, 0.2s, 0.3s...
                                                    }}
                                                    viewport={{ once: true }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutSkills;