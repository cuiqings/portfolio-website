/**
 * Skills Data
 * Contains all skill information with bilingual support
 * Requirements: 3.1, 3.2, 3.3, 19.10
 */

export type SkillCategory =
  | 'frontend-framework'
  | 'visualization'
  | 'mobile'
  | 'toolchain'
  | 'backend'
  | 'other';

export interface Skill {
  id: string;
  name: string;
  nameTranslations: {
    zh: string;
    en: string;
  };
  category: SkillCategory;
  proficiency: number; // 1-5 熟练度等级
  yearsOfExperience: number;
  description: string;
  descriptionTranslations: {
    zh: string;
    en: string;
  };
}

export interface SkillCategoryInfo {
  id: SkillCategory;
  name: string;
  nameTranslations: {
    zh: string;
    en: string;
  };
}

// Skill categories with translations
export const skillCategories: SkillCategoryInfo[] = [
  {
    id: 'frontend-framework',
    name: 'Frontend Framework',
    nameTranslations: {
      zh: '前端框架',
      en: 'Frontend Framework',
    },
  },
  {
    id: 'visualization',
    name: 'Visualization',
    nameTranslations: {
      zh: '数据可视化',
      en: 'Visualization',
    },
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    nameTranslations: {
      zh: '移动开发',
      en: 'Mobile Development',
    },
  },
  {
    id: 'toolchain',
    name: 'Toolchain',
    nameTranslations: {
      zh: '工具链',
      en: 'Toolchain',
    },
  },
  {
    id: 'backend',
    name: 'Backend',
    nameTranslations: {
      zh: '后端技术',
      en: 'Backend',
    },
  },
  {
    id: 'other',
    name: 'Other',
    nameTranslations: {
      zh: '其他',
      en: 'Other',
    },
  },
];

