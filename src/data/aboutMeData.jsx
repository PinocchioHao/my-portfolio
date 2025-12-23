// src/data/aboutMeData.jsx

// 1. 引入正确的图标库
import { FaJava } from "react-icons/fa"; // 替代被删除的 SiJava
import {
	SiSpring, // 替代 SiSpringboot
	SiPython,
	SiReact,
	SiJavascript,
	SiTailwindcss,
	SiMysql,
	SiRedis,
	SiApachekafka,
	SiDocker,
	// SiAmazonaws,
	SiGit,
	SiLinux,
	SiVite
} from "react-icons/si";
import { FiDatabase, FiServer, FiCode, FiTool } from "react-icons/fi";

// 1. 个人简介 (保持不变)
export const aboutMeData = [
	{
		id: 1,
		bio: 'Hi, I’m Yorick. I’m studying for a Master’s degree in Computer Science at the University of Wollongong. Before that, I worked as a software engineer for four years in two Fortune Global 500 companies in China. One is Huawei, a leading telecom company, and the other is China Minsheng Bank, a well-known commercial bank.',
	},
	{
		id: 2,
		bio: 'My background is mainly in backend development. I have a solid foundation in Java, databases, message queues, Redis, and full-cycle project delivery. I’m skilled in using development tools such as Git, Maven, and the Linux command line. I\'m also familiar with HTML, JavaScript and PHP. So I’m confident in full-stack development when needed.',
	},
];

// 2. 技能板块标题
export const skillsHeading = "Technical Proficiency";

// 3. 技能详细数据 (添加了 percentage 字段)
export const skillsData = [
	{
		id: 1,
		title: "Backend Core",
		icon: <FiServer className="text-3xl text-indigo-500" />,
		skills: [
			// percentage: 0-100, 代表熟练度
			{ name: "Java", icon: <FaJava className="text-orange-500" />, percentage: 95 },
			{ name: "Spring Boot/Cloud", icon: <SiSpring className="text-green-500" />, percentage: 90 },
			{ name: "Python (FastAPI)", icon: <SiPython className="text-blue-500" />, percentage: 75 },
		]
	},
	{
		id: 2,
		title: "Frontend & UI",
		icon: <FiCode className="text-3xl text-indigo-500" />,
		skills: [
			{ name: "React.js", icon: <SiReact className="text-blue-400" />, percentage: 80 },
			{ name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, percentage: 85 },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, percentage: 85 },
			{ name: "Vite", icon: <SiVite className="text-purple-500" />, percentage: 70 },
		]
	},
	{
		id: 3,
		title: "Database & Middleware",
		icon: <FiDatabase className="text-3xl text-indigo-500" />,
		skills: [
			{ name: "MySQL / GaussDB", icon: <SiMysql className="text-blue-600" />, percentage: 90 },
			{ name: "Redis", icon: <SiRedis className="text-red-500" />, percentage: 85 },
			{ name: "Message Queues", icon: <SiApachekafka className="text-gray-500" />, percentage: 80 },
		]
	},
	{
		id: 4,
		title: "DevOps & Tools",
		icon: <FiTool className="text-3xl text-indigo-500" />,
		skills: [
			// { name: "AWS", icon: <SiAmazonaws className="text-orange-500" />, percentage: 70 },
			{ name: "Docker", icon: <SiDocker className="text-blue-500" />, percentage: 80 },
			{ name: "Git / Jenkins", icon: <SiGit className="text-red-500" />, percentage: 85 },
			{ name: "Linux CLI", icon: <SiLinux className="text-gray-800 dark:text-gray-200" />, percentage: 85 },
		]
	},
];