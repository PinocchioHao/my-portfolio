// // src/data/projectsData.jsx
// import { FiGithub, FiExternalLink, FiLock, FiServer, FiUsers, FiActivity } from 'react-icons/fi';
//
// // 引入现有图片占位 (你可以后续替换为相关的架构图或脱敏后的界面图)
// import WebImage1 from '../images/web-project-1.jpg';
// import WebImage2 from '../images/web-project-2.jpg';
// import MobileImage1 from '../images/mobile-project-1.jpg';
//
// export const projectsData = [
// 	// =========================================================================
// 	// 项目 1: 民生银行商业汇票系统 (FinTech / High Concurrency)
// 	// =========================================================================
// 	{
// 		id: 1,
// 		title: 'Enterprise Commercial Bill System',
// 		category: 'FinTech / Enterprise',
// 		img: WebImage1, // 建议后续换成一张更有“数据感”或“金融系统架构”的图
//
// 		ProjectHeader: {
// 			title: 'Minsheng Commercial Bill System',
// 			publishDate: 'Mar 2022 - Jun 2024',
// 			tags: 'FinTech / Backend / Distributed System',
// 		},
// 		ProjectImages: [
// 			{ id: 1, title: 'System Architecture Diagram', img: WebImage1 },
// 			{ id: 2, title: 'Transaction Flow', img: WebImage2 },
// 		],
// 		ProjectInfo: {
// 			// 侧边栏：项目背景
// 			InfoHeading: 'Project Context',
// 			InfoData: [
// 				{ id: 1, title: 'Company', details: 'Minsheng Fintech (China Minsheng Bank)' },
// 				{ id: 2, title: 'Role', details: 'Backend Lead & Core Developer' },
// 				{ id: 3, title: 'Type', details: 'Enterprise Core Banking System' },
// 				{ id: 4, title: 'Team Scale', details: 'Led a sub-team of 4 developers' },
// 			],
//
// 			// 侧边栏：技术栈 (强调企业级技术)
// 			Technologies: [
// 				{
// 					title: 'Tech Stack',
// 					techs: [
// 						'Java (Spring Framework)',
// 						'Gauss DB / MySQL',
// 						'IBM MQ',
// 						'Redis',
// 						'Struts (Legacy)',
// 						'Private Cloud'
// 					],
// 				}
// 			],
//
// 			// 侧边栏：资源 (由于是银行项目，显示 Private)
// 			ResourcesHeading: 'Resources',
// 			Resources: [
// 				{
// 					id: 1,
// 					title: 'Internal System (NDA Protected)',
// 					details: '#',
// 					icon: <FiLock className="text-red-500" /> // 加个锁图标表示保密
// 				},
// 			],
//
// 			// 主内容：深度描述
// 			ProjectDetailsHeading: 'Project Overview & Key Achievements',
// 			ProjectDetails: [
// 				{
// 					id: 1,
// 					heading: 'Background & Scale',
// 					// 修改：使用了您提供的新文案
// 					details: '该系统是民生银行的核心业务平台之一，负责处理企业间的商业汇票支付承诺。系统涵盖了票据开具、背书转让、银行承兑和贴现等复杂的金融业务流程，以及融合其它金融场景等的一些特色产品。'
// 				},
// 				{
// 					id: 2,
// 					heading: 'My Role & Technical Contributions',
// 					// 修改：保留了前半部分关于承兑/贴现和MQ的高价值描述，后半部分替换为您提供的关于数据库优化的新文案
// 					details: '作为核心后端工程师，我主导了 **承兑 (Acceptance)** 和 **贴现 (Discount)** 核心业务模块的开发。技术上，我使用 **IBM MQ** 实现了系统间的异步通信，确保了高并发场景下交易的最终一致性。针对银行复杂的内网环境，我们采用了基于私有云的部署配置，并对 Gauss DB 数据库查询进行了优化以及编写高质量SQL，保证批量业务的处理效率。'
// 				},
// 				{
// 					id: 3,
// 					heading: 'Leadership & Problem Solving',
// 					details: '除了编码，我还担任了小组 Leader (Squad Lead)，负责带领 4 名成员进行迭代交付。我的职责包括需求分析 (与业务部门对接)、风险控制以及代码审查 (Code Review)。在任职期间，我成功排查并修复了多个生产环境的紧急故障 (Production Issues)，保障了系统的高可用性 (High Availability)。'
// 				},
// 			],
// 		},
// 	},
//
// 	// =========================================================================
// 	// 项目 2: 华为微波设备部署平台 (IoT / Telecom / Team Management)
// 	// =========================================================================
// 	{
// 		id: 2,
// 		title: 'Microwave Deployment Platform',
// 		category: 'Telecom / IoT Tooling',
// 		img: MobileImage1, // 建议换成一张稍微带有“设备”或“移动端”感觉的图
//
// 		ProjectHeader: {
// 			title: 'Huawei Microwave Deployment Tool',
// 			publishDate: 'Jul 2019 - Apr 2021',
// 			tags: 'IoT / Microservices / Team Mgmt',
// 		},
// 		ProjectImages: [
// 			{ id: 1, title: 'Mobile App Interface', img: MobileImage1 },
// 			{ id: 2, title: 'Microservice Architecture', img: WebImage2 },
// 		],
// 		ProjectInfo: {
// 			InfoHeading: 'Project Context',
// 			InfoData: [
// 				{ id: 1, title: 'Company', details: 'Huawei Technologies' },
// 				{ id: 2, title: 'Role', details: 'Tool Owner & Team Lead' },
// 				{ id: 3, title: 'Team Size', details: '13 Members (9 Devs + 4 Testers)' }, // 强调带队规模
// 				{ id: 4, title: 'Domain', details: 'Network O&M Automation' },
// 			],
//
// 			Technologies: [
// 				{
// 					title: 'Tech Stack',
// 					techs: [
// 						'Spring Boot (Microservices)',
// 						'Android (Frontend)',
// 						'MySQL & Redis',
// 						'Jenkins (CI/CD)',
// 						'RESTful API'
// 					],
// 				}
// 			],
//
// 			ResourcesHeading: 'Resources',
// 			Resources: [
// 				{
// 					id: 1,
// 					title: 'Internal Tool (Private)',
// 					details: '#',
// 					icon: <FiLock className="text-yellow-500" />
// 				},
// 			],
//
// 			ProjectDetailsHeading: 'Project Overview & Achievements',
// 			ProjectDetails: [
// 				{
// 					id: 1,
// 					heading: 'Product Overview',
// 					details: '这是一个用于电信基站现场部署和运维的综合工具平台。系统包含运行在 Android 手持终端上的前端 App 和基于 Spring Boot 的微服务后端。它允许现场工程师通过无线连接直连微波设备，自动化下发配置脚本、采集运行指标并进行故障诊断，极大地降低了基站交付的人力成本。'
// 				},
// 				{
// 					id: 2,
// 					heading: 'Role: Tool Owner & Project Management',
// 					details: '作为该工具的 **Owner**，我不仅负责技术实现，还承担了 Project Manager 的角色。我带领了一个 **13人 (9开发 + 4测试)** 的外包团队进行敏捷开发。我的工作涵盖了从需求沟通、任务拆解、进度管理到最终交付的全生命周期。通过优化沟通流程（连接测试团队与开发团队），我确保了每个版本的平滑发布。'
// 				},
// 				{
// 					id: 3,
// 					heading: 'Architecture Modernization',
// 					// 修改：使用了您提供的新文案，强调了老旧代码重构、合规性和 Android 需求开发
// 					details: '技术层面，我主导了后端架构的升级——从单体架构迁移至 微服务架构 (Microservices)。我搭建了基于 Jenkins 的持续集成/持续部署 (CI/CD) 流水线，实现了代码的自动化构建与检查，主导老旧代码的重构与单元测试工作，提高了代码质量，以及使产品符合公司各种合规门槛红线。此外，我还涉及了部分 Android 端的需求开发。'
// 				},
// 			],
// 		},
// 	},
//
// 	// =========================================================================
// 	// 项目 3: CACHI Health Platform (Digital Health / AI / Local NGO)
// 	// =========================================================================
// 	{
// 		id: 3,
// 		title: 'CACHI Health Platform',
// 		category: 'Digital Health / AI',
// 		img: WebImage1,
//
// 		ProjectHeader: {
// 			title: 'CACHI - Culturally Appropriate Health Platform',
// 			publishDate: 'Aug 2024 - Present',
// 			tags: 'React / Spring Boot / LLM / AWS',
// 		},
// 		ProjectImages: [
// 			{ id: 1, title: 'Platform Home Page', img: WebImage1 },
// 			{ id: 2, title: 'AI Chatbot Interface', img: WebImage2 },
// 		],
// 		ProjectInfo: {
// 			// 侧边栏：项目背景
// 			InfoHeading: 'Project Context',
// 			InfoData: [
// 				{ id: 1, title: 'Client', details: 'Sisters Cancer Support Group' },
// 				{ id: 2, title: 'Partner', details: 'Multicultural Illawarra' },
// 				{ id: 3, title: 'Role', details: 'Team Lead & Full Stack Dev' },
// 				{ id: 4, title: 'Type', details: 'UOW Capstone Project' },
// 			],
//
// 			// 侧边栏：技术栈 (强调 AI 和 全栈)
// 			Technologies: [
// 				{
// 					title: 'Tech Stack',
// 					techs: [
// 						'React (Vite)',
// 						'Spring Boot',
// 						'LLM Integration (AI)',
// 						'AWS (Deployment)',
// 						'PostgreSQL'
// 					],
// 				}
// 			],
//
// 			// 侧边栏：资源
// 			ResourcesHeading: 'Code & Demo',
// 			Resources: [
// 				{
// 					id: 1,
// 					title: 'Source Code',
// 					details: 'https://github.com/PinocchioHao/cachi-health-platform',
// 					icon: <FiGithub />
// 				},
// 			],
//
// 			// 主内容：注重“用户体验”和“AI解决方案”
// 			ProjectDetailsHeading: 'Project Overview & Key Contributions',
// 			ProjectDetails: [
// 				{
// 					id: 1,
// 					heading: 'The Challenge: Health Literacy Gap',
// 					details: '该项目旨在解决伊拉瓦拉 (Illawarra) 地区多元文化社区（特别是缅甸和阿拉伯语背景移民）面临的癌症信息获取障碍。由于目标用户群体的英语读写能力较低 (Low Literacy)，传统的纯文本信息难以被理解。客户需要一个视觉化、易于搜索且符合文化习惯的数字化健康平台。'
// 				},
// 				{
// 					id: 2,
// 					heading: 'Solution: AI-Powered Accessibility',
// 					// 修改：使用了您提供的新文案，强调解决用户障碍
// 					details: '作为 Team Leader，我带领团队构建了一个基于 Spring Boot 和 React 的全栈平台。为了解决用户各种使用障碍，我们创新性地集成了 LLM (Large Language Model) 驱动的 AI 聊天机器人，极大地降低了用户获取信息的门槛。'
// 				},
// 				{
// 					id: 3,
// 					heading: 'Leadership & Stakeholder Management',
// 					// 修改：使用了您提供的新文案，强调上线部署
// 					details: '除了核心开发，我负责与客户 (NGO代表) 和导师 (Supervisor) 进行定期的需求沟通与演示 (Showcase)。我将模糊的医疗需求转化为具体的技术指标，并协调前后端开发进度，最终在 AWS 上成功部署上线，获得了客户的高度认可。'
// 				},
// 			],
// 		},
// 	},
//
// 	// =========================================================================
// 	// 项目 4: Service Universe - Municipal Service Platform (Microservices / Process Mining)
// 	// =========================================================================
// 	{
// 		id: 4,
// 		title: 'Service Universe Platform',
// 		category: 'Microservices / Cloud',
// 		img: WebImage2, // 建议：换成一张微服务架构图 (Eureka/Gateway拓扑图) 或 Process Mining 的分析图
//
// 		ProjectHeader: {
// 			title: 'Service Universe - Municipal Services',
// 			publishDate: 'Spring 2025',
// 			tags: 'Spring Cloud / AWS / Process Mining',
// 		},
// 		ProjectImages: [
// 			{ id: 1, title: 'Microservices Architecture', img: WebImage1 },
// 			{ id: 2, title: 'Process Mining Analysis (Disco)', img: WebImage2 },
// 		],
// 		ProjectInfo: {
// 			// 侧边栏：项目背景
// 			InfoHeading: 'Project Context',
// 			InfoData: [
// 				{ id: 1, title: 'Subject', details: 'Service-Oriented Software Engineering' },
// 				{ id: 2, title: 'Role', details: 'Team Lead & System Architect' },
// 				{ id: 3, title: 'Team Size', details: '6 Members' },
// 				{ id: 4, title: 'Focus', details: 'Microservices & Process Analytics' },
// 			],
//
// 			// 侧边栏：技术栈 (全栈 + 运维 + 数据)
// 			Technologies: [
// 				{
// 					title: 'Tech Stack',
// 					techs: [
// 						'Spring Cloud (Eureka/Gateway)',
// 						'Spring Boot',
// 						'Docker & Docker Compose',
// 						'AWS (EC2 Linux)',
// 						'React',
// 						'Process Mining (Disco/Python)'
// 					],
// 				}
// 			],
//
// 			// 侧边栏：资源
// 			ResourcesHeading: 'Deliverables',
// 			Resources: [
// 				{
// 					id: 1,
// 					title: 'Architecture Design',
// 					details: '#',
// 					icon: <FiServer />
// 				},
// 				{
// 					id: 2,
// 					title: 'Process Mining Report',
// 					details: '#',
// 					icon: <FiActivity />
// 				},
// 			],
//
// 			// 主内容：STAR 法则叙述
// 			ProjectDetailsHeading: 'Architecture & Implementation Details',
// 			ProjectDetails: [
// 				{
// 					id: 1,
// 					heading: 'Project Scope & Leadership',
// 					details: '本项目旨在构建一个名为 "Service Universe" 的市政服务平台，集成停车管理、能源报告和驾照预约等多种服务。作为 **Team Leader**，我负责了项目的整体技术选型和架构设计，带领 5 名成员完成了从企业架构设计 (ArchiMate)、业务流程建模 (BPMN) 到微服务落地的全过程。'
// 				},
// 				{
// 					id: 2,
// 					heading: 'Microservices Architecture (Spring Cloud)',
// 					details: '我设计并实现了一套基于 **Spring Cloud Ecosystem** 的微服务架构。系统包含三个核心业务服务 (Parking, Energy, Booking)，每个服务均独立打包并拥有独立的数据库 (Database per Service pattern)。我引入了 **Netflix Eureka** 实现服务注册与发现，并使用 **Spring Cloud Gateway** 作为统一的 API 入口，实现了动态路由和负载均衡。'
// 				},
// 				{
// 					id: 3,
// 					heading: 'Containerization & Cloud Deployment',
// 					details: '为了实现“一次构建，到处运行”，我编写了 Dockerfiles 将所有微服务容器化，并使用 **Docker Compose** 编排了包含 Gateway, Eureka 和业务服务的完整集群。最终，我将整套环境部署在 **AWS Linux 2023** 实例上，通过配置 Docker 网络实现了服务间的安全通信和对外的统一访问。'
// 				},
// 				{
// 					id: 4,
// 					heading: 'Process Mining & Analytics',
// 					details: '这是项目的核心亮点。为了分析业务流程的执行效率，我利用 **AOP (Aspect-Oriented Programming)** 开发了一个自定义日志组件，自动采集结构化的事件日志 (JSON Event Logs)。随后，我编写 **Python 脚本**对日志进行清洗和转换，并导入 **Disco** 工具进行流程挖掘。我们成功还原了实际的业务流程图，并通过分析瓶颈优化了服务调用链路。'
// 				},
// 			],
// 		},
// 	},
//
// 	// =========================================================================
// 	// 项目 5: File Chain - Secure Storage (Cybersecurity / Web3 / Python)
// 	// =========================================================================
// 	{
// 		id: 5,
// 		title: 'File Chain Secure Platform',
// 		category: 'Cybersecurity / Web3',
// 		img: WebImage1,
//
// 		ProjectHeader: {
// 			title: 'File Chain - Encrypted Cloud Storage',
// 			publishDate: 'Oct 2025',
// 			tags: 'Python / React / Blockchain / Cryptography',
// 		},
// 		ProjectImages: [
// 			{ id: 1, title: 'Secure File Sharing Flow', img: WebImage1 },
// 			{ id: 2, title: 'Blockchain Transaction Log (Sepolia)', img: WebImage2 },
// 		],
// 		ProjectInfo: {
// 			// 侧边栏：项目背景
// 			InfoHeading: 'Project Context',
// 			InfoData: [
// 				{ id: 1, title: 'Subject', details: 'CSIT953 - Network Security' },
// 				{ id: 2, title: 'Role', details: 'Security Architect & Full Stack Dev' },
// 				{ id: 3, title: 'Team Size', details: '5 Members' },
// 				{ id: 4, title: 'Focus', details: 'End-to-End Encryption & Auditability' },
// 			],
//
// 			// 侧边栏：技术栈 (强调 Python 和 密码学)
// 			Technologies: [
// 				{
// 					title: 'Tech Stack',
// 					techs: [
// 						'Python (FastAPI / Uvicorn)',
// 						'React.js',
// 						'Web3.py (Blockchain Interaction)',
// 						'Cryptography (AES, ECC, ECDSA)',
// 						'Sepolia Testnet',
// 						'MySQL'
// 					],
// 				}
// 			],
//
// 			// 侧边栏：资源
// 			ResourcesHeading: 'Deliverables',
// 			Resources: [
// 				{
// 					id: 1,
// 					title: 'Source Code',
// 					details: '#',
// 					icon: <FiGithub />
// 				},
// 				{
// 					id: 2,
// 					title: 'Security Design Doc',
// 					details: '#',
// 					icon: <FiLock />
// 				},
// 			],
//
// 			// 主内容：强调“安全性”和“混合架构”
// 			ProjectDetailsHeading: 'Security Architecture & Implementation',
// 			ProjectDetails: [
// 				{
// 					id: 1,
// 					heading: 'Hybrid Architecture & End-to-End Encryption',
// 					details: '为了满足极其严格的数据保密性要求，我设计了一种**混合架构 (Hybrid Architecture)**，由本地客户端 (Local Client) 和云端服务器 (Cloud Server) 组成。**客户端**负责核心密码学操作：在上传前使用 **AES** 对文件进行对称加密，并使用 **ECDSA** 私钥对文件生成数字签名。这确保了服务器端永远无法触碰用户的原始数据或私钥，实现了真正的**零信任 (Zero Trust)** 存储。'
// 				},
// 				{
// 					id: 2,
// 					heading: 'Blockchain Integration for Auditability',
// 					// 修改：使用了您提供的新文案
// 					details: '为了解决云存储中的信任问题，我集成了 **Web3** 技术将关键操作上链。每当发生文件上传、访问请求或权限批准时，系统会自动将元数据（如文件哈希、请求者ID、时间戳）写入 **Sepolia 测试网**。这创建了一个不可篡改的审计日志 (Immutable Audit Log)，实现了对文件生命周期的全链路追踪。'
// 				},
// 				{
// 					id: 3,
// 					heading: 'Secure Key Exchange Mechanism',
// 					details: '我实现了一套基于 **ECC (椭圆曲线加密)** 的安全密钥交换机制。当文件所有者批准访问请求时，系统不会直接发送 AES 密钥，而是使用请求者的 **ECC 公钥** 对 AES 密钥进行加密封装 (Key Wrapping)，并将加密后的密钥记录在区块链上。请求者随后使用本地保管的 **ECC 私钥** 解密获得文件访问权，完美解决了非安全信道下的密钥分发难题。'
// 				},
// 				{
// 					id: 4,
// 					heading: 'Full Stack Implementation (Python/React)',
// 					details: '在实现层面，我使用 **Python FastAPI** 构建了高性能的 RESTful API 来处理用户管理和区块链交互，前端使用 **React** 构建了直观的用户界面。我负责了从技术选型、加密算法实现 (Python Cryptography Library) 到最终系统测试的全过程，确保系统在保障安全性的同时兼顾了用户体验。'
// 				},
// 			],
// 		},
// 	},
//
// ];



