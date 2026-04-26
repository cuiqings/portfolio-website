# Portfolio Website

个人作品博客网站 - 基于 React 18 + TypeScript + Vite 构建的现代化单页应用

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **路由**: React Router v6
- **状态管理**: Zustand
- **国际化**: react-i18next
- **代码规范**: ESLint + Prettier

## 项目结构

```
src/
├── components/     # 通用 UI 组件
├── pages/          # 页面组件
├── features/       # 功能模块
├── store/          # 状态管理
├── utils/          # 工具函数
├── data/           # 静态数据
├── locales/        # 多语言翻译文件
├── App.tsx         # 根组件
├── main.tsx        # 应用入口
└── index.css       # 全局样式
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 功能特性

- ✅ 3D 交互式首页
- ✅ 项目案例展示
- ✅ 技能可视化
- ✅ 技术博客系统
- ✅ 深色/浅色主题切换
- ✅ 中英文多语言支持
- ✅ 响应式设计
- ✅ 性能优化
- ✅ SEO 优化
- ✅ 可访问性支持

## 开发规范

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件使用函数式组件 + Hooks
- 样式使用 Tailwind CSS 实用类
