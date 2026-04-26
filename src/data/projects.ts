/**
 * Project Data
 * Contains all project information with bilingual support
 * Requirements: 2.1, 2.3, 19.8
 */

export interface ProjectDetails {
  background: string;
  responsibilities: string[];
  challenges: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  name: string;
  nameTranslations: {
    zh: string;
    en: string;
  };
  description: string;
  descriptionTranslations: {
    zh: string;
    en: string;
  };
  technologies: string[];
  startDate: string; // ISO 8601 format
  endDate?: string; // ISO 8601 format, optional for ongoing projects
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  details: ProjectDetails;
  detailsTranslations: {
    zh: ProjectDetails;
    en: ProjectDetails;
  };
}

export const projects: Project[] = [
  {
    id: 'tok-exchange',
    name: 'tok Centralized Exchange',
    nameTranslations: {
      zh: 'tok 中心化交易所',
      en: 'tok Centralized Exchange',
    },
    description: 'A comprehensive cryptocurrency trading platform with multi-wallet integration and real-time trading monitoring',
    descriptionTranslations: {
      zh: '集成多种钱包连接的综合加密货币交易平台，实现实时交易状态监控',
      en: 'A comprehensive cryptocurrency trading platform with multi-wallet integration and real-time trading monitoring',
    },
    technologies: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Ethers.js',
      'WalletConnect',
      'Web3.js',
      'Socket.io',
      'Tailwind CSS',
      'Vite',
    ],
    startDate: '2025-07-01',
    images: ['https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://tok-exchange-demo.example.com',
    githubUrl: 'https://github.com/example/tok-exchange',
    details: {
      background:
        'Developed a centralized cryptocurrency exchange platform to provide users with secure and efficient digital asset trading services',
      responsibilities: [
        'Integrated multiple wallet connection solutions including MetaMask, WalletConnect, and Coinbase Wallet',
        'Implemented real-time trading status monitoring system using WebSocket',
        'Developed on-chain data query tools for transaction history and balance tracking',
        'Built intelligent customer service system with automated response capabilities',
      ],
      challenges: [
        'Handling complex wallet connection states and error recovery mechanisms',
        'Optimizing real-time data synchronization performance for high-frequency trading',
        'Ensuring security of private key management and transaction signing',
        'Implementing cross-chain transaction support',
      ],
      achievements: [
        'Successfully integrated 5+ mainstream wallet providers',
        'Achieved <100ms latency for real-time trading updates',
        'Processed 10,000+ daily active transactions',
        'Reduced customer service response time by 60% with AI chatbot',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '开发中心化加密货币交易所平台，为用户提供安全高效的数字资产交易服务',
        responsibilities: [
          '集成多种钱包连接方案，包括 MetaMask、WalletConnect、Coinbase Wallet 等',
          '使用 WebSocket 实现交易状态实时监控系统',
          '开发链上数据查询工具，支持交易历史和余额追踪',
          '构建智能客服系统，提供自动化响应能力',
        ],
        challenges: [
          '处理复杂的钱包连接状态和错误恢复机制',
          '优化高频交易场景下的实时数据同步性能',
          '确保私钥管理和交易签名的安全性',
          '实现跨链交易支持',
        ],
        achievements: [
          '成功集成 5+ 主流钱包提供商',
          '实现 <100ms 的实时交易更新延迟',
          '日均处理 10,000+ 活跃交易',
          '通过 AI 聊天机器人将客服响应时间缩短 60%',
        ],
      },
      en: {
        background:
          'Developed a centralized cryptocurrency exchange platform to provide users with secure and efficient digital asset trading services',
        responsibilities: [
          'Integrated multiple wallet connection solutions including MetaMask, WalletConnect, and Coinbase Wallet',
          'Implemented real-time trading status monitoring system using WebSocket',
          'Developed on-chain data query tools for transaction history and balance tracking',
          'Built intelligent customer service system with automated response capabilities',
        ],
        challenges: [
          'Handling complex wallet connection states and error recovery mechanisms',
          'Optimizing real-time data synchronization performance for high-frequency trading',
          'Ensuring security of private key management and transaction signing',
          'Implementing cross-chain transaction support',
        ],
        achievements: [
          'Successfully integrated 5+ mainstream wallet providers',
          'Achieved <100ms latency for real-time trading updates',
          'Processed 10,000+ daily active transactions',
          'Reduced customer service response time by 60% with AI chatbot',
        ],
      },
    },
  },
  {
    id: 'smart-customer-service',
    name: 'Smart Cloud Customer Service Platform',
    nameTranslations: {
      zh: '智服通-智能云客服平台',
      en: 'Smart Cloud Customer Service Platform',
    },
    description: 'SaaS intelligent customer service platform built with Vue 3 and TypeScript, integrated with AI LLM, handling 500K+ daily conversations',
    descriptionTranslations: {
      zh: '基于 Vue3 和 TypeScript 构建的 SaaS 智能客服平台，集成 AI 大语言模型，日均处理对话量 50 万+',
      en: 'SaaS intelligent customer service platform built with Vue 3 and TypeScript, integrated with AI LLM, handling 500K+ daily conversations',
    },
    technologies: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Vite',
      'Element Plus',
      'Socket.io',
      'OpenAI API',
      'WebRTC',
    ],
    startDate: '2024-10-01',
    endDate: '2025-07-01',
    images: ['https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://smart-cs-demo.example.com',
    githubUrl: 'https://github.com/example/smart-customer-service',
    details: {
      background:
        'Built a SaaS platform to help enterprises provide intelligent customer service with AI-powered automation',
      responsibilities: [
        'Architected and developed the frontend system using Vue 3 Composition API',
        'Integrated OpenAI GPT models for intelligent conversation capabilities',
        'Implemented real-time messaging system with Socket.io',
        'Developed video call functionality using WebRTC',
        'Built comprehensive admin dashboard for service analytics',
      ],
      challenges: [
        'Managing high-concurrency real-time message delivery',
        'Optimizing AI response latency for better user experience',
        'Implementing reliable WebRTC connection across different network conditions',
        'Handling large-scale conversation history storage and retrieval',
      ],
      achievements: [
        'Successfully handling 500K+ daily conversations',
        'Achieved 95% customer satisfaction rate',
        'Reduced average response time from 5 minutes to 30 seconds',
        'Deployed to 100+ enterprise clients',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '构建 SaaS 平台，帮助企业提供 AI 驱动的智能客服自动化服务',
        responsibilities: [
          '使用 Vue 3 Composition API 架构和开发前端系统',
          '集成 OpenAI GPT 模型实现智能对话能力',
          '使用 Socket.io 实现实时消息系统',
          '使用 WebRTC 开发视频通话功能',
          '构建全面的管理后台，提供服务分析功能',
        ],
        challenges: [
          '管理高并发实时消息传递',
          '优化 AI 响应延迟以提升用户体验',
          '在不同网络条件下实现可靠的 WebRTC 连接',
          '处理大规模对话历史的存储和检索',
        ],
        achievements: [
          '成功处理日均 50 万+ 对话量',
          '实现 95% 的客户满意度',
          '将平均响应时间从 5 分钟缩短至 30 秒',
          '部署至 100+ 企业客户',
        ],
      },
      en: {
        background:
          'Built a SaaS platform to help enterprises provide intelligent customer service with AI-powered automation',
        responsibilities: [
          'Architected and developed the frontend system using Vue 3 Composition API',
          'Integrated OpenAI GPT models for intelligent conversation capabilities',
          'Implemented real-time messaging system with Socket.io',
          'Developed video call functionality using WebRTC',
          'Built comprehensive admin dashboard for service analytics',
        ],
        challenges: [
          'Managing high-concurrency real-time message delivery',
          'Optimizing AI response latency for better user experience',
          'Implementing reliable WebRTC connection across different network conditions',
          'Handling large-scale conversation history storage and retrieval',
        ],
        achievements: [
          'Successfully handling 500K+ daily conversations',
          'Achieved 95% customer satisfaction rate',
          'Reduced average response time from 5 minutes to 30 seconds',
          'Deployed to 100+ enterprise clients',
        ],
      },
    },
  },
  {
    id: 'digital-twin-park',
    name: 'Smart Park Digital Twin Visualization Platform',
    nameTranslations: {
      zh: '智慧园区数字孪生可视化平台',
      en: 'Smart Park Digital Twin Visualization Platform',
    },
    description: 'Digital twin 3D visualization system for real-time monitoring of park buildings, equipment, energy, and security',
    descriptionTranslations: {
      zh: '数字孪生三维可视化系统，实现园区建筑、设备、能源、安防等数据的实时监控与可视化展示',
      en: 'Digital twin 3D visualization system for real-time monitoring of park buildings, equipment, energy, and security',
    },
    technologies: [
      'Vue 3',
      'TypeScript',
      'Three.js',
      'Pinia',
      'ECharts',
      'WebSocket',
      'Vite',
    ],
    startDate: '2023-03-01',
    endDate: '2024-09-01',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://digital-twin-demo.example.com',
    details: {
      background:
        'Created a digital twin platform for smart park management with 3D visualization and real-time data monitoring',
      responsibilities: [
        'Developed 3D park model using Three.js with interactive building visualization',
        'Implemented real-time data visualization dashboard with ECharts',
        'Built WebSocket-based real-time data synchronization system',
        'Created energy consumption monitoring and analysis module',
        'Developed security monitoring system with camera feed integration',
      ],
      challenges: [
        'Optimizing 3D rendering performance for large-scale park models',
        'Synchronizing real-time data from multiple IoT sensors',
        'Implementing smooth camera transitions and navigation in 3D space',
        'Handling large volumes of historical data for trend analysis',
      ],
      achievements: [
        'Reduced energy consumption by 20% through data-driven insights',
        'Monitoring 500+ IoT devices in real-time',
        'Improved security incident response time by 40%',
        'Successfully deployed in 5 industrial parks',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '创建智慧园区管理的数字孪生平台，提供 3D 可视化和实时数据监控',
        responsibilities: [
          '使用 Three.js 开发 3D 园区模型，实现交互式建筑可视化',
          '使用 ECharts 实现实时数据可视化仪表板',
          '构建基于 WebSocket 的实时数据同步系统',
          '创建能源消耗监控和分析模块',
          '开发安防监控系统，集成摄像头视频流',
        ],
        challenges: [
          '优化大规模园区模型的 3D 渲染性能',
          '同步来自多个 IoT 传感器的实时数据',
          '在 3D 空间中实现流畅的相机过渡和导航',
          '处理大量历史数据进行趋势分析',
        ],
        achievements: [
          '通过数据驱动的洞察将能源消耗降低 20%',
          '实时监控 500+ IoT 设备',
          '将安全事件响应时间缩短 40%',
          '成功部署至 5 个工业园区',
        ],
      },
      en: {
        background:
          'Created a digital twin platform for smart park management with 3D visualization and real-time data monitoring',
        responsibilities: [
          'Developed 3D park model using Three.js with interactive building visualization',
          'Implemented real-time data visualization dashboard with ECharts',
          'Built WebSocket-based real-time data synchronization system',
          'Created energy consumption monitoring and analysis module',
          'Developed security monitoring system with camera feed integration',
        ],
        challenges: [
          'Optimizing 3D rendering performance for large-scale park models',
          'Synchronizing real-time data from multiple IoT sensors',
          'Implementing smooth camera transitions and navigation in 3D space',
          'Handling large volumes of historical data for trend analysis',
        ],
        achievements: [
          'Reduced energy consumption by 20% through data-driven insights',
          'Monitoring 500+ IoT devices in real-time',
          'Improved security incident response time by 40%',
          'Successfully deployed in 5 industrial parks',
        ],
      },
    },
  },
  {
    id: 'plantguard-mobile',
    name: 'PlantGuard Mobile - Smart Factory Mobile Operations Platform',
    nameTranslations: {
      zh: 'PlantGuard Mobile-智能工厂移动运维平台',
      en: 'PlantGuard Mobile - Smart Factory Mobile Operations Platform',
    },
    description: 'Mobile device intelligent management platform integrating AR technology, IoT data, and predictive maintenance algorithms',
    descriptionTranslations: {
      zh: '移动端设备智能管理平台，整合 AR 技术、物联网数据和预测性维护算法',
      en: 'Mobile device intelligent management platform integrating AR technology, IoT data, and predictive maintenance algorithms',
    },
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'ViroReact',
      'WatermelonDB',
      'React Native Camera',
    ],
    startDate: '2022-07-01',
    endDate: '2023-06-01',
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://plantguard-demo.example.com',
    githubUrl: 'https://github.com/example/plantguard-mobile',
    details: {
      background:
        'Developed a mobile platform for smart factory equipment management with AR-enhanced maintenance workflows',
      responsibilities: [
        'Built cross-platform mobile app using React Native',
        'Integrated AR functionality using ViroReact for equipment visualization',
        'Implemented offline-first architecture with WatermelonDB',
        'Developed predictive maintenance alert system',
        'Created equipment inspection workflows with camera integration',
      ],
      challenges: [
        'Optimizing AR performance on mid-range mobile devices',
        'Implementing reliable offline data synchronization',
        'Handling complex equipment hierarchies and relationships',
        'Ensuring accurate AR marker recognition in various lighting conditions',
      ],
      achievements: [
        'Reduced equipment downtime by 35% through predictive maintenance',
        'Improved maintenance efficiency by 50% with AR-guided workflows',
        'Deployed to 1,000+ field technicians',
        'Achieved 99.5% offline functionality reliability',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '开发智能工厂设备管理移动平台，提供 AR 增强的维护工作流',
        responsibilities: [
          '使用 React Native 构建跨平台移动应用',
          '使用 ViroReact 集成 AR 功能，实现设备可视化',
          '使用 WatermelonDB 实现离线优先架构',
          '开发预测性维护告警系统',
          '创建设备检查工作流，集成相机功能',
        ],
        challenges: [
          '在中端移动设备上优化 AR 性能',
          '实现可靠的离线数据同步',
          '处理复杂的设备层次结构和关系',
          '确保在各种光照条件下准确识别 AR 标记',
        ],
        achievements: [
          '通过预测性维护将设备停机时间减少 35%',
          '通过 AR 引导工作流将维护效率提高 50%',
          '部署至 1,000+ 现场技术人员',
          '实现 99.5% 的离线功能可靠性',
        ],
      },
      en: {
        background:
          'Developed a mobile platform for smart factory equipment management with AR-enhanced maintenance workflows',
        responsibilities: [
          'Built cross-platform mobile app using React Native',
          'Integrated AR functionality using ViroReact for equipment visualization',
          'Implemented offline-first architecture with WatermelonDB',
          'Developed predictive maintenance alert system',
          'Created equipment inspection workflows with camera integration',
        ],
        challenges: [
          'Optimizing AR performance on mid-range mobile devices',
          'Implementing reliable offline data synchronization',
          'Handling complex equipment hierarchies and relationships',
          'Ensuring accurate AR marker recognition in various lighting conditions',
        ],
        achievements: [
          'Reduced equipment downtime by 35% through predictive maintenance',
          'Improved maintenance efficiency by 50% with AR-guided workflows',
          'Deployed to 1,000+ field technicians',
          'Achieved 99.5% offline functionality reliability',
        ],
      },
    },
  },
  {
    id: 'smart-factory-management',
    name: 'Smart Factory Production Management System',
    nameTranslations: {
      zh: '智能工厂生产管理系统',
      en: 'Smart Factory Production Management System',
    },
    description: 'Digital factory management platform covering production planning, equipment monitoring, quality management, and material traceability',
    descriptionTranslations: {
      zh: '数字化工厂管理平台，涵盖生产计划、设备监控、质量管理、物料追溯等核心业务模块',
      en: 'Digital factory management platform covering production planning, equipment monitoring, quality management, and material traceability',
    },
    technologies: [
      'Vue 2',
      'Vuex',
      'Vue Router',
      'Element UI',
      'ECharts',
      'WebSocket',
      'Webpack',
    ],
    startDate: '2021-12-01',
    endDate: '2022-07-01',
    images: ['https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://smart-factory-demo.example.com',
    details: {
      background:
        'Built a comprehensive digital factory management system to optimize production processes and improve operational efficiency',
      responsibilities: [
        'Developed production planning module with Gantt chart visualization',
        'Implemented real-time equipment monitoring dashboard',
        'Created quality management system with defect tracking',
        'Built material traceability system with barcode scanning',
        'Developed comprehensive reporting and analytics module',
      ],
      challenges: [
        'Integrating with legacy ERP and MES systems',
        'Handling real-time data from 200+ production machines',
        'Implementing complex production scheduling algorithms',
        'Ensuring data consistency across multiple modules',
      ],
      achievements: [
        'Increased production efficiency by 25%',
        'Reduced quality defects by 30%',
        'Improved material traceability accuracy to 99.9%',
        'Deployed across 3 manufacturing facilities',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '构建全面的数字化工厂管理系统，优化生产流程并提高运营效率',
        responsibilities: [
          '开发生产计划模块，提供甘特图可视化',
          '实现实时设备监控仪表板',
          '创建质量管理系统，支持缺陷追踪',
          '构建物料追溯系统，支持条码扫描',
          '开发全面的报表和分析模块',
        ],
        challenges: [
          '与传统 ERP 和 MES 系统集成',
          '处理来自 200+ 生产机器的实时数据',
          '实现复杂的生产调度算法',
          '确保多个模块间的数据一致性',
        ],
        achievements: [
          '将生产效率提高 25%',
          '将质量缺陷减少 30%',
          '将物料追溯准确率提高至 99.9%',
          '部署至 3 个制造工厂',
        ],
      },
      en: {
        background:
          'Built a comprehensive digital factory management system to optimize production processes and improve operational efficiency',
        responsibilities: [
          'Developed production planning module with Gantt chart visualization',
          'Implemented real-time equipment monitoring dashboard',
          'Created quality management system with defect tracking',
          'Built material traceability system with barcode scanning',
          'Developed comprehensive reporting and analytics module',
        ],
        challenges: [
          'Integrating with legacy ERP and MES systems',
          'Handling real-time data from 200+ production machines',
          'Implementing complex production scheduling algorithms',
          'Ensuring data consistency across multiple modules',
        ],
        achievements: [
          'Increased production efficiency by 25%',
          'Reduced quality defects by 30%',
          'Improved material traceability accuracy to 99.9%',
          'Deployed across 3 manufacturing facilities',
        ],
      },
    },
  },
  {
    id: 'smart-home-control',
    name: 'Smart Home Control - Cross-Platform Mobile App',
    nameTranslations: {
      zh: '智能家居控制-跨平台移动应用',
      en: 'Smart Home Control - Cross-Platform Mobile App',
    },
    description: 'Unified smart home control platform supporting multiple IoT device brands',
    descriptionTranslations: {
      zh: '统一的智能家居控制平台，支持接入多个品牌的 IoT 设备',
      en: 'Unified smart home control platform supporting multiple IoT device brands',
    },
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'React Navigation',
      'GraphQL',
      'WebSocket',
    ],
    startDate: '2020-05-01',
    endDate: '2021-12-01',
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://smart-home-demo.example.com',
    githubUrl: 'https://github.com/example/smart-home-control',
    details: {
      background:
        'Created a unified mobile app to control smart home devices from multiple brands through a single interface',
      responsibilities: [
        'Developed cross-platform mobile app using React Native',
        'Integrated with 10+ IoT device APIs (Philips Hue, Nest, SmartThings, etc.)',
        'Implemented GraphQL API for unified device management',
        'Built automation rules engine for device scheduling',
        'Created voice control integration with Alexa and Google Assistant',
      ],
      challenges: [
        'Standardizing device control interfaces across different brands',
        'Handling various authentication and authorization protocols',
        'Ensuring reliable device communication in different network conditions',
        'Implementing complex automation rule logic',
      ],
      achievements: [
        'Successfully integrated 10+ IoT device brands',
        'Achieved 50,000+ app downloads',
        'Maintained 4.5+ star rating on app stores',
        'Reduced average device setup time by 70%',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '创建统一的移动应用，通过单一界面控制多个品牌的智能家居设备',
        responsibilities: [
          '使用 React Native 开发跨平台移动应用',
          '集成 10+ IoT 设备 API（Philips Hue、Nest、SmartThings 等）',
          '实现 GraphQL API 用于统一设备管理',
          '构建自动化规则引擎，支持设备调度',
          '创建与 Alexa 和 Google Assistant 的语音控制集成',
        ],
        challenges: [
          '标准化不同品牌的设备控制接口',
          '处理各种身份验证和授权协议',
          '确保在不同网络条件下的可靠设备通信',
          '实现复杂的自动化规则逻辑',
        ],
        achievements: [
          '成功集成 10+ IoT 设备品牌',
          '实现 50,000+ 应用下载量',
          '在应用商店保持 4.5+ 星评级',
          '将平均设备设置时间减少 70%',
        ],
      },
      en: {
        background:
          'Created a unified mobile app to control smart home devices from multiple brands through a single interface',
        responsibilities: [
          'Developed cross-platform mobile app using React Native',
          'Integrated with 10+ IoT device APIs (Philips Hue, Nest, SmartThings, etc.)',
          'Implemented GraphQL API for unified device management',
          'Built automation rules engine for device scheduling',
          'Created voice control integration with Alexa and Google Assistant',
        ],
        challenges: [
          'Standardizing device control interfaces across different brands',
          'Handling various authentication and authorization protocols',
          'Ensuring reliable device communication in different network conditions',
          'Implementing complex automation rule logic',
        ],
        achievements: [
          'Successfully integrated 10+ IoT device brands',
          'Achieved 50,000+ app downloads',
          'Maintained 4.5+ star rating on app stores',
          'Reduced average device setup time by 70%',
        ],
      },
    },
  },
  {
    id: 'jd-internal-email',
    name: 'JD Internal Email System (Desktop)',
    nameTranslations: {
      zh: '京东内部邮箱(桌面端)',
      en: 'JD Internal Email System (Desktop)',
    },
    description: 'High-performance enterprise email desktop application for 100K+ JD employees with virtual scrolling and real-time notifications',
    descriptionTranslations: {
      zh: '京东集团内部日均超十万员工使用的高并发企业级邮件桌面端应用，支持虚拟滚动和实时通知',
      en: 'High-performance enterprise email desktop application for 100K+ JD employees with virtual scrolling and real-time notifications',
    },
    technologies: [
      'React',
      'Tailwind CSS',
      'Redux',
      'Electron',
      'WebSocket',
    ],
    startDate: '2020-05-01',
    endDate: '2021-03-01',
    images: ['https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=450&fit=crop&q=80'],
    details: {
      background:
        'Developed a high-performance desktop email client for JD.com internal communication serving 100K+ employees',
      responsibilities: [
        'Implemented virtual scrolling for email lists handling 100K+ emails with 70% performance improvement',
        'Built predictable state management using Redux Toolkit/Pinia',
        'Integrated and customized TinyMCE rich text editor with drag-and-drop image upload',
        'Developed real-time email notification system using WebSocket',
        'Implemented Electron main/renderer process communication architecture',
      ],
      challenges: [
        'Optimizing email list rendering performance for massive datasets',
        'Handling cross-browser compatibility issues in rich text editor',
        'Implementing reliable WebSocket connection with automatic reconnection',
        'Managing complex application state across multiple windows',
      ],
      achievements: [
        'Improved email list rendering performance by 70% with virtual scrolling',
        'Served 100K+ daily active users',
        'Achieved instant email delivery with WebSocket notifications',
        'Implemented global keyboard shortcuts (Cmd/Ctrl+N for quick compose)',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '为京东集团开发高性能桌面邮件客户端，服务 10 万+ 员工的内部通信',
        responsibilities: [
          '实现邮件列表虚拟滚动，处理 10 万+ 邮件，性能提升 70%',
          '使用 Redux Toolkit/Pinia 构建可预测的状态管理',
          '集成并定制 TinyMCE 富文本编辑器，支持拖拽上传图片',
          '使用 WebSocket 开发实时邮件通知系统',
          '实现 Electron 主进程与渲染进程的通信架构',
        ],
        challenges: [
          '优化大规模数据集的邮件列表渲染性能',
          '处理富文本编辑器的跨浏览器兼容性问题',
          '实现可靠的 WebSocket 连接和自动重连',
          '管理多窗口间的复杂应用状态',
        ],
        achievements: [
          '通过虚拟滚动将邮件列表渲染性能提升 70%',
          '服务 10 万+ 日活用户',
          '通过 WebSocket 通知实现即时邮件送达',
          '实现全局快捷键（Cmd/Ctrl+N 快速写邮件）',
        ],
      },
      en: {
        background:
          'Developed a high-performance desktop email client for JD.com internal communication serving 100K+ employees',
        responsibilities: [
          'Implemented virtual scrolling for email lists handling 100K+ emails with 70% performance improvement',
          'Built predictable state management using Redux Toolkit/Pinia',
          'Integrated and customized TinyMCE rich text editor with drag-and-drop image upload',
          'Developed real-time email notification system using WebSocket',
          'Implemented Electron main/renderer process communication architecture',
        ],
        challenges: [
          'Optimizing email list rendering performance for massive datasets',
          'Handling cross-browser compatibility issues in rich text editor',
          'Implementing reliable WebSocket connection with automatic reconnection',
          'Managing complex application state across multiple windows',
        ],
        achievements: [
          'Improved email list rendering performance by 70% with virtual scrolling',
          'Served 100K+ daily active users',
          'Achieved instant email delivery with WebSocket notifications',
          'Implemented global keyboard shortcuts (Cmd/Ctrl+N for quick compose)',
        ],
      },
    },
  },
  {
    id: 'smart-city-platform',
    name: 'Smart City Cloud Platform (PC + Mini Program)',
    nameTranslations: {
      zh: '智慧城市云上无忧(PC+小程序)',
      en: 'Smart City Cloud Platform (PC + Mini Program)',
    },
    description: 'Smart city SaaS platform with PC admin dashboard and WeChat mini program for citizen services',
    descriptionTranslations: {
      zh: '智慧城市领域的 SaaS 平台，包含面向管理人员的 PC 端数据可视化后台与面向市民的微信小程序服务端',
      en: 'Smart city SaaS platform with PC admin dashboard and WeChat mini program for citizen services',
    },
    technologies: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'ECharts',
      'Uni-app',
      'Vant Weapp',
    ],
    startDate: '2019-04-01',
    endDate: '2020-04-01',
    images: ['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=450&fit=crop&q=80'],
    demoUrl: 'https://smart-city-demo.example.com',
    details: {
      background:
        'Built a comprehensive smart city management platform with IoT data integration and citizen service portal',
      responsibilities: [
        'Architected and developed PC admin dashboard from scratch using Vue 3 + TypeScript',
        'Implemented city operation command center with ECharts and map visualization (Amap API)',
        'Developed cross-platform mini program using Uni-app framework',
        'Built citizen service features including online inquiry, business handling, and issue reporting',
        'Optimized mini program package size to under 2MB with code splitting',
      ],
      challenges: [
        'Optimizing large-scale data visualization rendering performance',
        'Handling WeChat mini program package size limitations',
        'Integrating with multiple IoT sensor data sources',
        'Implementing complex LBS (Location-Based Services) features',
      ],
      achievements: [
        'Reduced build time by 20% with Webpack optimization',
        'Achieved smooth rendering of multi-dimensional data (traffic, environment monitoring)',
        'Successfully deployed mini program with <2MB package size',
        'Implemented "one-click reporting" feature with stable operation',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '构建全面的智慧城市管理平台，集成 IoT 数据和市民服务门户',
        responsibilities: [
          '使用 Vue 3 + TypeScript 从零架构和开发 PC 端管理后台',
          '使用 ECharts 和地图可视化（高德 API）实现城市运行指挥大屏',
          '使用 Uni-app 框架开发跨平台小程序',
          '构建市民服务功能，包括在线查询、业务办理、问题上报等',
          '通过分包加载将小程序包体积优化至 2MB 以内',
        ],
        challenges: [
          '优化大规模数据可视化的渲染性能',
          '处理微信小程序包大小限制',
          '集成多个 IoT 传感器数据源',
          '实现复杂的 LBS（基于位置的服务）功能',
        ],
        achievements: [
          '通过 Webpack 优化将构建速度缩短 20%',
          '实现多维数据（交通流量、环境监测）的流畅渲染',
          '成功部署小程序，包体积 <2MB',
          '实现"一键报事"功能，稳定运行',
        ],
      },
      en: {
        background:
          'Built a comprehensive smart city management platform with IoT data integration and citizen service portal',
        responsibilities: [
          'Architected and developed PC admin dashboard from scratch using Vue 3 + TypeScript',
          'Implemented city operation command center with ECharts and map visualization (Amap API)',
          'Developed cross-platform mini program using Uni-app framework',
          'Built citizen service features including online inquiry, business handling, and issue reporting',
          'Optimized mini program package size to under 2MB with code splitting',
        ],
        challenges: [
          'Optimizing large-scale data visualization rendering performance',
          'Handling WeChat mini program package size limitations',
          'Integrating with multiple IoT sensor data sources',
          'Implementing complex LBS (Location-Based Services) features',
        ],
        achievements: [
          'Reduced build time by 20% with Webpack optimization',
          'Achieved smooth rendering of multi-dimensional data (traffic, environment monitoring)',
          'Successfully deployed mini program with <2MB package size',
          'Implemented "one-click reporting" feature with stable operation',
        ],
      },
    },
  },
  {
    id: 'employee-management-system',
    name: 'Smart Employee Management System',
    nameTranslations: {
      zh: '智康员工管理系统',
      en: 'Smart Employee Management System',
    },
    description: 'Comprehensive employee management system with attendance tracking, workflow approval, and performance evaluation',
    descriptionTranslations: {
      zh: '全面的员工管理系统，包含考勤打卡、行程安排、审批流程、绩效考核等功能',
      en: 'Comprehensive employee management system with attendance tracking, workflow approval, and performance evaluation',
    },
    technologies: [
      'React',
      'JavaScript',
      'axios',
      'react-redux',
      'Ant Design',
    ],
    startDate: '2018-07-01',
    endDate: '2019-04-01',
    images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop&q=80'],
    details: {
      background:
        'Developed an all-in-one employee management system to streamline HR operations and improve workforce productivity',
      responsibilities: [
        'Built the application using React + JavaScript with component-based architecture',
        'Implemented attendance tracking with real-time clock-in/out functionality',
        'Developed workflow approval system for leave, administrative, and HR processes',
        'Created performance evaluation module with continuous feedback mechanism',
        'Built reusable fuzzy search component using Ant Design',
      ],
      challenges: [
        'Managing complex state across multiple interconnected modules',
        'Implementing flexible workflow approval routing logic',
        'Handling real-time attendance data synchronization',
        'Ensuring data consistency across attendance, schedule, and approval modules',
      ],
      achievements: [
        'Improved code reusability with component-based architecture',
        'Streamlined HR approval processes, reducing processing time by 40%',
        'Provided clear visibility into employee attendance and performance',
        'Successfully deployed to company with 500+ employees',
      ],
    },
    detailsTranslations: {
      zh: {
        background: '开发一体化员工管理系统，简化 HR 运营并提高员工生产力',
        responsibilities: [
          '使用 React + JavaScript 构建应用，采用组件化架构',
          '实现考勤追踪，支持实时打卡功能',
          '开发工作流审批系统，支持请假、行政、人事审批流程',
          '创建绩效考核模块，提供持续反馈机制',
          '使用 Ant Design 构建可复用的模糊搜索组件',
        ],
        challenges: [
          '管理多个相互关联模块的复杂状态',
          '实现灵活的工作流审批路由逻辑',
          '处理实时考勤数据同步',
          '确保考勤、行程、审批模块间的数据一致性',
        ],
        achievements: [
          '通过组件化架构提高代码复用率',
          '简化 HR 审批流程，处理时间缩短 40%',
          '提供员工考勤和绩效的清晰可见性',
          '成功部署至 500+ 员工的公司',
        ],
      },
      en: {
        background:
          'Developed an all-in-one employee management system to streamline HR operations and improve workforce productivity',
        responsibilities: [
          'Built the application using React + JavaScript with component-based architecture',
          'Implemented attendance tracking with real-time clock-in/out functionality',
          'Developed workflow approval system for leave, administrative, and HR processes',
          'Created performance evaluation module with continuous feedback mechanism',
          'Built reusable fuzzy search component using Ant Design',
        ],
        challenges: [
          'Managing complex state across multiple interconnected modules',
          'Implementing flexible workflow approval routing logic',
          'Handling real-time attendance data synchronization',
          'Ensuring data consistency across attendance, schedule, and approval modules',
        ],
        achievements: [
          'Improved code reusability with component-based architecture',
          'Streamlined HR approval processes, reducing processing time by 40%',
          'Provided clear visibility into employee attendance and performance',
          'Successfully deployed to company with 500+ employees',
        ],
      },
    },
  },
];

/**
 * Get all unique technologies from projects
 */
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

/**
 * Filter projects by technology
 */
export const filterProjectsByTechnology = (
  technology: string | null
): Project[] => {
  if (!technology) return projects;
  return projects.filter((project) =>
    project.technologies.includes(technology)
  );
};

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