// src/data/projectsData.jsx
import { FiGithub, FiExternalLink, FiLock, FiServer, FiUsers, FiActivity } from 'react-icons/fi';

// 引入现有图片占位
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';

export const projectsData = [
	// =========================================================================
	// 项目 1: 民生银行商业汇票系统 (FinTech / High Concurrency)
	// =========================================================================
	{
		id: 1,
		title: 'Enterprise Commercial Bill System',
		category: 'FinTech / Enterprise',
		img: WebImage1,

		ProjectHeader: {
			title: 'Minsheng Commercial Bill System',
			publishDate: 'Mar 2022 - Jun 2024',
			tags: 'FinTech / Backend / Distributed System',
		},
		ProjectImages: [
			{ id: 1, title: 'System Architecture Diagram', img: WebImage1 },
			{ id: 2, title: 'Transaction Flow', img: WebImage2 },
		],
		ProjectInfo: {
			InfoHeading: 'Project Context',
			InfoData: [
				{ id: 1, title: 'Company', details: 'Minsheng Fintech (China Minsheng Bank)' },
				{ id: 2, title: 'Role', details: 'Backend Lead & Core Developer' },
				{ id: 3, title: 'Type', details: 'Enterprise Core Banking System' },
				{ id: 4, title: 'Team Scale', details: 'Led a sub-team of 4 developers' },
			],

			Technologies: [
				{
					title: 'Tech Stack',
					techs: [
						'Java (Spring Framework)',
						'Gauss DB / MySQL',
						'IBM MQ',
						'Redis',
						'Struts (Legacy)',
						'Private Cloud'
					],
				}
			],

			ResourcesHeading: 'Resources',
			Resources: [
				{
					id: 1,
					title: 'Internal System (NDA Protected)',
					details: '#',
					icon: <FiLock className="text-red-500" />
				},
			],

			ProjectDetailsHeading: 'Project Overview & Key Achievements',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Background & Scale',
					details: 'This system serves as a core financial platform for China Minsheng Bank, handling commercial bill payment guarantees between enterprises. It encompasses complex financial workflows such as bill issuance, endorsement, acceptance, and discounting, along with innovative financial products integrated into various scenarios. As critical infrastructure, it processes **Billions of RMB** in transaction volume monthly, demanding extreme data consistency and stability.'
				},
				{
					id: 2,
					heading: 'My Role & Technical Contributions',
					details: 'As a core backend engineer, I led the development of the **Acceptance** and **Discount** modules. I utilized **IBM MQ** for asynchronous communication to ensure eventual consistency in high-concurrency transactions. To adapt to the complex banking intranet, we deployed on a **Private Cloud** infrastructure. I also significantly improved batch processing efficiency by optimizing **Gauss DB** queries and writing high-performance SQL.'
				},
				{
					id: 3,
					heading: 'Leadership & Problem Solving',
					details: 'Beyond coding, I served as a **Squad Lead**, guiding 4 members through iterative delivery. My responsibilities included requirements analysis, risk control, and conducting **Code Reviews**. During my tenure, I successfully troubleshot and resolved multiple critical **Production Issues**, ensuring high system availability.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 2: 华为微波设备部署平台 (IoT / Telecom / Team Management)
	// =========================================================================
	{
		id: 2,
		title: 'Microwave Deployment Platform',
		category: 'Telecom / IoT Tooling',
		img: MobileImage1,

		ProjectHeader: {
			title: 'Huawei Microwave Deployment Tool',
			publishDate: 'Jul 2019 - Apr 2021',
			tags: 'IoT / Microservices / Team Mgmt',
		},
		ProjectImages: [
			{ id: 1, title: 'Mobile App Interface', img: MobileImage1 },
			{ id: 2, title: 'Microservice Architecture', img: WebImage2 },
		],
		ProjectInfo: {
			InfoHeading: 'Project Context',
			InfoData: [
				{ id: 1, title: 'Company', details: 'Huawei Technologies' },
				{ id: 2, title: 'Role', details: 'Tool Owner & Team Lead' },
				{ id: 3, title: 'Team Size', details: '13 Members (9 Devs + 4 Testers)' },
				{ id: 4, title: 'Domain', details: 'Network O&M Automation' },
			],

			Technologies: [
				{
					title: 'Tech Stack',
					techs: [
						'Spring Boot (Microservices)',
						'Android (Frontend)',
						'MySQL & Redis',
						'Jenkins (CI/CD)',
						'RESTful API'
					],
				}
			],

			ResourcesHeading: 'Resources',
			Resources: [
				{
					id: 1,
					title: 'Internal Tool (Private)',
					details: '#',
					icon: <FiLock className="text-yellow-500" />
				},
			],

			ProjectDetailsHeading: 'Project Overview & Achievements',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Product Overview',
					details: 'This is a comprehensive platform for the on-site deployment and O&M of telecommunication base stations. It consists of an Android frontend app and a Spring Boot microservices backend. It allows field engineers to automate configuration script delivery, collect performance metrics, and diagnose faults via wireless connection, significantly reducing labor costs for base station delivery.'
				},
				{
					id: 2,
					heading: 'Role: Tool Owner & Project Management',
					details: 'As the **Tool Owner**, I managed the full lifecycle from requirement communication to delivery. I led a cross-functional team of **13 members** (9 Developers + 4 Testers) using Agile methodologies. By optimizing communication workflows between testing and development teams, I ensured the smooth release of every version.'
				},
				{
					id: 3,
					heading: 'Architecture Modernization',
					details: 'Technically, I spearheaded the backend migration from a monolithic architecture to **Microservices**. I established a **Jenkins CI/CD** pipeline for automated build and inspection. I also led the refactoring of legacy code and implementation of unit tests, significantly improving code quality and ensuring the product met strict **Compliance Standards**. Additionally, I contributed to the development of specific **Android** client features.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 3: CACHI Health Platform (Digital Health / AI / Local NGO)
	// =========================================================================
	{
		id: 3,
		title: 'CACHI Health Platform',
		category: 'Digital Health / AI',
		img: WebImage1,

		ProjectHeader: {
			title: 'CACHI - Culturally Appropriate Health Platform',
			publishDate: 'Aug 2024 - Present',
			tags: 'React / Spring Boot / LLM / AWS',
		},
		ProjectImages: [
			{ id: 1, title: 'Platform Home Page', img: WebImage1 },
			{ id: 2, title: 'AI Chatbot Interface', img: WebImage2 },
		],
		ProjectInfo: {
			InfoHeading: 'Project Context',
			InfoData: [
				{ id: 1, title: 'Client', details: 'Sisters Cancer Support Group' },
				{ id: 2, title: 'Partner', details: 'Multicultural Illawarra' },
				{ id: 3, title: 'Role', details: 'Team Lead & Full Stack Dev' },
				{ id: 4, title: 'Type', details: 'UOW Capstone Project' },
			],

			Technologies: [
				{
					title: 'Tech Stack',
					techs: [
						'React (Vite)',
						'Spring Boot',
						'LLM Integration (AI)',
						'AWS (Deployment)',
						'PostgreSQL'
					],
				}
			],

			ResourcesHeading: 'Code & Demo',
			Resources: [
				{
					id: 1,
					title: 'Source Code',
					details: 'https://github.com/PinocchioHao/cachi-health-platform',
					icon: <FiGithub />
				},
			],

			ProjectDetailsHeading: 'Project Overview & Key Contributions',
			ProjectDetails: [
				{
					id: 1,
					heading: 'The Challenge: Health Literacy Gap',
					details: 'This project aims to address the health information gap for culturally and linguistically diverse communities in Illawarra (specifically Myanmar and Arabic backgrounds). Due to low English literacy, traditional text-based resources were ineffective. The client needed a visual, searchable, and culturally appropriate digital health platform.'
				},
				{
					id: 2,
					heading: 'Solution: AI-Powered Accessibility',
					details: 'As **Team Leader**, I led the development of a full-stack platform using **Spring Boot** and **React**. To address accessibility barriers, we innovatively integrated an **LLM-powered AI Chatbot**, which drastically lowered the barrier for users to access complex health information.'
				},
				{
					id: 3,
					heading: 'Leadership & Stakeholder Management',
					details: 'Beyond core development, I managed regular communication and showcases with the **Client (NGO)** and Supervisor. I translated ambiguous requirements into concrete technical specifications, coordinated full-stack development progress, and successfully deployed the MVP on **AWS**, receiving high acclaim from the client.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 4: Service Universe (Microservices / Process Mining)
	// =========================================================================
	{
		id: 4,
		title: 'Service Universe Platform',
		category: 'Microservices / Cloud',
		img: WebImage2,

		ProjectHeader: {
			title: 'Service Universe - Municipal Services',
			publishDate: 'Spring 2025',
			tags: 'Spring Cloud / AWS / Process Mining',
		},
		ProjectImages: [
			{ id: 1, title: 'Microservices Architecture', img: WebImage1 },
			{ id: 2, title: 'Process Mining Analysis (Disco)', img: WebImage2 },
		],
		ProjectInfo: {
			InfoHeading: 'Project Context',
			InfoData: [
				{ id: 1, title: 'Subject', details: 'Service-Oriented Software Engineering' },
				{ id: 2, title: 'Role', details: 'Team Lead & System Architect' },
				{ id: 3, title: 'Team Size', details: '6 Members' },
				{ id: 4, title: 'Focus', details: 'Microservices & Process Analytics' },
			],

			Technologies: [
				{
					title: 'Tech Stack',
					techs: [
						'Spring Cloud (Eureka/Gateway)',
						'Spring Boot',
						'Docker & Docker Compose',
						'AWS (EC2 Linux)',
						'React',
						'Process Mining (Disco/Python)'
					],
				}
			],

			ResourcesHeading: 'Deliverables',
			Resources: [
				{
					id: 1,
					title: 'Architecture Design',
					details: '#',
					icon: <FiServer />
				},
				{
					id: 2,
					title: 'Process Mining Report',
					details: '#',
					icon: <FiActivity />
				},
			],

			ProjectDetailsHeading: 'Architecture & Implementation Details',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Project Scope & Leadership',
					details: 'The project aims to build a municipal service platform named "Service Universe". As **Team Leader**, I was responsible for technical selection and architectural design. I led 5 members through the entire process, from Enterprise Architecture design (ArchiMate) and Business Process Modeling (BPMN) to the final Microservices implementation.'
				},
				{
					id: 2,
					heading: 'Microservices Architecture (Spring Cloud)',
					details: 'I designed and implemented a microservices architecture based on the **Spring Cloud Ecosystem**. The system comprises three core business services (Parking, Energy, Booking), each with independent databases (Database per Service pattern). I utilized **Netflix Eureka** for service discovery and **Spring Cloud Gateway** as the unified API entry point for dynamic routing.'
				},
				{
					id: 3,
					heading: 'Containerization & Cloud Deployment',
					details: 'To achieve "Build Once, Run Anywhere", I containerized all microservices using Dockerfiles and orchestrated the cluster using **Docker Compose**. Finally, I deployed the entire environment on an **AWS Linux 2023** instance, configuring Docker networks to ensure secure inter-service communication.'
				},
				{
					id: 4,
					heading: 'Process Mining & Analytics',
					details: 'A key highlight of this project. To analyze process efficiency, I developed a custom log component using **AOP (Aspect-Oriented Programming)** to collect structured JSON Event Logs. I then wrote **Python scripts** to clean the data and imported it into **Disco** for process mining, successfully visualizing actual workflows and identifying bottlenecks.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 5: File Chain (Cybersecurity / Web3)
	// =========================================================================
	{
		id: 5,
		title: 'File Chain Secure Platform',
		category: 'Cybersecurity / Web3',
		img: WebImage1,

		ProjectHeader: {
			title: 'File Chain - Encrypted Cloud Storage',
			publishDate: 'Oct 2025',
			tags: 'Python / React / Blockchain / Cryptography',
		},
		ProjectImages: [
			{ id: 1, title: 'Secure File Sharing Flow', img: WebImage1 },
			{ id: 2, title: 'Blockchain Transaction Log (Sepolia)', img: WebImage2 },
		],
		ProjectInfo: {
			InfoHeading: 'Project Context',
			InfoData: [
				{ id: 1, title: 'Subject', details: 'CSIT953 - Network Security' },
				{ id: 2, title: 'Role', details: 'Security Architect & Full Stack Dev' },
				{ id: 3, title: 'Team Size', details: '5 Members' },
				{ id: 4, title: 'Focus', details: 'End-to-End Encryption & Auditability' },
			],

			Technologies: [
				{
					title: 'Tech Stack',
					techs: [
						'Python (FastAPI / Uvicorn)',
						'React.js',
						'Web3.py (Blockchain Interaction)',
						'Cryptography (AES, ECC, ECDSA)',
						'Sepolia Testnet',
						'MySQL'
					],
				}
			],

			ResourcesHeading: 'Deliverables',
			Resources: [
				{
					id: 1,
					title: 'Source Code',
					details: '#',
					icon: <FiGithub />
				},
				{
					id: 2,
					title: 'Security Design Doc',
					details: '#',
					icon: <FiLock />
				},
			],

			ProjectDetailsHeading: 'Security Architecture & Implementation',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Hybrid Architecture & End-to-End Encryption',
					details: 'To meet strict data confidentiality requirements, I designed a **Hybrid Architecture**. The **Local Client** handles core cryptographic operations: symmetric encryption (AES) and digital signatures (ECDSA) before upload. This ensures the cloud server never accesses raw user data or private keys, achieving a true **Zero Trust** storage model.'
				},
				{
					id: 2,
					heading: 'Blockchain Integration for Auditability',
					details: 'To address trust concerns in cloud storage, I integrated **Web3** technology to record critical operations on-chain. Whenever file uploads, access requests, or approvals occur, the system automatically writes metadata (e.g., file hash, requester ID, timestamps) to the **Sepolia Testnet**. This creates an **Immutable Audit Log**, ensuring full-lifecycle traceability of all files.'
				},
				{
					id: 3,
					heading: 'Secure Key Exchange Mechanism',
					details: 'I implemented a secure key exchange mechanism based on **ECC**. When a file owner approves a request, the system encrypts the AES key using the requester\'s **ECC Public Key** (Key Wrapping) and records it on the blockchain. The requester then uses their local **ECC Private Key** to decrypt it, solving the key distribution problem over insecure channels.'
				},
				{
					id: 4,
					heading: 'Full Stack Implementation (Python/React)',
					details: 'I built a high-performance RESTful API using **Python FastAPI** and an intuitive frontend with **React**. I managed the entire process from technology selection and cryptographic algorithm implementation (Python Cryptography Library) to system testing, balancing robust security with user experience.'
				},
			],
		},
	},
];