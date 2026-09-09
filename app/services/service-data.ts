export type Lang = "tc" | "sc" | "en";

export type ServiceCopy = {
  title: string;
  short: string;
  overview: string;
  offerings: string[];
  audiences: string[];
};

export type ServiceRecord = {
  slug: string;
  index: number;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: string;
  imageFit: "cover" | "contain";
  content: Record<Lang, ServiceCopy>;
};

export const services: ServiceRecord[] = [
  {
    slug: "entertainment-production", index: 1, image: "/services/entertainment-production.jpg", imageWidth: 956, imageHeight: 1400, imagePosition: "center 44%", imageFit: "cover",
    content: {
      tc: { title: "影視娛樂製作", short: "由創意策劃到現場執行，提供一站式影視、活動及數碼直播服務。", overview: "我們整合創意、製作與技術團隊，服務涵蓋線上直播、線下活動及全流程影像製作，協助企業與品牌以一致而具感染力的內容連結觀眾。", offerings: ["網上研討會、高清直播及數碼人播報", "多機位現場拍攝、典禮及活動執行", "音響、燈光、舞台及背景製作", "廣告、品牌短片、航拍及後期製作"], audiences: ["品牌及企業市場團隊", "活動主辦方與文化娛樂機構", "需要直播或影像製作的企業"] },
      sc: { title: "影视娱乐制作", short: "由创意策划到现场执行，提供一站式影视、活动及数字直播服务。", overview: "我们整合创意、制作与技术团队，服务涵盖线上直播、线下活动及全流程影像制作，协助企业与品牌以一致而具感染力的内容连接观众。", offerings: ["网上研讨会、高清直播及数字人播报", "多机位现场拍摄、典礼及活动执行", "音响、灯光、舞台及背景制作", "广告、品牌短片、航拍及后期制作"], audiences: ["品牌及企业市场团队", "活动主办方与文化娱乐机构", "需要直播或影像制作的企业"] },
      en: { title: "Entertainment Production", short: "One-stop screen, event and digital-live production from creative planning to on-site delivery.", overview: "We connect creative, production and technical teams across online broadcasting, live events and end-to-end video production, helping organisations engage audiences through coherent, compelling content.", offerings: ["Webinars, HD streaming and digital-presenter content", "Multi-camera filming, ceremonies and event delivery", "Sound, lighting, stage and backdrop production", "Advertising, brand films, aerial filming and post-production"], audiences: ["Brand and corporate marketing teams", "Event organisers and entertainment organisations", "Organisations requiring streaming or video production"] },
    },
  },
  {
    slug: "corporate-finance", index: 2, image: "/services/corporate-finance.png", imageWidth: 2000, imageHeight: 1334, imagePosition: "center bottom", imageFit: "contain",
    content: {
      tc: { title: "企業融資及上市", short: "從資金需要、融資結構到上市準備，協助企業建立清晰的資本發展路徑。", overview: "我們由企業現金流、盈利能力及資金用途出發，協助梳理融資需要、債務與股權結構、還款或回報安排，並按需要協調合資格的法律、會計、稅務及資本市場專業人士。", offerings: ["資金需要及現金流評估", "債務、股權及政策融資方向規劃", "上市前財務、法律及管治準備協調", "融資進度監察與方案檢視"], audiences: ["需要營運或擴展資金的企業", "正考慮引入投資者的成長型企業", "準備上市或改善企業管治的公司"] },
      sc: { title: "企业融资及上市", short: "从资金需要、融资结构到上市准备，协助企业建立清晰的资本发展路径。", overview: "我们由企业现金流、盈利能力及资金用途出发，协助梳理融资需要、债务与股权结构、还款或回报安排，并按需要协调合资格的法律、会计、税务及资本市场专业人士。", offerings: ["资金需要及现金流评估", "债务、股权及政策融资方向规划", "上市前财务、法律及管治准备协调", "融资进度监察与方案检视"], audiences: ["需要营运或扩展资金的企业", "正考虑引入投资者的成长型企业", "准备上市或改善企业管治的公司"] },
      en: { title: "Corporate Finance & Listing", short: "Clarifying the path from funding needs and capital structure to listing readiness.", overview: "Starting with cash flow, profitability and intended use of funds, we help businesses assess financing needs, consider debt and equity structures and plan repayment or return arrangements, coordinating qualified legal, accounting, tax and capital-market professionals where required.", offerings: ["Funding-needs and cash-flow assessment", "Debt, equity and policy-financing direction", "Pre-listing financial, legal and governance coordination", "Financing progress monitoring and review"], audiences: ["Businesses seeking working or expansion capital", "Growth companies considering new investors", "Companies preparing for listing or stronger governance"] },
    },
  },
  {
    slug: "lpa-franchise", index: 3, image: "/services/classic-automotive.jpg", imageWidth: 980, imageHeight: 549, imagePosition: "center center", imageFit: "cover",
    content: {
      tc: { title: "LPA 品牌及加盟", short: "以經典汽車文化與多元零售體驗，拓展品牌營運及加盟合作。", overview: "集團擁有 LPA 汽車品牌的全球獨家營運及加盟權，業務已拓展至中國八個城市。品牌生態涵蓋經典名車展示、收藏、銷售、維修與改裝，以及動漫娛樂與零售體驗，並為合作夥伴提供品牌授權、營運模式及支援服務。", offerings: ["國際經典名車博物館、會所及旗艦店", "汽車維修綜合體、護理及改裝門店", "動漫娛樂城、動漫 IP 店及模型車零售", "品牌授權、加盟模式與創業支援"], audiences: ["有意發展品牌業務的創業者", "具備場地、客戶網絡或營運資源的合作方", "汽車、文化娛樂及零售業投資者"] },
      sc: { title: "LPA 品牌及加盟", short: "以经典汽车文化与多元零售体验，拓展品牌营运及加盟合作。", overview: "集团拥有 LPA 汽车品牌的全球独家营运及加盟权，业务已拓展至中国八个城市。品牌生态涵盖经典名车展示、收藏、销售、维修与改装，以及动漫娱乐与零售体验，并为合作伙伴提供品牌授权、营运模式及支持服务。", offerings: ["国际经典名车博物馆、会所及旗舰店", "汽车维修综合体、护理及改装门店", "动漫娱乐城、动漫 IP 店及模型车零售", "品牌授权、加盟模式与创业支持"], audiences: ["有意发展品牌业务的创业者", "具备场地、客户网络或营运资源的合作方", "汽车、文化娱乐及零售业投资者"] },
      en: { title: "LPA Brand & Franchise", short: "Growing brand operations and franchise partnerships through classic-car culture and diverse retail experiences.", overview: "The Group holds global exclusive operating and franchise rights for the LPA automotive brand, with operations expanded to eight cities in China. Its ecosystem spans classic-car display, collection, sales, maintenance and customisation, alongside animation entertainment and retail experiences, supported by brand licensing and operating guidance for partners.", offerings: ["International classic-car museums, clubs and flagship stores", "Maintenance complexes, car-care and customisation stores", "Animation entertainment, IP stores and model-car retail", "Brand licensing, franchise models and entrepreneur support"], audiences: ["Entrepreneurs developing a branded business", "Partners with venues, customer networks or operating resources", "Automotive, entertainment and retail investors"] },
    },
  },
  {
    slug: "innovation-technology", index: 4, image: "/services/innovation-technology.jpg", imageWidth: 1000, imageHeight: 436, imagePosition: "center center", imageFit: "cover",
    content: {
      tc: { title: "創新科技研發", short: "整合企業網絡、數據安全、數碼防偽及智能自動化，推進實際業務應用。", overview: "我們由企業實際場景出發，探索 SD-WAN、商用密碼技術、區塊鏈防偽、數據平台、數碼人與機械人自動化等方案，協助企業提升網絡效率、資訊可信度及營運智能化。", offerings: ["SD-WAN 企業網絡與跨區域管理", "數碼防偽、區塊鏈標籤及品牌保護", "數據庫與全渠道管理平台", "數碼人、數碼影視及機械人自動化方案"], audiences: ["正推動數碼轉型的企業", "重視網絡安全及產品真偽的品牌", "需要跨區域網絡或自動化方案的機構"] },
      sc: { title: "创新科技研发", short: "整合企业网络、数据安全、数字防伪及智能自动化，推进实际业务应用。", overview: "我们由企业实际场景出发，探索 SD-WAN、商用密码技术、区块链防伪、数据平台、数字人与机器人自动化等方案，协助企业提升网络效率、信息可信度及营运智能化。", offerings: ["SD-WAN 企业网络与跨区域管理", "数字防伪、区块链标签及品牌保护", "数据库与全渠道管理平台", "数字人、数字影视及机器人自动化方案"], audiences: ["正推动数字转型的企业", "重视网络安全及产品真伪的品牌", "需要跨区域网络或自动化方案的机构"] },
      en: { title: "Innovation & Technology", short: "Advancing practical applications through enterprise networks, data security, digital authentication and automation.", overview: "Starting with real operating scenarios, we explore SD-WAN, commercial cryptography, blockchain authentication, data platforms, digital humans and robotic automation to improve network efficiency, information integrity and intelligent operations.", offerings: ["SD-WAN enterprise networks and cross-region management", "Digital authentication, blockchain labels and brand protection", "Database and omnichannel management platforms", "Digital-human, digital-film and robotic automation solutions"], audiences: ["Enterprises pursuing digital transformation", "Brands focused on cyber security and product authenticity", "Organisations needing cross-region networks or automation"] },
    },
  },
  {
    slug: "construction-engineering", index: 5, image: "/services/brand-development.jpg", imageWidth: 1600, imageHeight: 999, imagePosition: "center center", imageFit: "cover",
    content: {
      tc: { title: "建築建設工程", short: "由前期規劃到施工管理，協調建築及基礎設施項目的質量、安全、成本與進度。", overview: "服務範圍涵蓋住宅、商業、工業及公共建築，以及道路、橋樑、隧道與公共設施等基礎建設。我們按項目需要協調可行性研究、設計、審批、成本管理、施工及監督工作。", offerings: ["可行性研究、設計及技術評估", "住宅、商業、工業及公共建築工程", "道路、橋樑、隧道及公共設施項目", "審批協調、施工管理與質量安全監控"], audiences: ["物業發展商及企業業主", "公共設施與基礎建設項目團隊", "需要工程規劃及項目管理的機構"] },
      sc: { title: "建筑建设工程", short: "由前期规划到施工管理，协调建筑及基础设施项目的质量、安全、成本与进度。", overview: "服务范围涵盖住宅、商业、工业及公共建筑，以及道路、桥梁、隧道与公共设施等基础建设。我们按项目需要协调可行性研究、设计、审批、成本管理、施工及监督工作。", offerings: ["可行性研究、设计及技术评估", "住宅、商业、工业及公共建筑工程", "道路、桥梁、隧道及公共设施项目", "审批协调、施工管理与质量安全监控"], audiences: ["物业发展商及企业业主", "公共设施与基础建设项目团队", "需要工程规划及项目管理的机构"] },
      en: { title: "Construction & Engineering", short: "Coordinating quality, safety, cost and programme from early planning through construction management.", overview: "Our scope spans residential, commercial, industrial and public buildings, alongside roads, bridges, tunnels and public infrastructure. According to each project, we coordinate feasibility, design, approvals, cost management, construction and supervision.", offerings: ["Feasibility, design and technical assessment", "Residential, commercial, industrial and public buildings", "Road, bridge, tunnel and public-infrastructure projects", "Approval coordination, construction management and quality control"], audiences: ["Property developers and corporate owners", "Public-facility and infrastructure project teams", "Organisations requiring engineering and project management"] },
    },
  },
  {
    slug: "digital-marketing", index: 6, image: "/services/digital-marketing.jpg", imageWidth: 640, imageHeight: 400, imagePosition: "center center", imageFit: "cover",
    content: {
      tc: { title: "數碼市場推廣", short: "以搜尋、社交媒體、內容及自動化工具，建立可衡量的品牌增長。", overview: "我們整合搜尋引擎優化與廣告、社交媒體、內容、電郵、即時通訊及 AI 自動化，協助企業建立清晰的數碼接觸點，精準連結目標客群，並以數據持續檢視成效。", offerings: ["搜尋引擎優化及搜尋廣告", "社交媒體內容與社群營運", "電郵、即時通訊及全渠道推廣", "AI 客服、聊天機械人與流程自動化"], audiences: ["需要建立網上曝光的企業", "重視客戶轉化與成效衡量的品牌", "希望整合客戶溝通渠道的團隊"] },
      sc: { title: "数字市场推广", short: "以搜索、社交媒体、内容及自动化工具，建立可衡量的品牌增长。", overview: "我们整合搜索引擎优化与广告、社交媒体、内容、电邮、即时通讯及 AI 自动化，协助企业建立清晰的数字接触点，精准连接目标客群，并以数据持续检视成效。", offerings: ["搜索引擎优化及搜索广告", "社交媒体内容与社群营运", "电邮、即时通讯及全渠道推广", "AI 客服、聊天机器人与流程自动化"], audiences: ["需要建立网上曝光的企业", "重视客户转化与成效衡量的品牌", "希望整合客户沟通渠道的团队"] },
      en: { title: "Digital Marketing", short: "Building measurable brand growth through search, social, content and automation.", overview: "We integrate search optimisation and advertising, social media, content, email, instant messaging and AI automation to create clear digital touchpoints, reach target audiences and continuously review performance through data.", offerings: ["Search-engine optimisation and advertising", "Social content and community operations", "Email, messaging and omnichannel campaigns", "AI customer service, chatbots and workflow automation"], audiences: ["Businesses building online visibility", "Brands focused on conversion and measurement", "Teams integrating customer communication channels"] },
    },
  },
  {
    slug: "family-succession", index: 7, image: "/services/family-succession.jpg", imageWidth: 974, imageHeight: 1400, imagePosition: "center 35%", imageFit: "cover",
    content: {
      tc: { title: "家族傳承規劃", short: "以長遠的法律、財務及家族治理框架，守護財富、企業與核心價值。", overview: "家族傳承涉及資產分配、企業控制、家庭關係與價值延續。我們協助家族溝通目標、盤點資產及建立規劃方向，並按需要協調合資格的法律、會計、稅務與財務專業人士。", offerings: ["家族目標溝通與資產盤點", "遺囑、家族信託及保險方向梳理", "家族控股公司與企業傳承框架", "家族憲章、治理及下一代安排"], audiences: ["企業創辦人及家族企業", "正準備世代交接的家庭", "擁有跨境資產或複雜家庭需要的家族"] },
      sc: { title: "家族传承规划", short: "以长远的法律、财务及家族治理框架，守护财富、企业与核心价值。", overview: "家族传承涉及资产分配、企业控制、家庭关系与价值延续。我们协助家族沟通目标、盘点资产及建立规划方向，并按需要协调合资格的法律、会计、税务与财务专业人士。", offerings: ["家族目标沟通与资产盘点", "遗嘱、家族信托及保险方向梳理", "家族控股公司与企业传承框架", "家族宪章、治理及下一代安排"], audiences: ["企业创办人及家族企业", "正准备世代交接的家庭", "拥有跨境资产或复杂家庭需要的家族"] },
      en: { title: "Family Succession Planning", short: "Protecting wealth, enterprise continuity and core values through long-term legal, financial and family-governance frameworks.", overview: "Succession involves asset distribution, business control, family relationships and shared values. We help families clarify goals, review assets and structure a planning direction, coordinating qualified legal, accounting, tax and financial professionals where required.", offerings: ["Family-goal discussion and asset review", "Direction for wills, family trusts and insurance", "Family holding-company and business-succession frameworks", "Family constitutions, governance and next-generation planning"], audiences: ["Founders and family enterprises", "Families preparing for generational transition", "Families with cross-border assets or complex needs"] },
    },
  },
];

