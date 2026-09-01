const dialog = document.querySelector('#case-study');
const dialogTitle = document.querySelector('#case-title');
const caseKicker = document.querySelector('.case-kicker');
const caseSummary = document.querySelector('.case-summary');
const caseTags = document.querySelector('.case-tags');
const caseFacts = document.querySelector('.case-facts');
const caseBody = document.querySelector('.case-body');
const caseCover = document.querySelector('.case-cover');
const caseGallery = document.querySelector('.case-gallery');
const caseAction = document.querySelector('.case-action');

const cases = {
  shen: {
    title: '沈管家 AI 数字员工',
    kicker: '0 - 1 产品设计',
    summary: '从 0 到 1 构建 AI 数字员工的品牌入口与跨端工作台体验。',
    tags: ['官网体验', 'PC 工作台', 'App 移动端'],
    facts: [['项目类型', 'AI 数字员工'], ['设计范围', '官网 / PC / App'], ['设计重点', '核心任务闭环与多端一致性']],
    body: '从产品文档开始梳理信息架构与页面结构，再以对话、任务、数字员工、知识库和数据管理等核心场景建立跨端体验。公开案例聚焦面向客户的品牌官网，以及日常使用的 PC 与 App，呈现从产品认知到任务执行的连续体验。',
    overall: {
      index: '01',
      eyebrow: '项目挑战 / 设计策略',
      title: '让 AI 协作成为\n连续体验',
      problem: '沈管家覆盖官网、PC 端与 App 端。用户需要从了解产品、下载体验，逐步进入发起任务、调用数字员工、查看进度与处理消息等环节。若功能入口、任务状态与交互逻辑在不同设备间不一致，跨端切换就会产生理解成本，也难以建立对 AI 数字员工的信任与掌控感。',
      solution: '我以“任务闭环”而非单个页面作为设计主线，统一智能对话、任务、数字员工、知识库、日程与消息等核心能力的命名、状态和反馈逻辑。官网负责建立价值认知并引导体验；PC 端承载复杂工作与深度协作；App 端聚焦高频发起、即时处理与移动跟进。最终将分散能力串联为从产品认知、任务发起、AI 执行到结果追踪的连续体验。',
      methods: ['跨端任务地图', '状态系统', '能力分层', '组件规范']
    },
    images: [],
    projectLink: {
      href: 'https://www.butlershen.com',
      label: '访问官网，可下载 App 体验 ↗'
    },
    platforms: [
      {
        title: '官网',
        type: '品牌入口 / 产品转化',
        description: '以产品价值、核心能力和行业方案建立认知，并串联下载、定价与新闻内容，形成从了解产品到获取客户端的完整路径。',
        source: 'https://www.butlershen.com',
        layout: 'website',
        images: [
          { src: './images/butlershen/website/home.jpg', label: '官网首页' },
          { src: './images/butlershen/website/core-features.jpg', label: '核心功能' },
          { src: './images/butlershen/website/solutions.jpg', label: '解决方案' },
          { src: './images/butlershen/website/download.jpg', label: '客户端下载' },
          { src: './images/butlershen/website/pricing.jpg', label: '产品定价' },
          { src: './images/butlershen/website/news.jpg', label: '新闻动态' }
        ]
      },
      {
        title: 'PC 端',
        type: '桌面工作台 / 复杂任务',
        description: '围绕企业用户的长时工作场景，将智能对话、任务协作、数字员工、日程、知识库和数据看板整合为统一工作台。',
        images: [
          { src: './images/butlershen/pc/home-macos.jpg', label: '智能对话首页' },
          { src: './images/butlershen/pc/task-detail.jpg', label: '任务详情' },
          { src: './images/butlershen/pc/digital-employees.jpg', label: '数字员工管理' },
          { src: './images/butlershen/pc/dashboard.jpg', label: '数据看板' },
          { src: './images/butlershen/pc/calendar-month.jpg', label: '月度日程' },
          { src: './images/butlershen/pc/knowledge-base.jpg', label: '知识库' },
          { src: './images/butlershen/pc/notifications.jpg', label: '通知与协作' }
        ]
      },
      {
        title: 'App 端',
        type: '移动协作 / 即时处理',
        description: '把高频能力收束到移动场景，让用户随时发起对话、查看任务、调用数字员工与技能，并通过侧边个人中心管理日程和消息。',
        layout: 'mobile',
        images: [
          { src: './images/butlershen/app/home-composer.jpg', label: '智能对话' },
          { src: './images/butlershen/app/tasks.jpg', label: '任务中心' },
          { src: './images/butlershen/app/digital-employees.jpg', label: '数字员工' },
          { src: './images/butlershen/app/skills.jpg', label: '技能管理' },
          { src: './images/butlershen/app/profile-drawer.jpg', label: '个人中心' },
          { src: './images/butlershen/app/calendar.jpg', label: '日程' },
          { src: './images/butlershen/app/messages.jpg', label: '消息' }
        ]
      }
    ]
  },
  'little-e': {
    title: '小 E 管家',
    kicker: '移动端产品设计',
    summary: '围绕家庭服务场景，完成产品定位、用户路径与移动端界面设计。',
    tags: ['产品定位', '用户流程', '移动端界面', '视觉规范'],
    facts: [['项目周期', '2025.01 - 2025.04'], ['设计范围', '产品定位 / 用户流程 / 移动端'], ['视觉方向', '清晰、轻量、生活服务感']],
    body: '从服务场景出发，梳理用户在查找、下单、服务跟进等环节的任务路径。界面以信息分层和低学习成本为原则，结合家庭服务语境建立主界面、状态反馈与组件规范。',
    images: ['./images/projects/page-03.png', './images/projects/page-12.png', './images/projects/page-13.png', './images/projects/page-17.png', './images/projects/page-18.png', './images/projects/page-19.png', './images/projects/page-20.png', './images/projects/page-21.png']
  },
  xunlei: {
    title: '迅雷云盘 - 用户体验优化',
    kicker: '用户体验优化',
    summary: '围绕云盘文件管理、文件查找与会员体验，重构关键任务路径。',
    tags: ['竞品分析', '用户测试', '文件管理', '会员体验'],
    facts: [['优化目标', '降低文件管理与查找成本'], ['研究方法', '竞品分析 / 用户测试'], ['设计范围', '文件管理 / 会员体验']],
    body: '通过竞品分析与用户测试梳理高频问题，聚焦“文件不好找、管理不便、会员价值感弱”等体验断点。方案从文件结构、快捷操作、状态反馈与权益呈现四个方向优化关键路径。',
    images: ['./images/projects/page-22.png', './images/projects/page-24.png', './images/projects/page-25.png', './images/projects/page-27.png', './images/projects/page-28.png', './images/projects/page-29.png', './images/projects/page-30.png', './images/projects/page-31.png', './images/projects/page-32.png']
  },
  'first-scene': {
    title: '第一现场 APP',
    kicker: '活动与互动体验设计',
    summary: '连接动漫节线下互动体验与活动专题页的一体化设计。',
    tags: ['线下互动', 'Web / H5', '视觉指引', '活动传播'],
    facts: [['项目场景', '深圳动漫节线下互动体验区'], ['设计范围', '导览 / 360 度环拍 / 专题页'], ['延展内容', 'APP 弹窗 / 商城介绍 / 宣传物料']],
    body: '将线下体验流程拆解为入口引导、互动操作、结果预览与分享传播。线上活动专题页整合流程、电子导览和福利信息，以统一的视觉节奏连接现场与移动端。',
    images: ['./images/projects/page-52.png', './images/projects/page-54.png', './images/projects/page-55.png', './images/projects/page-56.png', './images/projects/page-57.png']
  },
  concepts: {
    title: '其他概念性作品',
    kicker: '五组概念实践',
    summary: '从数字体验、出版物到互动装置，探索媒介与社会议题。',
    tags: ['虚拟博物馆', 'Dopamine Husband', 'Focus & Fade News', 'The Mask You Live In', 'New Myths'],
    facts: [['作品数量', '5 组概念作品'], ['媒介探索', '虚拟空间 / 品牌 / AR / 装置 / 出版物'], ['主题线索', '远程共观 / 情感经济 / 舆论 / 身份 / 现代神话']],
    body: '五组作品分别从远程观展、情感经济、舆论传播、性别身份与现代神话切入，通过界面原型、品牌系统、增强现实、参与式活动和混合媒介装置建立完整叙事。',
    images: [],
    groups: [
      {
        title: '虚拟博物馆',
        type: '数字产品 / 远程观展',
        description: '构建沉浸式数字博物馆，让用户预约机器人远程看展，并在社区分享、评价与讨论观展体验。',
        images: ['./images/projects/page-33.png', './images/projects/page-34.png', './images/projects/page-35.png']
      },
      {
        title: 'Dopamine Husband',
        type: '品牌 / 专辑 / 网站',
        description: '以多巴胺刺激强度重新组织偶像剧观看体验，并延展为分级品牌、字体、专辑包装与视频网站。',
        images: ['./images/projects/page-36.png', './images/projects/page-37.png', './images/projects/page-38.png', './images/projects/page-39.png']
      },
      {
        title: 'Focus & Fade News',
        type: '出版物 / AR',
        description: '通过出版物与增强现实，让热点新闻在扫描中逐渐消逝，讨论事实如何被情绪与舆论遮蔽。',
        images: ['./images/projects/page-40.png', './images/projects/page-41.png', './images/projects/page-42.png', './images/projects/page-43.png']
      },
      {
        title: 'The Mask You Live In',
        type: '活动 / 符号身份 / 海报',
        description: '以视觉符号、海报与线下拼贴面具活动，回应性别刻板印象如何影响个人选择与身份表达。',
        images: ['./images/projects/page-44.png', './images/projects/page-45.png', './images/projects/page-46.png', './images/projects/page-47.png']
      },
      {
        title: 'New Myths',
        type: '出版物 / 混合媒介装置',
        description: '重写四则现代神话，以出版物和混合媒介装置讨论审美、欲望、网络暴力与信息快餐。',
        images: ['./images/projects/page-48.png', './images/projects/page-49.png', './images/projects/page-50.png', './images/projects/page-51.png']
      }
    ]
  }
};