// Skills data with at least 10 skills
export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    nameTranslations: {
      zh: 'React',
      en: 'React',
    },
    category: 'frontend-framework',
    proficiency: 5,
    yearsOfExperience: 5,
    description: 'Expert in React 18, Hooks, Context API, and performance optimization',
    descriptionTranslations: {
      zh: '精通 React 18、Hooks、Context API 和性能优化',
      en: 'Expert in React 18, Hooks, Context API, and performance optimization',
    },
  },
  {
    id: 'vue',
    name: 'Vue.js',
    nameTranslations: {
      zh: 'Vue.js',
      en: 'Vue.js',
    },
    category: 'frontend-framework',
    proficiency: 5,
    yearsOfExperience: 4,
    description: 'Proficient in Vue 2/3, Composition API, Vuex, and Pinia',
    descriptionTranslations: {
      zh: '精通 Vue 2/3、Composition API、Vuex 和 Pinia',
      en: 'Proficient in Vue 2/3, Composition API, Vuex, and Pinia',
    },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    nameTranslations: {
      zh: 'TypeScript',
      en: 'TypeScript',
    },
    category: 'frontend-framework',
    proficiency: 5,
    yearsOfExperience: 4,
    description: 'Strong typing, generics, advanced types, and type-safe development',
    descriptionTranslations: {
      zh: '强类型、泛型、高级类型和类型安全开发',
      en: 'Strong typing, generics, advanced types, and type-safe development',
    },
  },
  {
    id: 'threejs',
    name: 'Three.js',
    nameTranslations: {
      zh: 'Three.js',
      en: 'Three.js',
    },
    category: 'visualization',
    proficiency: 4,
    yearsOfExperience: 3,
    description: '3D graphics, WebGL, shaders, and interactive 3D scenes',
    descriptionTranslations: {
      zh: '3D 图形、WebGL、着色器和交互式 3D 场景',
      en: '3D graphics, WebGL, shaders, and interactive 3D scenes',
    },
  },
  {
    id: 'echarts',
    name: 'ECharts',
    nameTranslations: {
      zh: 'ECharts',
      en: 'ECharts',
    },
    category: 'visualization',
    proficiency: 5,
    yearsOfExperience: 4,
    description: 'Data visualization, charts, dashboards, and real-time data display',
    descriptionTranslations: {
      zh: '数据可视化、图表、仪表板和实时数据展示',
      en: 'Data visualization, charts, dashboards, and real-time data display',
    },
  },
  {
    id: 'd3',
    name: 'D3.js',
    nameTranslations: {
      zh: 'D3.js',
      en: 'D3.js',
    },
    category: 'visualization',
    proficiency: 4,
    yearsOfExperience: 2,
    description: 'Custom data visualizations, SVG manipulation, and interactive charts',
    descriptionTranslations: {
      zh: '自定义数据可视化、SVG 操作和交互式图表',
      en: 'Custom data visualizations, SVG manipulation, and interactive charts',
    },
  },
  {
    id: 'react-native',
    name: 'React Native',
    nameTranslations: {
      zh: 'React Native',
      en: 'React Native',
    },
    category: 'mobile',
    proficiency: 4,
    yearsOfExperience: 3,
    description: 'Cross-platform mobile development, native modules, and performance optimization',
    descriptionTranslations: {
      zh: '跨平台移动开发、原生模块和性能优化',
      en: 'Cross-platform mobile development, native modules, and performance optimization',
    },
  },
  {
    id: 'uniapp',
    name: 'uni-app',
    nameTranslations: {
      zh: 'uni-app',
      en: 'uni-app',
    },
    category: 'mobile',
    proficiency: 4,
    yearsOfExperience: 3,
    description: 'Multi-platform development framework, WeChat mini-program, H5, and native app development',
    descriptionTranslations: {
      zh: '多端开发框架，支持微信小程序、H5 和原生 App 开发',
      en: 'Multi-platform development framework, WeChat mini-program, H5, and native app development',
    },
  },
  {
    id: 'webpack',
    name: 'Webpack',
    nameTranslations: {
      zh: 'Webpack',
      en: 'Webpack',
    },
    category: 'toolchain',
    proficiency: 4,
    yearsOfExperience: 4,
    description: 'Module bundling, code splitting, optimization, and custom loaders/plugins',
    descriptionTranslations: {
      zh: '模块打包、代码分割、优化和自定义加载器/插件',
      en: 'Module bundling, code splitting, optimization, and custom loaders/plugins',
    },
  },
  {
    id: 'vite',
    name: 'Vite',
    nameTranslations: {
      zh: 'Vite',
      en: 'Vite',
    },
    category: 'toolchain',
    proficiency: 5,
    yearsOfExperience: 2,
    description: 'Fast build tool, HMR, optimized production builds, and plugin development',
    descriptionTranslations: {
      zh: '快速构建工具、HMR、优化的生产构建和插件开发',
      en: 'Fast build tool, HMR, optimized production builds, and plugin development',
    },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    nameTranslations: {
      zh: 'Node.js',
      en: 'Node.js',
    },
    category: 'backend',
    proficiency: 4,
    yearsOfExperience: 4,
    description: 'Server-side JavaScript, Express, REST APIs, and microservices',
    descriptionTranslations: {
      zh: '服务端 JavaScript、Express、REST API 和微服务',
      en: 'Server-side JavaScript, Express, REST APIs, and microservices',
    },
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    nameTranslations: {
      zh: 'GraphQL',
      en: 'GraphQL',
    },
    category: 'backend',
    proficiency: 4,
    yearsOfExperience: 2,
    description: 'API design, schema definition, resolvers, and Apollo Server/Client',
    descriptionTranslations: {
      zh: 'API 设计、模式定义、解析器和 Apollo Server/Client',
      en: 'API design, schema definition, resolvers, and Apollo Server/Client',
    },
  },
  {
    id: 'git',
    name: 'Git',
    nameTranslations: {
      zh: 'Git',
      en: 'Git',
    },
    category: 'toolchain',
    proficiency: 5,
    yearsOfExperience: 5,
    description: 'Version control, branching strategies, code review, and CI/CD integration',
    descriptionTranslations: {
      zh: '版本控制、分支策略、代码审查和 CI/CD 集成',
      en: 'Version control, branching strategies, code review, and CI/CD integration',
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    nameTranslations: {
      zh: 'Docker',
      en: 'Docker',
    },
    category: 'toolchain',
    proficiency: 3,
    yearsOfExperience: 2,
    description: 'Containerization, Docker Compose, image optimization, and deployment',
    descriptionTranslations: {
      zh: '容器化、Docker Compose、镜像优化和部署',
      en: 'Containerization, Docker Compose, image optimization, and deployment',
    },
  },
];

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): SkillCategory[] => {
  return Array.from(new Set(skills.map((skill) => skill.category)));
};

/**
 * Get category info by id
 */
export const getCategoryInfo = (
  categoryId: SkillCategory
): SkillCategoryInfo | undefined => {
  return skillCategories.find((cat) => cat.id === categoryId);
};

/**
 * Get skills grouped by category
 */
export const getSkillsGroupedByCategory = (): Record<
  SkillCategory,
  Skill[]
> => {
  const grouped: Partial<Record<SkillCategory, Skill[]>> = {};

  skills.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category]!.push(skill);
  });

  return grouped as Record<SkillCategory, Skill[]>;
};
