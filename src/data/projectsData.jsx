// src/data/projectsData.jsx
import { FiGithub, FiExternalLink, FiLock, FiServer, FiUsers, FiActivity } from 'react-icons/fi';

// 1. 引入原有的通用占位图 (用于华为和民生银行，因为是保密项目)
import hw1 from '../images/project/hw1.png'; // Home
import ms1 from '../images/project/ms1.jpg'; // Home

// 2. 引入 CACHI Health Platform 图片
import Cachi1 from '../images/project/cachi1.png'; // Home
import Cachi2 from '../images/project/cachi2.png'; // Page 2
import Cachi3 from '../images/project/cachi3.png'; // Page 3
import Cachi4 from '../images/project/cachi4.png'; // LLM Chatbot

// 3. 引入 Service Universe 图片
import Su1 from '../images/project/su1.png'; // Home
import Su2 from '../images/project/su2.png'; // Parking
import Su3 from '../images/project/su3.png'; // Energy
import Su4 from '../images/project/su4.png'; // Driving Test 1
import Su5 from '../images/project/su5.png'; // Driving Test 2
import Su6 from '../images/project/su6.png'; // Disco Analysis (New)

// 4. 引入 File Chain 图片
import Fc1 from '../images/project/fc1.png'; // Register
import Fc2 from '../images/project/fc2.png'; // Login
import Fc3 from '../images/project/fc3.png'; // Home
import Fc4 from '../images/project/fc4.png'; // File Mgmt
import Fc5 from '../images/project/fc5.png'; // Upload Success
import Fc6 from '../images/project/fc6.png'; // Permission
import Fc7 from '../images/project/fc7.png'; // Blockchain Log
import Fc8 from '../images/project/fc8.png'; // Client Tool
import Fc9 from '../images/project/fc9.png'; // Sepolia Record (New)

