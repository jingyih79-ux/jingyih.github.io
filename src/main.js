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
const caseDetailNotes = document.querySelector('.case-detail-notes');
const caseChapterExperience = document.querySelector('.case-chapter-experience');
const caseSidebarOpening = document.querySelector('.case-sidebar-opening');
const caseVisualColumn = document.querySelector('.case-visual-column');
const imageLightbox = document.querySelector('#image-lightbox');
const imageLightboxImage = imageLightbox.querySelector('img');
const imageLightboxCaption = imageLightbox.querySelector('p');

const resetInterfaceScroll = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  dialog.scrollTop = 0;
  imageLightbox.scrollTop = 0;
};

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const syncCaseOpeningAlignment = () => {
  if (!dialog.open || window.innerWidth <= 700) {
    caseSidebarOpening.style.removeProperty('min-height');
    return;
  }
  const openingTop = caseSidebarOpening.getBoundingClientRect().top;
  const coverBottom = caseCover.getBoundingClientRect().bottom;
  const targetHeight = coverBottom - openingTop;
  if (targetHeight > 0) caseSidebarOpening.style.minHeight = `${Math.round(targetHeight)}px`;
};

const caseOpeningObserver = new ResizeObserver(syncCaseOpeningAlignment);
caseOpeningObserver.observe(caseCover);
window.addEventListener('resize', syncCaseOpeningAlignment);

