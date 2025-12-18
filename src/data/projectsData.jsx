// src/data/projectsData.jsx
// 各个项目具体详情
// 1. 引入图片资源 (根据你的实际文件名修改)
// 假设你的目录结构是:
// src/
//  ├── data/
//  │    └── projectsData.jsx
//  └── images/
//       ├── web-project-1.jpg
//       ├── web-project-2.jpg
//       └── mobile-project-1.jpg

import WebProject1 from '../images/web-project-1.jpg';
import WebProject2 from '../images/web-project-2.jpg';
import MobileProject1 from '../images/mobile-project-1.jpg';
import MobileProject2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

// 2. 引入图标组件
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
	FiGlobe,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Google Health Platform',
		category: 'UI/UX Design',
		img: WebProject1, // 直接使用引入的变量，而不是字符串

		// --- ProjectHeader ---
		ProjectHeader: {
			title: 'Google Health Platform',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},

		// --- ProjectImages (图库) ---
		ProjectImages: [
			{
				id: 1,
				title: 'Google Health Management UI',
				img: WebProject1,
			},
			{
				id: 2,
				title: 'Google Health Dashboard',
				img: WebProject2,
			},
			{
				id: 3,
				title: 'Google Health Mobile App',
				img: MobileProject1,
			},
		],

		// --- ProjectInfo ---
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{ id: 1, title: 'Name', details: 'Google Health' },
				{ id: 2, title: 'Services', details: 'UI/UX Design & Frontend' },
				{ id: 3, title: 'Website', details: 'https://health.google.com' },
				{ id: 4, title: 'Phone', details: '555-8888-888' },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: '设计一个直观、易用的健康数据管理平台，提升用户体验，确保数据安全和隐私。',
			Technologies: [
				{ title: 'Tools & Technologies', techs: ['Figma', 'React', 'Tailwind CSS', 'Redux'] }
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				// 直接使用组件 <FiTwitter />
				{ id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/googlehealth'},
				{ id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/googlehealth'},
				{ id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/googlehealth'},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{ id: 1, details: '这是项目的第一段详细描述。描述项目背景、您在团队中的角色和面临的主要挑战。' },
				{ id: 2, details: '这是项目的第二段详细描述。描述您采取的设计/开发解决方案、技术选型和关键决策。' },
				{ id: 3, details: '项目成果和影响力总结。例如：用户满意度提高了X%，获得了Y次点击等。' },
			],
		},
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Web Development',
		img: WebProject2,

		ProjectHeader: {
			title: 'Phoenix Digital Agency',
			publishDate: 'Aug 14, 2021',
			tags: 'Web / Backend',
		},
		ProjectImages: [
			{ id: 1, title: 'Phoenix UI', img: WebProject2 },
			{ id: 2, title: 'Phoenix Mobile', img: MobileProject2 },
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{ id: 1, title: 'Name', details: 'Phoenix Agency' },
				{ id: 2, title: 'Services', details: 'Web Development' },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: '开发高性能的企业级Web应用...',
			Technologies: [{ title: 'Tools', techs: ['Vue', 'Laravel', 'MySQL'] }],
			SocialSharingHeading: 'Share',
			SocialSharing: [
				{ id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/'},
			],
			ProjectDetailsHeading: 'Details',
			ProjectDetails: [
				{ id: 1, details: 'Phoenix 项目的开发细节...' }
			],
		}
	},
	// 你可以继续按照这个格式添加更多项目
];

// 列表页使用的数据映射
// 注意：这里 img 已经是引入的图片对象了，不需要修改
export const projects = projectsData.map(item => ({
	id: item.id,
	title: item.title,
	category: item.category,
	img: item.img
}));

export const projectsCategories = [
	'All Projects',
	'Web Development',
	'UI/UX Design',
	'Branding',
];