export const servicePageLabels = {
  tc: { brand: "鉅瀧集團", back: "返回集團首頁", allServices: "七大集團服務", overview: "服務概覽", offerings: "專業服務", audiences: "適合對象", process: "合作流程", other: "其他集團服務", steps: [["了解需要", "釐清目標、現況與項目範圍。"], ["整合方案", "組合合適的專業團隊與執行方向。"], ["推進落地", "按階段協調、執行及檢視成果。"]], contactTitle: "與我們討論你的需要", contactText: "告訴我們你的目標，我們會協助梳理合適的服務方向。具體服務須受相關專業資格、審批及正式協議約束。", contact: "聯絡我們", language: "語言" },
  sc: { brand: "钜泷集团", back: "返回集团首页", allServices: "七大集团服务", overview: "服务概览", offerings: "专业服务", audiences: "适合对象", process: "合作流程", other: "其他集团服务", steps: [["了解需要", "厘清目标、现况与项目范围。"], ["整合方案", "组合合适的专业团队与执行方向。"], ["推进落地", "按阶段协调、执行及检视成果。"]], contactTitle: "与我们讨论你的需要", contactText: "告诉我们你的目标，我们会协助梳理合适的服务方向。具体服务须受相关专业资格、审批及正式协议约束。", contact: "联系我们", language: "语言" },
  en: { brand: "WCG", back: "Back to Group", allServices: "Seven Group Services", overview: "Service overview", offerings: "Professional services", audiences: "Who we support", process: "How we work", other: "Other Group services", steps: [["Understand", "Clarify objectives, current conditions and project scope."], ["Integrate", "Bring together the right expertise and delivery direction."], ["Deliver", "Coordinate implementation and review outcomes by stage."]], contactTitle: "Let’s discuss what you need", contactText: "Tell us your objectives and we will help identify the right service direction. Specific services are subject to relevant professional qualifications, approvals and formal agreements.", contact: "Contact us", language: "Language" },
} as const;

const aliases: Record<string, string> = { "classic-automotive": "lpa-franchise", "brand-development": "construction-engineering" };

export function findService(slug: string) {
  return services.find((service) => service.slug === (aliases[slug] ?? slug));
}
