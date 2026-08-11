# 使用 GitHub 网页部署作品集

这份说明不需要安装命令行工具。部署完成后，网站地址通常为：

```text
https://你的GitHub用户名.github.io/jingyi-portfolio/
```

## 一、创建仓库

1. 登录 [GitHub](https://github.com/)。
2. 点击右上角 `+`，选择 **New repository**。
3. Repository name 填写 `jingyi-portfolio`。
4. Visibility 选择 **Public**。
5. 不要勾选自动添加 README、`.gitignore` 或 License。
6. 点击 **Create repository**。

## 二、上传网站文件

1. 下载并解压随项目提供的 `jingyi-portfolio-github-pages.zip`。
2. 在新仓库页面点击 **uploading an existing file**，或选择 **Add file → Upload files**。
3. 在 Mac Finder 中按 `Command + Shift + .` 显示隐藏文件。
4. 把解压文件夹里面的全部内容拖进上传区域。必须包含：
   - `.github` 文件夹
   - `.gitignore`
   - `index.html`
   - `package.json`
   - `pnpm-lock.yaml`
   - `vite.config.js`
   - `src` 文件夹
   - `public` 文件夹
5. 页面底部提交说明填写 `Deploy portfolio website`。
6. 选择 **Commit directly to the main branch**，点击 **Commit changes**。

不要上传 `.env.local`、`.vercel`、`node_modules`、`dist`、`work` 或 `outputs`。

## 三、开启 GitHub Pages

1. 打开仓库的 **Settings**。
2. 左侧选择 **Pages**。
3. 在 **Build and deployment** 下，把 Source 设置为 **GitHub Actions**。
4. 返回仓库的 **Actions** 页面。
5. 打开 **Deploy portfolio to GitHub Pages** 工作流。
6. 如果工作流没有自动运行，点击 **Run workflow → Run workflow**。

部署通常需要几分钟。完成后，工作流会显示绿色对勾，并提供网站地址。

## 四、后续更新网站

以后修改文件后，直接上传并覆盖仓库中的对应文件，再提交到 `main` 分支。GitHub Actions 会自动重新构建和发布，不需要再次配置 Pages。

## 五、常见问题

### Actions 显示红色叉号

进入失败的工作流，展开红色步骤查看报错。最常见原因是文件没有完整上传，尤其是 `pnpm-lock.yaml`、`vite.config.js` 或 `.github/workflows/deploy-pages.yml` 缺失。

### 网站打开后没有图片或样式

确认上传的是本次整理后的文件，并且 `vite.config.js` 存在。该文件负责让资源适配 `/jingyi-portfolio/` 二级路径。

### Pages 页面没有 GitHub Actions 选项

确认仓库为 Public，并且你对仓库拥有管理员权限。

### 网站地址显示 404

等待数分钟后刷新；如果仍未恢复，检查 Actions 是否成功，以及 **Settings → Pages → Source** 是否为 **GitHub Actions**。

## 六、仓库公开范围

GitHub Pages 发布的网站可被任何人访问。当前上传包已排除沈管家后台管理界面、本地临时文件、Vercel 项目配置和环境变量。
