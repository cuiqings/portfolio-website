/**
 * Personal Information Data
 * 个人信息数据
 */

export interface PersonalInfo {
  name: string;
  nameTranslations: {
    zh: string;
    en: string;
  };
  title: string;
  titleTranslations: {
    zh: string;
    en: string;
  };
  bio: string;
  bioTranslations: {
    zh: string;
    en: string;
  };
  email: string;
  phone: string;
  location: string;
  locationTranslations: {
    zh: string;
    en: string;
  };
  avatar?: string;
  resumeUrl?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  companyTranslations: {
    zh: string;
    en: string;
  };
  position: string;
  positionTranslations: {
    zh: string;
    en: string;
  };
  startDate: string;
  endDate: string | 'present';
  description: string[];
  descriptionTranslations: {
    zh: string[];
    en: string[];
  };
  technologies?: string[];
}

export interface Education {
  id: string;
  school: string;
  schoolTranslations: {
    zh: string;
    en: string;
  };
  degree: string;
  degreeTranslations: {
    zh: string;
    en: string;
  };
  major: string;
  majorTranslations: {
    zh: string;
    en: string;
  };
  startDate: string;
  endDate: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Cui Qingshuo',
  nameTranslations: {
    zh: '崔庆硕',
    en: 'Cui Qingshuo',
  },
  title: 'Senior Frontend Developer',
  titleTranslations: {
    zh: '高级前端开发工程师',
    en: 'Senior Frontend Developer',
  },
  bio: '6+ years of frontend development experience with expertise in React, Vue, and cross-platform development. Passionate about building high-performance, user-centric applications.',
  bioTranslations: {
    zh: '拥有6年前端开发经验，精通 React、Vue 及跨平台开发技术。热衷于构建高性能、以用户为中心的应用程序。',
    en: '6+ years of frontend development experience with expertise in React, Vue, and cross-platform development. Passionate about building high-performance, user-centric applications.',
  },
  email: 'qingshuocui@gmail.com',
  phone: '15512775030',
  location: 'Beijing, China',
  locationTranslations: {
    zh: '中国 北京',
    en: 'Beijing, China',
  },
};

// Contact information for modal
export const contactInfo = {
  phone: '15512775030',
  telegram: '@ccrr6688',
  emails: ['qingshuocui@gmail.com', 'A3168119375@163.com'],
};

export const workExperiences: WorkExperience[] = [
  {
    id: 'work-1',
    company: 'Zhongchan International Co., Ltd.',
    companyTranslations: {
      zh: '中产国际有限公司',
      en: 'Zhongchan International Co., Ltd.',
    },
    position: 'Senior Frontend Developer',
    positionTranslations: {
      zh: '高级前端开发工程师',
      en: 'Senior Frontend Developer',
    },
    startDate: '2024-10',
    endDate: 'present',
    description: [
      'Led frontend architecture design for core products using Vue.js',
      'Managed a team of 10+ frontend developers',
      'Drove frontend engineering initiatives with Vite and TypeScript',
      'Optimized page load time by 30%, significantly improving user experience',
    ],
    descriptionTranslations: {
      zh: [
        '主导公司核心产品的前端架构设计与开发，使用 Vue.js 构建高性能应用',
        '领导 10 人以上的前端团队，负责技术选型、代码审查和性能优化',
        '推动前端工程化建设，引入 Vite、TypeScript 等现代工具',
        '优化前端性能，将页面加载时间减少 30%，提升用户体验',
      ],
      en: [
        'Led frontend architecture design for core products using Vue.js',
        'Managed a team of 10+ frontend developers',
        'Drove frontend engineering initiatives with Vite and TypeScript',
        'Optimized page load time by 30%, significantly improving user experience',
      ],
    },
    technologies: ['Vue.js', 'TypeScript', 'Vite', 'Performance Optimization'],
  },
  {
    id: 'work-2',
    company: 'Mulin Innovation Technology Co., Ltd.',
    companyTranslations: {
      zh: '慕林创新科技有限公司',
      en: 'Mulin Innovation Technology Co., Ltd.',
    },
    position: 'Senior Frontend Developer',
    positionTranslations: {
      zh: '高级前端开发工程师',
      en: 'Senior Frontend Developer',
    },
    startDate: '2020-05',
    endDate: '2024-09',
    description: [
      'Led frontend teams for supply chain, local services, and business operations',
      'Ensured high-quality code delivery with minimal bugs and no delays',
      'Improved product capabilities through iterative UX enhancements',
      'Contributed to cost reduction and efficiency improvement initiatives',
    ],
    descriptionTranslations: {
      zh: [
        '负责供应链、本地生活、百福得业务前端团队管理和开发',
        '保证代码和业务交付的质量，做到不延期、BUG 少',
        '在业务迭代中加入技改需求，逐步优化用户体验和交互',
        '参与一线开发为团队开发提效，在降本增效方面有一定沉淀',
      ],
      en: [
        'Led frontend teams for supply chain, local services, and business operations',
        'Ensured high-quality code delivery with minimal bugs and no delays',
        'Improved product capabilities through iterative UX enhancements',
        'Contributed to cost reduction and efficiency improvement initiatives',
      ],
    },
    technologies: ['React', 'Vue', 'Team Leadership', 'Process Optimization'],
  },
  {
    id: 'work-3',
    company: 'Beijing Saiming Technology Co., Ltd.',
    companyTranslations: {
      zh: '北京赛鸣科技有限公司',
      en: 'Beijing Saiming Technology Co., Ltd.',
    },
    position: 'Frontend Developer',
    positionTranslations: {
      zh: '前端开发工程师',
      en: 'Frontend Developer',
    },
    startDate: '2018-08',
    endDate: '2020-04',
    description: [
      'Built frontend framework and developed reusable components',
      'Developed and maintained PC, mini-program, and H5 pages',
      'Collaborated closely with backend engineers for efficient data presentation',
      'Participated in campaign and special page development',
    ],
    descriptionTranslations: {
      zh: [
        '负责前端框架搭建、组件开发和模块化工作',
        '参与公司 PC 端主站、小程序和 H5 页面的开发和维护',
        '与后端开发工程师密切合作，高效完成产品模型的展现和交互设计',
        '参与公司部分活动和专题页面的开发工作',
      ],
      en: [
        'Built frontend framework and developed reusable components',
        'Developed and maintained PC, mini-program, and H5 pages',
        'Collaborated closely with backend engineers for efficient data presentation',
        'Participated in campaign and special page development',
      ],
    },
    technologies: ['React', 'Vue', 'Mini Program', 'H5'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    school: 'Baoding University of Technology',
    schoolTranslations: {
      zh: '保定理工学院',
      en: 'Baoding University of Technology',
    },
    degree: "Bachelor's Degree",
    degreeTranslations: {
      zh: '本科',
      en: "Bachelor's Degree",
    },
    major: 'Computer Science and Technology',
    majorTranslations: {
      zh: '计算机科学与技术（应用技术）',
      en: 'Computer Science and Technology (Applied Technology)',
    },
    startDate: '2014-07',
    endDate: '2018-07',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:qingshuocui@gmail.com',
    icon: 'email',
  },
];
