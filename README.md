# 个人主页与博客

- `Hexo-Blog`：Hexo 源码、文章和主页样式。修改后推送到这个分支。
- `main`：Hexo 生成的静态网站，由 `npm run deploy` 发布。不要在这里维护源码。
- 主页：`https://cfn0324.github.io/`
- 博客：`https://cfn0324.github.io/blog/`

## 本地开发与发布

```bash
npm install
npm run server
```

完成修改后，提交并推送源码分支，再发布生成的网站：

```bash
git add .
git commit -m "Describe the change"
git push origin HEAD:Hexo-Blog
npm run deploy
```

在 Hexo 的 `source/` 下添加文章或页面，它们会生成到网站对应路径。Git 分支本身不会自动成为网站页面；独立页面应放在 `source/` 并由 Hexo 发布，或另行配置构建流程，把不同分支的产物放进不同路径。
