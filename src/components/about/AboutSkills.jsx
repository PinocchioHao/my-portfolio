import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { motion } from "framer-motion";

const AboutSkills = () => {
    const { skillsHeading, skillsData } = useContext(AboutMeContext);

    // 辅助函数：将 0-100 的数值转换为 1-5 的能量等级
    const getLevel = (percentage) => {
        if (percentage >= 90) return 5; // 大师
        if (percentage >= 80) return 4; // 精通
        if (percentage >= 60) return 3; // 熟练
        if (percentage >= 40) return 2; // 基础
        return 1; // 入门
    };

    // --- 核心修改：定义颜色阶梯 (从浅到深) ---
    // 使用 Tailwind 的 indigo 色系
    const barColors = [
        "bg-indigo-300", // 第1格：浅色
        "bg-indigo-400", // 第2格
        "bg-indigo-500", // 第3格：标准色
        "bg-indigo-600", // 第4格
        "bg-indigo-700"  // 第5格：深色 (表示非常精通)
    ];

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

                                        {/* 3. 能量格 (Energy Bars) - 渐进色实现 */}
                                        <div className="flex gap-1.5 h-2.5">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    // 动态类名：
                                                    // 如果是激活状态 (i < level)：从 barColors 数组取对应的颜色
                                                    // 如果是未激活状态：显示灰色
                                                    className={`flex-1 rounded-sm ${
                                                        i < level
                                                            ? `${barColors[i]} shadow-sm`
                                                            : "bg-gray-200 dark:bg-gray-700 opacity-40"
                                                    }`}
                                                    // 动画：依次点亮
                                                    initial={{ opacity: 0.3, scale: 0.8 }}
                                                    whileInView={{
                                                        opacity: i < level ? 1 : 0.3,
                                                        scale: 1
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: 0.1 + (i * 0.1) // Stagger 效果
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