export const projectsData = [
	// =========================================================================
	// 项目 1: 民生银行商业汇票系统 (保留通用图)
	// =========================================================================
	{
		id: 1,
		title: 'Minsheng Commercial Bill System',
		category: 'Banking System / FinTech',
		img: ms1, // 使用 ms1

		ProjectHeader: {
			title: 'Commercial Bill System for China Minsheng Bank',
			publishDate: 'Mar 2022 - Jun 2024',
			tags: 'FinTech / Backend / Distributed System',
		},
		ProjectImages: [
			{ id: 1, title: 'Minsheng Bank Commercial Bill System', img: ms1 },
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
					details: '#', // 设置为 null 表示无链接
					icon: <FiLock className="text-red-500" />
				},
			],

			ProjectDetailsHeading: 'Project Overview & Key Achievements',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Background & Scale',
					details: 'This system serves as a core financial platform for China Minsheng Bank, handling commercial bill payment guarantees between enterprises. It encompasses complex financial workflows such as bill issuance, endorsement, acceptance, and discounting. As critical infrastructure, it processes **Billions of RMB** in transaction volume monthly, demanding extreme data consistency and stability.'
				},
				{
					id: 2,
					heading: 'My Role & Technical Contributions',
					details: 'As a core backend engineer, I led the development of the **Acceptance** and **Discount** modules. I utilized **IBM MQ** for asynchronous communication to ensure eventual consistency in high-concurrency transactions. To adapt to the complex banking intranet, we deployed on a **Private Cloud** infrastructure. I also significantly improved batch processing efficiency by optimizing **Gauss DB** queries.'
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
	// 项目 2: 华为微波设备部署平台 (保留通用图)
	// =========================================================================
	{
		id: 2,
		title: 'Huawei Microwave Deployment Platform',
		category: 'Telecom / IoT',
		img: hw1, // 使用 hw1

		ProjectHeader: {
			title: 'Huawei Microwave Deployment Platform',
			publishDate: 'Jul 2019 - Apr 2021',
			tags: 'IoT / Microservices / Team Mgmt',
		},
		ProjectImages: [
			{ id: 1, title: 'Huawei Microwave Deployment Tool', img: hw1 },
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
					title: 'Internal System (NDA Protected)',
					details: '#', // 设置为 null 表示无链接
					icon: <FiLock className="text-yellow-500" />
				},
			],

			ProjectDetailsHeading: 'Project Overview & Achievements',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Product Overview',
					details: 'This is a comprehensive platform for the on-site deployment and O&M of telecommunication base stations. It consists of an Android frontend app and a Spring Boot microservices backend. It allows field engineers to automate configuration script delivery, collect performance metrics, and diagnose faults via wireless connection.'
				},
				{
					id: 2,
					heading: 'Role: Tool Owner & Project Management',
					details: 'As the **Tool Owner**, I managed the full lifecycle from requirement communication to delivery. I led a cross-functional team of **13 members** (9 Developers + 4 Testers) using Agile methodologies. By optimizing communication workflows between testing and development teams, I ensured the smooth release of every version.'
				},
				{
					id: 3,
					heading: 'Architecture Modernization',
					details: 'Technically, I spearheaded the backend migration from a monolithic architecture to **Microservices**. I established a **Jenkins CI/CD** pipeline for automated build and inspection. I also led the refactoring of legacy code and implementation of unit tests, significantly improving code quality and ensuring the product met strict **Compliance Standards**.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 3: CACHI Health Platform (更新真实图片)
	// =========================================================================
	{
		id: 3,
		title: 'CACHI Health Platform',
		category: 'Digital Health / LLM',
		img: Cachi1,

		ProjectHeader: {
			title: 'CACHI - Culturally Appropriate Health Platform',
			publishDate: 'Jul 2025 - Present',
			tags: 'React / Spring Boot / LLM / AWS',
		},
		ProjectImages: [
			{ id: 1, title: 'Platform Page 1', img: Cachi1 },
			{ id: 2, title: 'Platform Page 2', img: Cachi2 },
			{ id: 3, title: 'Platform Page 3', img: Cachi3 },
			{ id: 4, title: 'AI Chatbot Assistant', img: Cachi4 },
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

			ResourcesHeading: 'Deliverables',
			Resources: [
				{
					id: 1,
					title: 'Frontend Code',
					details: 'https://github.com/PinocchioHao/cachi-health-platform',
					icon: <FiGithub />
				},
				{
					id: 2,
					title: 'Backend Code',
					details: 'https://github.com/PinocchioHao/cachi-backend',
					icon: <FiGithub />
				},
			],

			ProjectDetailsHeading: 'Project Overview & Key Contributions',
			ProjectDetails: [
				{
					id: 1,
					heading: 'The Challenge: Health Literacy Gap',
					details: 'This project aims to address the health information gap for culturally and linguistically diverse communities in Illawarra. Due to low English literacy, traditional text-based resources were ineffective. The client needed a visual, searchable, and culturally appropriate digital health platform.'
				},
				{
					id: 2,
					heading: 'Solution: AI-Powered Accessibility',
					details: 'As **Team Leader**, I led the development of a full-stack platform using **Spring Boot** and **React**. To address accessibility barriers, we innovatively integrated an **LLM-powered AI Chatbot**, which drastically lowered the barrier for users to access complex health information.'
				},
				{
					id: 3,
					heading: 'Leadership & Stakeholder Management',
					details: 'Beyond core development, I managed regular communication and showcases with the **Client (NGO)** and Supervisor. I coordinated full-stack development progress and successfully deployed the MVP on **AWS**, receiving high acclaim from the client.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 4: Service Universe (更新真实图片)
	// =========================================================================
	{
		id: 4,
		title: 'Service Universe Platform',
		category: 'Microservices / Cloud',
		img: Su1,

		ProjectHeader: {
			title: 'Service Universe - Municipal Services',
			publishDate: 'Spring 2025',
			tags: 'Spring Cloud / AWS / Process Mining',
		},
		ProjectImages: [
			{ id: 1, title: 'Service Universe Home', img: Su1 },
			{ id: 2, title: 'Smart Parking Service', img: Su2 },
			{ id: 3, title: 'Energy Reporting Service', img: Su3 },
			{ id: 4, title: 'Driving Test Booking - Step 1', img: Su4 },
			{ id: 5, title: 'Driving Test Booking - Step 2', img: Su5 },
			// 新增图片: Disco 流程分析
			{ id: 6, title: 'Process Mining Analysis (Disco)', img: Su6 },
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
					title: 'Frontend Code',
					details: 'https://github.com/MingcanYang/City-Service-Hub',
					icon: <FiGithub />
				},
				{
					id: 2,
					title: 'Backend Code',
					details: 'https://github.com/PinocchioHao/service-universe-parent',
					icon: <FiGithub />
				},
			],

			ProjectDetailsHeading: 'Architecture & Implementation Details',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Project Scope & Leadership',
					details: 'The project aims to build a municipal service platform named "Service Universe". As **Team Leader**, I was responsible for technical selection and architectural design. I led 5 members through the entire process, from Enterprise Architecture design to the final Microservices implementation.'
				},
				{
					id: 2,
					heading: 'Microservices Architecture (Spring Cloud)',
					details: 'I designed and implemented a microservices architecture based on the **Spring Cloud Ecosystem**. The system comprises three core business services (Parking, Energy, Booking), each with independent databases. I utilized **Netflix Eureka** for service discovery and **Spring Cloud Gateway** for dynamic routing.'
				},
				{
					id: 3,
					heading: 'Containerization & Cloud Deployment',
					details: 'To achieve "Build Once, Run Anywhere", I containerized all microservices using Dockerfiles and orchestrated the cluster using **Docker Compose**. Finally, I deployed the entire environment on an **AWS Linux 2023** instance.'
				},
			],
		},
	},

	// =========================================================================
	// 项目 5: File Chain (更新真实图片)
	// =========================================================================
	{
		id: 5,
		title: 'File Chain Secure Platform',
		category: 'Cybersecurity / Web3',
		img: Fc3,

		ProjectHeader: {
			title: 'File Chain - Encrypted Cloud Storage',
			publishDate: 'Spring 2025',
			tags: 'Python / React / Blockchain / Cryptography',
		},
		ProjectImages: [
			{ id: 1, title: 'User Registration', img: Fc1 },
			{ id: 2, title: 'Secure Login', img: Fc2 },
			{ id: 3, title: 'Platform Dashboard', img: Fc3 },
			{ id: 4, title: 'Encrypted File Management', img: Fc4 },
			{ id: 5, title: 'Blockchain Upload Confirmation', img: Fc5 },
			{ id: 6, title: 'Permission Request Management', img: Fc6 },
			{ id: 7, title: 'Immutable Audit Logs', img: Fc7 },
			{ id: 8, title: 'Local Encryption Client', img: Fc8 },
			// 新增图片: Sepolia 记录
			{ id: 9, title: 'Sepolia Blockchain Transaction', img: Fc9 },
		],
		ProjectInfo: {
			InfoHeading: 'Project Context',
			InfoData: [
				{ id: 1, title: 'Subject', details: 'Cyber Security' },
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
					title: 'Frontend Code',
					details: 'https://github.com/PinocchioHao/file-chain-front',
					icon: <FiGithub />
				},
				{
					id: 2,
					title: 'Backend Code',
					details: 'https://github.com/PinocchioHao/file-chain',
					icon: <FiGithub />
				},
			],

			ProjectDetailsHeading: 'Security Architecture & Implementation',
			ProjectDetails: [
				{
					id: 1,
					heading: 'Hybrid Architecture & End-to-End Encryption',
					details: 'To meet strict data confidentiality requirements, I designed a **Hybrid Architecture**. The **Local Client** handles core cryptographic operations: symmetric encryption (AES) and digital signatures (ECDSA) before upload. This ensures the cloud server never accesses raw user data, achieving a true **Zero Trust** storage model.'
				},
				{
					id: 2,
					heading: 'Blockchain Integration for Auditability',
					details: 'To address trust concerns in cloud storage, I integrated **Web3** technology to record critical operations on-chain. Whenever file uploads or access requests occur, the system automatically writes metadata to the **Sepolia Testnet**. This creates an **Immutable Audit Log**, ensuring full-lifecycle traceability.'
				},
				{
					id: 3,
					heading: 'Secure Key Exchange Mechanism',
					details: 'I implemented a secure key exchange mechanism based on **ECC**. When a file owner approves a request, the system encrypts the AES key using the requester\'s **ECC Public Key** (Key Wrapping). The requester then uses their local **ECC Private Key** to decrypt it, solving the key distribution problem over insecure channels.'
				},
			],
		},
	},
];