const cases = {
  shen: {
    title: '沈管家 AI 数字员工',
    titleHtml: '沈管家<br>AI 数字员工',
    kicker: 'AI 数字员工 / 多端产品设计',
    summary: '沈管家 AI 数字员工以 AI 协同为核心，串联移动应用、PC 工作台、四套后台系统与品牌官网。设计以统一的任务入口和跨端体验为目标，让不同角色都能快速理解产品、发起工作并持续跟进结果。',
    tags: ['信息架构', '多端体验', '组件规范', '界面动效'],
    facts: [['项目类型', '企业级 AI 数字员工'], ['交付范围', 'ToC / ToB / Web'], ['设计重点', '统一入口与跨端体验一致性']],
    body: '我从业务角色、任务入口与信息流转三个维度重新梳理产品结构。设计不以单一页面为终点，而是把用户从认识产品、发起任务、调用数字员工到查看结果的过程，组织为一条可理解、可衔接、可持续扩展的体验链路。',
    detailSections: [[
      '前期调研与设计方法',
      [
        '项目初期，我通过产品文档梳理、现有界面分析、业务流程拆解和竞品研究，了解不同角色的工作目标、使用场景与核心任务。',
        '调研重点不仅关注正常流程，也关注跨端切换、权限差异、异常状态和低频边缘场景。通过角色—任务地图，将普通用户、企业管理者、租户、服务商和平台运营人员的需求整理为可执行的产品路径。',
        '在设计过程中，我持续与产品经理沟通不同平台的定位、功能优先级和开发边界，明确官网负责产品认知与转化，App 聚焦即时发起与跟进，PC 承接复杂协作，后台系统服务不同管理角色。'
      ]
    ]],
    chapterSections: [
      {
        id: 'app-mobile',
        index: '01',
        eyebrow: 'App 手机端',
        title: '即时发起与任务跟进',
        paragraphs: [
          'App 面向用户随时发起和跟进任务的移动场景，围绕智能对话、任务中心、数字员工、技能、日程与消息建立核心体验。',
          '前期通过梳理用户在移动场景中的操作动机和任务频率，判断哪些信息需要优先呈现，哪些复杂设置可以延后或转移至 PC 端。',
          '设计减少复杂配置和信息干扰，让用户能够通过自然语言快速表达需求，并清楚了解任务状态、执行进度和下一步操作。'
        ],
        focus: ['即时发起', '状态反馈', '任务跟进', '轻量操作']
      },
      {
        id: 'app-pc',
        index: '01',
        eyebrow: 'App PC 端',
        title: '复杂任务与深度协作',
        paragraphs: [
          'PC 端承接信息量更大、操作步骤更多的工作场景，覆盖智能工作台、任务详情、数字员工管理与月度日程。',
          '在前期分析中，我重点梳理用户处理复杂任务时的信息查看顺序、多任务并行方式和跨页面操作路径，明确 App 与 PC 的功能分工，避免简单复制移动端界面。',
          'PC 端通过更完整的信息层级和工作区域，帮助用户同时处理多个任务、查看执行结果，并在不同数字员工之间保持连续协作。'
        ],
        focus: ['复杂任务', '多任务协作', '信息管理', '跨端连续性']
      },
      {
        id: 'backend',
        index: '02',
        eyebrow: '四套核心后台系统',
        title: '多角色权限与管理效率',
        paragraphs: [
          '后台系统分别服务数字员工、租户、服务商和平台运营等不同角色。前期通过业务流程和权限关系梳理，明确各角色能够查看的数据、需要完成的任务以及不同操作之间的影响范围。',
          '设计进一步划分四套后台的业务边界、共用能力和差异化功能，并结合开发实现方式，建立可复用的导航、表格、筛选、状态和反馈组件。',
          '四套系统共享统一的组件规范和操作语言，同时根据角色保留不同的数据范围与管理重点，降低多系统之间的学习和切换成本。'
        ],
        focus: ['角色权限', '数据分层', '业务边界', '组件复用']
      },
      {
        id: 'website',
        index: '03',
        eyebrow: '品牌与产品官网',
        title: '产品认知与用户转化',
        paragraphs: [
          '官网承担产品认知、能力解释与用户转化的任务。前期通过竞品官网分析、产品卖点梳理和目标用户需求整理，确定用户进入官网后最需要理解的信息。',
          '内容按照产品价值、核心能力、行业方案和体验入口进行组织，将内部业务语言转化为用户能够快速理解的产品表达。',
          '通过清晰的信息结构和一致的品牌视觉，让用户了解数字员工是什么、能够解决什么问题，以及如何开始使用。'
        ],
        focus: ['用户认知', '信息架构', '能力表达', '产品转化']
      }
    ],
    chapterNavigation: [
      { index: '01', label: 'App 界面 / PC 界面', children: [['app-mobile', 'App 手机端'], ['app-pc', 'App PC 端']] },
      { index: '02', label: '四套核心后台系统', target: 'backend' },
      { index: '03', label: '品牌与产品官网', target: 'website' }
    ],
    openingImage: './images/covers/shen-ai-digital-employee.jpg',
    highlights: [
      ['统一入口', '将核心业务能力收束为可理解的任务入口'],
      ['三类体验', '移动应用、后台系统与品牌官网协同呈现'],
      ['全平台交付', 'App 458 页 · PC 584 页 · 四套后台系统']
    ],
    overall: {
      index: '01',
      eyebrow: '从问题到方案',
      title: '让复杂业务，成为\n一个清晰的入口',
      problem: '业务涉及多角色、多端入口与不同工作频率：用户在官网理解产品价值，在 PC 处理复杂协作，在 App 完成即时跟进；后台又分别服务平台、租户、服务商与数字员工管理。入口与规则一旦分散，用户会在切换中反复理解“我该去哪里、下一步是什么”。',
      solution: '以任务链路为主线，建立一致的信息层级、能力命名与状态反馈。官网负责产品认知与转化，ToC 承接日常协作，ToB 为不同管理角色提供清晰的工作台。每一端保留适合自身场景的效率，同时共享同一套产品语言，让多端不再是割裂的工具集合。',
      methods: ['角色与任务地图', '能力分层', '状态系统', '组件规范']
    },
    images: [],
    projectLink: {
      href: 'https://www.butlershen.com',
      label: '访问官网，可下载 App 体验 ↗'
    },
    platforms: [
      {
        title: '移动应用（ToC）',
        type: 'App 界面 / PC 界面',
        description: '面向使用者的日常协作体验。PC 端承接复杂任务、深度协作与信息管理；App 端聚焦发起、跟进与即时响应，让任务保持连续。',
        layout: 'toc',
        collections: [
          {
            title: 'App 手机端',
            chapterId: 'app-mobile',
            description: '同尺寸手机界面，以一行连续呈现高频移动协作场景。',
            images: [
              { src: './images/butlershen/app/home-composer.jpg', label: '智能对话' },
              { src: './images/butlershen/app/tasks.jpg', label: '任务中心' },
              { src: './images/butlershen/app/digital-employees.jpg', label: '数字员工' },
              { src: './images/butlershen/app/skills.jpg', label: '技能管理' },
              { src: './images/butlershen/app/calendar.jpg', label: '日程' },
              { src: './images/butlershen/app/messages.jpg', label: '消息' }
            ]
          },
          {
            title: 'App PC 端',
            chapterId: 'app-pc',
            description: '同为 16:10 的桌面工作台界面，按一行一组展示复杂协作场景。',
            images: [
              { src: './images/butlershen/pc/home-macos.jpg', label: '智能工作台' },
              { src: './images/butlershen/pc/task-detail.jpg', label: '任务详情' },
              { src: './images/butlershen/pc/digital-employees.jpg', label: '数字员工管理' },
              { src: './images/butlershen/pc/calendar-month.jpg', label: '月度日程' }
            ]
          }
        ]
      },
      {
        title: '后台系统（ToB）',
        type: '四套核心后台系统',
        description: '针对不同管理角色拆分职责与数据视野，让服务商、数字员工、平台与租户都能在各自的工作台完成关键管理动作。',
        layout: 'backend',
        chapterId: 'backend',
        images: [
          { src: './images/butlershen/admin/digital-employees.svg', label: '数字员工后台' },
          { src: './images/butlershen/admin/tenant-console.svg', label: '租户后台' },
          { src: './images/butlershen/admin/provider.svg', label: '服务商后台' },
          { src: './images/butlershen/admin/master-console.svg', label: '总后台' }
        ]
      },
      {
        title: '官网（Web）',
        type: '品牌与产品官网',
        description: '以产品价值、核心能力与行业方案建立认知，并串联下载、定价与新闻内容，形成从了解产品到开始体验的完整路径。',
        source: 'https://www.butlershen.com',
        layout: 'website',
        chapterId: 'website',
        images: [
          { src: './images/butlershen/website/home.jpg', label: '官网首页' },
          { src: './images/butlershen/website/core-features.jpg', label: '核心功能' },
          { src: './images/butlershen/website/news.jpg', label: '新闻动态' },
          { src: './images/butlershen/website/solutions.jpg', label: '解决方案' }
        ]
      }
    ]
  },
  'little-e': {
    title: '小 E 管家',
    kicker: '智能家居 / 移动端产品设计',
    summary: '小 E 管家是一款面向家庭智能设备的移动端控制应用，围绕设备接入、空间管理、远程控制、场景联动与能源管理建立完整体验。设计通过清晰的设备状态、直观的控制反馈和一致的操作路径，降低智能家居的使用门槛，让用户能够更轻松地管理日常居住环境。',
    tags: ['信息架构', '设备控制', '状态反馈', '能源可视化'],
    facts: [['项目周期', '2025.01 - 2025.04'], ['设计范围', '用户研究 / 交互流程 / 移动端界面'], ['设计重点', '设备状态清晰与控制体验一致性']],
    body: '以“家庭—房间—设备”为核心结构，串联设备接入、日常控制、场景调节和能源管理，让用户始终理解设备在哪里、当前是什么状态，以及操作是否已经生效。',
    detailSections: [[
      '前期调研与设计方法',
      [
        '项目初期，我从家庭成员、房间、设备和使用场景四个维度梳理产品结构，分析用户从首次添加设备到长期使用的完整路径。结合竞品分析、任务流程和边缘场景，重点识别设备数量增加后可能出现的信息拥挤、状态混淆和控制层级过深等问题。',
        '设计过程中，我与产品经理共同确认设备接入方式、房间与设备的归属关系、控制权限以及不同设备的功能差异，并结合开发边界明确可复用的交互规则。通过低保真流程验证首页控制、设备添加、场景设置和异常反馈，再逐步建立高保真界面与组件规范。',
        '设计目标不是简单集合更多控制功能，而是让用户随时理解“设备在哪里、当前是什么状态、操作是否已经生效”，建立稳定、可信赖的智能家居体验。'
      ]
    ]],
    chapterSections: [
      {
        id: 'home-control',
        index: '01',
        eyebrow: '家庭状态与快捷控制',
        title: '一眼了解家庭与设备',
        paragraphs: [
          '首页将天气、房间和设备状态集中在一个可快速浏览的界面中。用户进入应用后，可以先了解家庭环境，再按照房间切换设备，减少在多个页面之间反复查找的操作成本。',
          '设备卡片同时呈现设备名称、连接状态和核心运行信息，并提供开关等高频操作。需要调整亮度、温度或运行模式时，再进入设备详情页。',
          'AI 助手作为辅助入口，用于承接语音控制和复杂指令，让用户能够用更自然的表达完成多个设备的协同操作。'
        ],
        focus: ['家庭状态总览', '房间切换', '设备快捷控制', 'AI 语音入口']
      },
      {
        id: 'device-control',
        index: '02',
        eyebrow: '设备控制与场景调节',
        title: '统一规则承接不同设备',
        paragraphs: [
          '不同智能设备具有不同的控制参数，但用户对操作结果的预期是一致的。界面采用统一的设备详情结构，将开关、核心参数、运行模式和定时功能放在相对稳定的位置。',
          '智能灯通过环形控件呈现亮度与色彩变化；空调界面突出当前温度，并将模式、风速和定时设置组织为可快速识别的控制模块。',
          '针对网络延迟、设备离线和指令执行失败等边缘场景，控制状态提供明确反馈，避免用户因重复点击产生错误操作。'
        ],
        focus: ['参数可视化', '即时反馈', '模式切换', '异常状态']
      },
      {
        id: 'device-onboarding',
        index: '03',
        eyebrow: '空间管理与设备接入',
        title: '用真实空间组织设备',
        paragraphs: [
          '以“家庭—房间—设备”作为基础管理结构，帮助用户根据真实居住空间组织设备。用户可以创建和命名房间，并在设备数量增加后依然保持清晰的查找路径。',
          '设备接入流程被拆分为选择房间、搜索设备、连接设备和确认结果四个阶段。每一步只呈现当前任务所需的信息，降低首次配置的不确定感。',
          '添加完成后，系统明确告知设备所属房间，并提供继续浏览或管理设备的入口，形成完整的任务闭环。'
        ],
        focus: ['空间层级', '设备搜索', '连接引导', '结果确认']
      },
      {
        id: 'energy',
        index: '04',
        eyebrow: '能源数据与智能提醒',
        title: '让能源变化可理解',
        paragraphs: [
          '能源模块将设备耗电信息转化为趋势图、周期对比和设备数据，帮助用户发现异常消耗，并了解不同设备对家庭能源支出的影响。',
          '通知中心按照能源提醒、设备预警和家庭事件进行分类。重要异常优先显示并提供下一步处理入口，普通信息则保持较低视觉权重。',
          '通过数据变化与具体设备建立关联，让用户能够根据实际使用情况作出更合理的控制决策。'
        ],
        focus: ['能源可视化', '设备对比', '异常预警', '通知分级']
      }
    ],
    chapterNavigation: [
      { index: '01', label: '家庭控制', target: 'home-control' },
      { index: '02', label: '设备调节', target: 'device-control' },
      { index: '03', label: '设备接入', target: 'device-onboarding' },
      { index: '04', label: '能源管理', target: 'energy' }
    ],
    openingImage: './images/projects/page-03.png',
    images: [],
    platforms: [
      {
        type: '家庭状态与快捷控制',
        chapterId: 'home-control',
        images: [
          { src: './images/projects/page-12.png', label: '首页控制交互流程' },
          { src: './images/projects/page-17.png', label: '首页与 AI 助手界面' }
        ]
      },
      {
        type: '设备控制与场景调节',
        chapterId: 'device-control',
        images: [
          { src: './images/projects/page-18.png', label: '智能灯与空调控制界面' }
        ]
      },
      {
        type: '空间管理与设备接入',
        chapterId: 'device-onboarding',
        images: [
          { src: './images/projects/page-13.png', label: '房间与设备添加流程' },
          { src: './images/projects/page-20.png', label: '添加设备高保真界面' }
        ]
      },
      {
        type: '能源数据与智能提醒',
        chapterId: 'energy',
        images: [
          { src: './images/projects/page-19.png', label: '能源可视化与通知界面' },
          { src: './images/projects/page-21.png', label: '小 E 管家界面总览' }
        ]
      }
    ]
  },
  xunlei: {
    title: '迅雷云盘 - 用户体验优化',
    kicker: '用户体验优化',
    summary: '迅雷云盘用户体验优化聚焦文件管理、内容查找与会员价值感三个关键问题。通过研究高频任务和使用障碍，重新组织文件结构、快捷操作、状态反馈与权益呈现，让管理过程更直接可控。',
    tags: ['竞品分析', '用户测试', '文件管理', '会员体验'],
    facts: [['优化目标', '降低文件管理与查找成本'], ['研究方法', '竞品分析 / 用户测试'], ['设计范围', '文件管理 / 会员体验']],
    body: '通过竞品分析与用户测试梳理高频问题，聚焦“文件不好找、管理不便、会员价值感弱”等体验断点。方案从文件结构、快捷操作、状态反馈与权益呈现四个方向优化关键路径。',
    detailSections: [
      ['设计方法', '通过竞品分析、用户测试与高频任务梳理，聚焦用户在“找文件、管文件、传文件、理解会员权益”中的体验断点。以任务完成效率为衡量标准，重新组织文件结构、快捷操作、状态反馈和权益说明。'],
      ['愿景与创新', '让云盘从单纯的存储工具，成为清晰、高效且具备掌控感的个人文件空间。创新方向是将文件管理与会员价值关联到具体任务中：用户在需要大文件传输、空间扩容或高速下载时，能够理解权益的实际作用。'],
      ['挑战', '文件数量增长后，用户难以定位内容；管理动作分散，批量操作成本高；上传、下载与传输状态不够清晰；会员权益容易以营销信息出现，缺少与用户任务的直接关联。'],
      ['解决方法', '优化首页与文件管理的信息优先级，强化搜索、最近访问、常用分类和快捷入口；补齐上传、下载、转存与传输过程的状态反馈；在空间、速度、文件管理等关键场景中解释会员权益，让权益信息与实际需求自然衔接。'],
      ['详细界面与功能', '首页集中展示云端存储、文件传输、下载管理、最近查看与常用功能；文件管理支持分类浏览、搜索、排序、批量选择、移动与删除；传输管理提供实时任务状态；云盘空间说明容量与扩容入口；会员模块清晰呈现速度、空间与管理能力。']
    ],
    openingImage: './images/covers/xunlei.jpeg',
    images: ['./images/projects/page-22.png', './images/projects/page-24.png', './images/projects/page-25.png', './images/projects/page-27.png', './images/projects/page-28.png', './images/projects/page-29.png', './images/projects/page-30.png', './images/projects/page-31.png', './images/projects/page-32.png']
  },
  'first-scene': {
    title: '第一现场 APP',
    kicker: '活动与互动体验设计',
    summary: '第一现场 APP 项目连接动漫节线下互动体验与线上专题传播，覆盖入口导览、互动操作、结果预览与分享。设计以统一的视觉节奏串联现场体验和移动端信息，让活动路径更完整、更容易参与。',
    tags: ['线下互动', 'Web / H5', '视觉指引', '活动传播'],
    facts: [['项目场景', '深圳动漫节线下互动体验区'], ['设计范围', '导览 / 360 度环拍 / 专题页'], ['延展内容', 'APP 弹窗 / 商城介绍 / 宣传物料']],
    body: '将线下体验流程拆解为入口引导、互动操作、结果预览与分享传播。线上活动专题页整合流程、电子导览和福利信息，以统一的视觉节奏连接现场与移动端。',
    openingImage: './images/covers/first-scene.jpeg',
    images: ['./images/projects/page-52.png', './images/projects/page-54.png', './images/projects/page-55.png', './images/projects/page-56.png', './images/projects/page-57.png']
  },
  concepts: {
    title: '其他概念性作品',
    kicker: '五组概念实践',
    summary: '这组概念性作品从数字体验、出版物、增强现实到互动装置展开，围绕远程共观、情感经济、舆论传播、身份表达与现代神话等主题，探索媒介形式如何承载社会议题与个人叙事。',
    tags: ['虚拟博物馆', 'Dopamine Husband', 'Focus & Fade News', 'The Mask You Live In', 'New Myths'],
    facts: [['作品数量', '5 组概念作品'], ['媒介探索', '虚拟空间 / 品牌 / AR / 装置 / 出版物'], ['主题线索', '远程共观 / 情感经济 / 舆论 / 身份 / 现代神话']],
    body: '五组作品分别从远程观展、情感经济、舆论传播、性别身份与现代神话切入，通过界面原型、品牌系统、增强现实、参与式活动和混合媒介装置建立完整叙事。',
    openingImage: './images/covers/concepts.jpeg',
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

const renderPlatformGrid = (platform, images) => `<div class="platform-grid">${images.map((image, imageIndex) => `
  <figure class="case-panel">
    <div class="platform-image"><img src="${image.src}" alt="${platform.title || platform.type} · ${image.label}" loading="lazy"></div>
    <figcaption><span>${String(imageIndex + 1).padStart(2, '0')}</span><strong>${image.label}</strong></figcaption>
  </figure>`).join('')}</div>`;

const renderPlatformMedia = (platform) => {
  if (!platform.collections) return renderPlatformGrid(platform, platform.images);
  return `<div class="platform-collections">${platform.collections.map((collection) => `
    <section class="platform-collection"${collection.chapterId ? ` id="case-media-${collection.chapterId}" data-case-chapter="${collection.chapterId}"` : ''}>
      <header><h4>${collection.title}</h4></header>
      ${renderPlatformGrid(platform, collection.images)}
    </section>`).join('')}</div>`;
};

const renderChapterExperience = (selectedCase) => {
  if (!selectedCase.chapterSections) return '';
  const chapterCopy = selectedCase.chapterSections.map((chapter, index) => `
    <section class="case-chapter-copy-item${index === 0 ? ' is-active' : ''}" data-chapter-copy="${chapter.id}" aria-hidden="${index === 0 ? 'false' : 'true'}">
      <div class="case-chapter-heading">
        <span>${chapter.index}</span>
        <p>${chapter.eyebrow}</p>
      </div>
      <h3>${chapter.title}</h3>
      <div class="case-chapter-paragraphs">${chapter.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
      <div class="case-chapter-focus">
        <span>设计重点</span>
        <p>${chapter.focus.join(' · ')}</p>
        ${chapter.id === 'website' && selectedCase.projectLink ? `<a class="case-chapter-project-link" href="${selectedCase.projectLink.href}" target="_blank" rel="noreferrer">${selectedCase.projectLink.label}</a>` : ''}
      </div>
    </section>`).join('');
  const navigation = selectedCase.chapterNavigation.map((item, index) => `
    <div class="case-chapter-nav-group">
      <a class="case-chapter-nav-main${index === 0 ? ' is-active' : ''}" href="#case-media-${item.target || item.children[0][0]}" data-chapter-link="${item.target || item.children[0][0]}">
        <span>${item.index}</span><strong>${item.label}</strong>
      </a>
      ${item.children ? `<div class="case-chapter-nav-children">${item.children.map(([id, label], childIndex) => `<a class="${childIndex === 0 ? 'is-active' : ''}" href="#case-media-${id}" data-chapter-link="${id}">${label}</a>`).join('')}</div>` : ''}
    </div>`).join('');
  return `
    <div class="case-chapter-copy">${chapterCopy}</div>
    <nav class="case-chapter-nav" aria-label="项目图片目录">
      <p class="case-chapter-nav-label">项目目录</p>
      ${navigation}
    </nav>`;
};

const setActiveCaseChapter = (chapterId) => {
  if (!chapterId) return;
  caseChapterExperience.querySelectorAll('[data-chapter-copy]').forEach((item) => {
    const isActive = item.dataset.chapterCopy === chapterId;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-hidden', String(!isActive));
  });
  caseChapterExperience.querySelectorAll('[data-chapter-link]').forEach((link) => {
    const linkId = link.dataset.chapterLink;
    const isDirectlyActive = linkId === chapterId;
    const isParentActive = link.classList.contains('case-chapter-nav-main')
      && link.closest('.case-chapter-nav-group')?.querySelector(`[data-chapter-link="${chapterId}"]`);
    link.classList.toggle('is-active', Boolean(isDirectlyActive || isParentActive));
    if (isDirectlyActive) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
};

let chapterScrollFrame = 0;
const syncCaseChapter = () => {
  if (caseChapterExperience.hidden) return;
  if (window.innerWidth <= 700) {
    caseChapterExperience.querySelectorAll('[data-chapter-copy]').forEach((item) => item.setAttribute('aria-hidden', 'false'));
    return;
  }
  const targets = [...dialog.querySelectorAll('[data-case-chapter]')];
  if (!targets.length) return;
  const anchor = Math.min(window.innerHeight * .42, 430);
  let activeId = targets[0].dataset.caseChapter;
  targets.forEach((target) => {
    if (target.getBoundingClientRect().top <= anchor) activeId = target.dataset.caseChapter;
  });
  setActiveCaseChapter(activeId);
};

dialog.addEventListener('scroll', () => {
  window.cancelAnimationFrame(chapterScrollFrame);
  chapterScrollFrame = window.requestAnimationFrame(syncCaseChapter);
});
window.addEventListener('resize', syncCaseChapter);

caseChapterExperience.addEventListener('click', (event) => {
  const link = event.target.closest('[data-chapter-link]');
  if (!link) return;
  event.preventDefault();
  const target = dialog.querySelector(`#case-media-${link.dataset.chapterLink}`);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('.project').forEach((project) => {
  project.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedCase = cases[project.dataset.case];
    dialog.dataset.case = project.dataset.case;
    dialogTitle.innerHTML = selectedCase.titleHtml || selectedCase.title;
    caseKicker.textContent = selectedCase.kicker;
    caseSummary.textContent = selectedCase.summary;
    caseTags.innerHTML = `<span>项目特点</span><strong>${selectedCase.tags.join('，')}</strong>`;
    caseFacts.innerHTML = selectedCase.facts.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('');
    caseBody.innerHTML = selectedCase.detailSections ? '' : `<p>${selectedCase.body}</p>`;
    caseDetailNotes.innerHTML = selectedCase.detailSections
      ? selectedCase.detailSections.map(([title, content], index) => {
        const contentMarkup = Array.isArray(content)
          ? selectedCase.chapterSections
            ? `<div class="case-research-copy">${content.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>`
            : `<ul class="case-feature-list">${content.map((item) => `<li>${item}</li>`).join('')}</ul>`
          : `<p>${content}</p>`;
        return `<section class="case-copy-panel" style="--reveal-delay:${Math.min(index, 3) * 45}ms"><h3>${title}</h3>${contentMarkup}</section>`;
      }).join('')
      : '';
    caseChapterExperience.hidden = !selectedCase.chapterSections;
    caseChapterExperience.innerHTML = renderChapterExperience(selectedCase);
    caseAction.hidden = Boolean(selectedCase.chapterSections);
    caseAction.innerHTML = `<span>项目案例 / 2026</span>${selectedCase.projectLink ? `<a class="case-project-link" href="${selectedCase.projectLink.href}" target="_blank" rel="noreferrer">${selectedCase.projectLink.label}</a>` : ''}<span>向下浏览 ↓</span>`;
    caseGallery.classList.remove('has-groups', 'has-platforms');
    const openingMedia = selectedCase.openingImage
      ? `<img class="case-opening-image case-panel" src="${selectedCase.openingImage}" alt="${selectedCase.title} 项目封面">`
      : '';
    if (selectedCase.platforms) {
      if (!selectedCase.detailSections) {
        const overallNotes = selectedCase.overall ? [
          ['问题', selectedCase.overall.problem],
          ['解决方案', selectedCase.overall.solution]
        ] : [];
        const highlightNotes = (selectedCase.highlights || []).map(([title, detail]) => [title, detail]);
        const platformNotes = selectedCase.platforms.map((platform) => ['', platform.description]);
        caseDetailNotes.innerHTML = [...overallNotes, ...highlightNotes, ...platformNotes].map(([title, content]) => `<section>${title ? `<h3>${title}</h3>` : ''}<p>${content}</p></section>`).join('');
      }
      caseCover.innerHTML = openingMedia;
      caseGallery.classList.add('has-platforms');
      caseGallery.innerHTML = selectedCase.platforms.map((platform, index) => `
        <section class="platform-group case-copy-panel${platform.layout ? ` is-${platform.layout}` : ''}" id="${platform.chapterId ? `case-media-${platform.chapterId}` : `shen-platform-${index + 1}`}"${platform.chapterId ? ` data-case-chapter="${platform.chapterId}"` : ''} style="--reveal-delay:70ms">
          <header>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div><p>${platform.type}</p></div>
          </header>
          ${renderPlatformMedia(platform)}
        </section>`).join('');
    } else if (selectedCase.groups) {
      caseDetailNotes.innerHTML = selectedCase.groups.map((group) => `<section><h3>${group.title}</h3><p>${group.description}</p></section>`).join('');
      caseCover.innerHTML = openingMedia;
      caseGallery.classList.add('has-groups');
      caseGallery.innerHTML = selectedCase.groups.map((group, index) => `
        <section class="concept-group">
          <header>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <div><p>${group.type}</p><h3>${group.title}</h3></div>
          </header>
          <div class="concept-grid">${group.images.map((src) => `<img class="case-panel" src="${src}" alt="${group.title} 作品页面" loading="lazy">`).join('')}</div>
        </section>`).join('');
    } else {
      caseCover.innerHTML = selectedCase.openingImage || selectedCase.images.length
        ? openingMedia || `<img class="case-opening-image case-panel" src="${selectedCase.images[0]}" alt="${selectedCase.title} 项目封面">`
        : '<p class="case-note case-panel">沈管家界面将在获得可公开使用的产品截图后补充；当前案例已保留项目范围、职责与交付信息。</p>';
      const galleryImages = selectedCase.openingImage ? selectedCase.images : selectedCase.images.slice(1);
      caseGallery.innerHTML = galleryImages.map((src) => `<img class="case-panel" src="${src}" alt="${selectedCase.title} 项目页面" loading="lazy">`).join('');
    }
    dialog.showModal();
    dialog.focus({ preventScroll: true });
    resetInterfaceScroll();
    window.requestAnimationFrame(() => window.requestAnimationFrame(syncCaseOpeningAlignment));
    window.requestAnimationFrame(syncCaseChapter);
    window.requestAnimationFrame(() => {
      dialog.querySelectorAll('.case-panel, .case-copy-panel').forEach((panel) => caseRevealObserver.observe(panel));
    });
  });
});

document.querySelectorAll('.dialog-close').forEach((button) => button.addEventListener('click', () => {
  dialog.close();
  resetInterfaceScroll();
}));

dialog.addEventListener('click', (event) => {
  const image = event.target.closest('.case-visual-column img');
  if (!image) return;
  event.preventDefault();
  imageLightboxImage.src = image.currentSrc || image.src;
  imageLightboxImage.alt = image.alt;
  imageLightboxCaption.textContent = image.alt;
  imageLightbox.showModal();
});

imageLightbox.querySelector('.image-lightbox-close').addEventListener('click', () => imageLightbox.close());
imageLightbox.addEventListener('click', (event) => {
  if (event.target === imageLightbox) imageLightbox.close();
});

const caseRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      caseRevealObserver.unobserve(entry.target);
    }
  });
}, { root: dialog, rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const menuTrigger = document.querySelector('.menu-trigger');
const menuOverlay = document.querySelector('.menu-overlay');
const menuClose = document.querySelector('.menu-close');
const setMenuOpen = (isOpen) => {
  menuOverlay.classList.toggle('is-open', isOpen);
  menuOverlay.setAttribute('aria-hidden', String(!isOpen));
  menuTrigger.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-is-open', isOpen);
};

menuTrigger.addEventListener('click', () => setMenuOpen(true));
menuClose.addEventListener('click', () => setMenuOpen(false));
menuOverlay.querySelector('.menu-backdrop').addEventListener('click', () => setMenuOpen(false));
menuOverlay.querySelectorAll('.menu-links a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

window.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
});

window.addEventListener('load', () => {
  resetInterfaceScroll();
  window.setTimeout(() => document.body.classList.add('is-loaded'), 350);
});

window.addEventListener('pageshow', resetInterfaceScroll);
