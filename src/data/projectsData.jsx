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
			{ id: 3, title: 'Transaction 123123', img: WebImage1 },
			{ id: 4, title: 'Transaction 22', img: WebImage2 },
			{ id: 5, title: 'Transaction F2222222low', img: MobileImage1 },
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