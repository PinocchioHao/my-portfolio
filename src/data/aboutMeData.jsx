// src/data/aboutMeData.jsx

// 1. 引入正确的图标库
import { FaJava, FaAws } from "react-icons/fa";
import {
	SiSpring,
	SiPython,
	SiReact,
	SiJavascript,
	SiTailwindcss,
	SiMysql,
	SiRedis,
	SiApachekafka, // IBM MQ (如果没有这个图标，可以用通用的 SiApachekafka 替代)
	SiDocker,
	// SiAmazonaws, // 新增 AWS
	SiJenkins,   // 新增 Jenkins
	SiGit,
	SiLinux,
	SiVite,
	SiHibernate // 新增 Hibernate (可选，或者直接归类在 Java 体系)
} from "react-icons/si";
import { FiDatabase, FiServer, FiCode, FiTool } from "react-icons/fi";

// ==========================================
// 核心修改区域：个人简介 (About Me Bio)
// ==========================================
export const aboutMeData = [
	{
		id: 1, // 第一段：身份定位 + 教育背景
		bio: 'I am a Senior Software Engineer with over four years of industrial experience at **Huawei** and **China Minsheng Bank**. Currently, I am pursuing a Master of Computer Science at the **University of Wollongong** (Graduating Mid-2026). I combine enterprise-level engineering rigor with full-stack agility to deliver robust, scalable software solutions.',
	},
	{
		id: 2, // 第二段：深度经历 (重点突出 Team Lead 和 架构能力)
		bio: 'Previously, I developed high-availability microservices for telecom products at Huawei. Later, as a **Team Lead** at Minsheng Bank, I spearheaded the delivery of critical Commercial Bill Systems, managing the complete **SDLC**—from architectural design and coding to testing and production deployment. These experiences honed my ability to handle complex business logic under strict deadlines.',
	},
	{
		id: 3, // 第三段：技术栈 + 求职目标 (简单直接)
		bio: 'I bring **full-stack capabilities** across the entire software lifecycle. My core expertise lies in the **Java ecosystem (Spring Boot)** and **React**, backed by robust database design (**MySQL, Redis**). Beyond coding, I am proficient in cloud infrastructure and DevOps, utilizing **AWS**, **Docker**, and **CI/CD** to ensure efficient deployment. I am actively seeking **internship or full-time opportunities** in Australia, ready to leverage this end-to-end experience to contribute immediately to a local team.',	},
];

// 2. 技能板块标题
export const skillsHeading = "Technical Proficiency";

// 3. 技能详细数据 (根据你的简历亮点定制)
export const skillsData = [
	{
		id: 1,
		title: "Backend Core",
		icon: <FiServer className="text-3xl text-indigo-500" />,
		skills: [
			// Java: Proficient -> 95%
			{ name: "Java SE / EE", icon: <FaJava className="text-orange-500" />, percentage: 95 },
			// Spring 全家桶 -> 90%
			{ name: "Spring Boot / Cloud", icon: <SiSpring className="text-green-500" />, percentage: 90 },
			// 架构设计 -> 85%
			{ name: "Microservices", icon: <FiServer className="text-indigo-400" />, percentage: 85 },
			{ name: "Python", icon: <SiPython className="text-blue-500" />, percentage: 65 },

		]
	},
	{
		id: 2,
		title: "Frontend & UI",
		icon: <FiCode className="text-3xl text-indigo-500" />,
		skills: [
			// React 技术栈 (你要求加上的)
			{ name: "React.js", icon: <SiReact className="text-blue-400" />, percentage: 80 },
			// 基础三剑客 -> Familiar
			{ name: "JS / HTML / PHP", icon: <SiJavascript className="text-yellow-400" />, percentage: 85 },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, percentage: 75 },
		]
	},
	{
		id: 3,
		title: "Database & Middleware",
		icon: <FiDatabase className="text-3xl text-indigo-500" />,
		skills: [
			{ name: "MySQL / MyBatis", icon: <SiMysql className="text-blue-600" />, percentage: 90 },
			{ name: "Redis Caching", icon: <SiRedis className="text-red-500" />, percentage: 75 },
			// Message Queues (涵盖 IBM MQ)
			{ name: "Message Queues", icon: <SiApachekafka className="text-blue-600" />, percentage: 80 },
		]
	},
	{
		id: 4,
		title: "DevOps & Cloud",
		icon: <FiTool className="text-3xl text-indigo-500" />,
		skills: [
			// AWS: CodePipeline, ECS, S3
			{ name: "AWS Cloud", icon: <FaAws className="text-orange-500" />, percentage: 85 },
			// CI/CD & Tools
			{ name: "Docker / Jenkins", icon: <SiDocker className="text-gray-600 dark:text-gray-300" />, percentage: 70 },
			{ name: "Git / Linux CLI", icon: <SiGit className="text-red-500" />, percentage: 90 },
		]
	},
];