document.querySelectorAll('.project').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedCase = cases[project.dataset.case];
    dialog.dataset.case = project.dataset.case;
    dialogTitle.textContent = selectedCase.title;
    caseKicker.textContent = selectedCase.kicker;
    caseSummary.textContent = selectedCase.summary;
    caseTags.innerHTML = `<span>项目特点</span><strong>${selectedCase.tags.join('，')}</strong>`;
    caseFacts.innerHTML = selectedCase.facts.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('');
    caseBody.innerHTML = `<p>${selectedCase.body}</p>`;
    caseAction.innerHTML = `<span>项目案例 / 2026</span>${selectedCase.projectLink ? `<a class="case-project-link" href="${selectedCase.projectLink.href}" target="_blank" rel="noreferrer">${selectedCase.projectLink.label}</a>` : ''}<span>向下浏览 ↓</span>`;
    caseGallery.classList.remove('has-groups', 'has-platforms');
    if (selectedCase.platforms) {
      caseCover.innerHTML = `<ol class="platform-index case-panel">${selectedCase.platforms.map((platform, index) => `<li><a href="#shen-platform-${index + 1}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${platform.title}</strong><em>${platform.type}</em><b>${String(platform.images.length).padStart(2, '0')} 个界面</b></a></li>`).join('')}</ol>`;
      caseGallery.classList.add('has-platforms');
      caseGallery.innerHTML = `${selectedCase.overall ? `
        <section class="case-method case-panel" aria-label="${selectedCase.overall.eyebrow}">
          <header>
            <span>${selectedCase.overall.index}</span>
            <div><p>${selectedCase.overall.eyebrow}</p><h3>${selectedCase.overall.title.replace('\\n', '<br>')}</h3></div>
          </header>
          <div class="case-method-grid">
            <article><p class="case-method-label">Problem</p><p>${selectedCase.overall.problem}</p></article>
            <article><p class="case-method-label">Solution</p><p>${selectedCase.overall.solution}</p></article>
          </div>
          <div class="case-method-tags">${selectedCase.overall.methods.map((method, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${method}</span>`).join('')}</div>
        </section>` : ''}${selectedCase.platforms.map((platform, index) => `
        <section class="platform-group${platform.layout ? ` is-${platform.layout}` : ''}" id="shen-platform-${index + 1}">
          <header>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div><p>${platform.type}</p><h3>${platform.title}</h3></div>
            <div class="platform-copy"><p>${platform.description}</p>${platform.source ? `<a href="${platform.source}" target="_blank" rel="noreferrer">访问线上官网 ↗</a>` : ''}</div>
          </header>
          <div class="platform-grid">${platform.images.map((image, imageIndex) => `
            <figure class="case-panel">
              <div class="platform-image"><img src="${image.src}" alt="${platform.title} · ${image.label}" loading="lazy"></div>
              <figcaption><span>${String(imageIndex + 1).padStart(2, '0')}</span><strong>${image.label}</strong></figcaption>
            </figure>`).join('')}</div>
        </section>`).join('')}`;
    } else if (selectedCase.groups) {
      caseCover.innerHTML = `<ol class="concept-index case-panel">${selectedCase.groups.map((group, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${group.title}</strong><em>${group.type}</em></li>`).join('')}</ol>`;
      caseGallery.classList.add('has-groups');
      caseGallery.innerHTML = selectedCase.groups.map((group, index) => `
        <section class="concept-group">
          <header>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div><p>${group.type}</p><h3>${group.title}</h3></div>
            <p>${group.description}</p>
          </header>
          <div class="concept-grid">${group.images.map((src) => `<img class="case-panel" src="${src}" alt="${group.title} 作品页面" loading="lazy">`).join('')}</div>
        </section>`).join('');
    } else {
      caseCover.innerHTML = selectedCase.images.length
        ? `<img class="case-panel" src="${selectedCase.images[0]}" alt="${selectedCase.title} 项目封面">`
        : '<p class="case-note case-panel">沈管家界面将在获得可公开使用的产品截图后补充；当前案例已保留项目范围、职责与交付信息。</p>';
      caseGallery.innerHTML = selectedCase.images.slice(1).map((src) => `<img class="case-panel" src="${src}" alt="${selectedCase.title} 项目页面" loading="lazy">`).join('');
    }
    dialog.showModal();
    dialog.focus({ preventScroll: true });
    dialog.scrollTop = 0;
    window.requestAnimationFrame(() => {
      dialog.querySelectorAll('.case-panel').forEach((panel) => caseRevealObserver.observe(panel));
    });
  });
});

document.querySelectorAll('.dialog-close').forEach((button) => button.addEventListener('click', () => dialog.close()));

const caseRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      caseRevealObserver.unobserve(entry.target);
    }
  });
}, { root: dialog, threshold: 0.08 });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

window.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
});

window.addEventListener('load', () => {
  window.setTimeout(() => document.body.classList.add('is-loaded'), 350);
});
