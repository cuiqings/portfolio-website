# 部署到 GitHub Pages 指南

## 方法一：使用 GitHub Actions（推荐）

### 步骤：

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击右上角的 "+" → "New repository"
   - 仓库名称建议：`portfolio-website`（或任何你喜欢的名字）
   - 选择 Public（公开）
   - 不要勾选 "Initialize this repository with a README"

2. **修改 vite.config.ts 中的 base 路径**
   ```typescript
   base: '/你的仓库名/', // 例如：'/portfolio-website/'
   ```
   如果你的仓库名是 `portfolio-website`，就保持现在的配置不变。

3. **初始化 Git 并推送代码**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```

4. **配置 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 "Settings" → "Pages"
   - 在 "Source" 下选择 "GitHub Actions"

5. **等待部署完成**
   - 推送代码后，GitHub Actions 会自动运行
   - 在仓库的 "Actions" 标签页可以查看部署进度
   - 部署成功后，你的网站会在：`https://你的用户名.github.io/你的仓库名/`

## 方法二：手动部署

### 步骤：

1. **创建 GitHub 仓库**（同上）

2. **修改 vite.config.ts**（同上）

3. **初始化 Git 并推送代码**（同上）

4. **手动部署**
   ```bash
   npm run deploy
   ```

5. **配置 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 "Settings" → "Pages"
   - 在 "Source" 下选择 "gh-pages" 分支
   - 点击 "Save"

6. **访问你的网站**
   - 网站地址：`https://你的用户名.github.io/你的仓库名/`

## 注意事项

1. **仓库名称**：如果你想让网站地址是 `https://你的用户名.github.io/`（不带仓库名），需要：
   - 创建一个名为 `你的用户名.github.io` 的仓库
   - 将 `vite.config.ts` 中的 `base` 改为 `'/'`

2. **更新网站**：
   - 方法一（GitHub Actions）：只需推送代码到 main 分支，会自动部署
   - 方法二（手动）：运行 `npm run deploy`

3. **自定义域名**：
   - 在 GitHub Pages 设置中可以配置自定义域名
   - 需要在域名提供商处配置 DNS 记录

## 故障排除

### 页面显示 404
- 检查 `vite.config.ts` 中的 `base` 路径是否正确
- 确保 GitHub Pages 已启用

### 样式或资源加载失败
- 检查浏览器控制台的错误信息
- 确认 `base` 路径配置正确

### GitHub Actions 部署失败
- 查看 Actions 标签页的错误日志
- 确保 GitHub Pages 设置为 "GitHub Actions" 模式
