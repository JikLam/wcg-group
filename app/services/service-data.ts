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
  content: Record<Lang, ServiceCopy>;
};

export const services: ServiceRecord[] = [
  {
    slug: "entertainment-production",
    index: 1,
    content: {
      tc: {
        title: "影視娛樂製作",
        short: "整合內容、製作與現場體驗，連結文化創意與商業價值。",
        overview: "由概念策劃、內容製作至現場執行，我們協調創意、製作及技術團隊，為企業與文化娛樂項目建立一致而具感染力的觀眾體驗。",
        offerings: ["商演及大型活動策劃製作", "專業展覽與品牌發布", "影視及數碼內容製作", "沉浸式體驗與互動內容"],
        audiences: ["品牌及企業市場團隊", "活動主辦方與場地營運者", "文化、娛樂及內容機構"],
      },
      sc: {
        title: "影视娱乐制作",
        short: "整合内容、制作与现场体验，连接文化创意与商业价值。",
        overview: "由概念策划、内容制作至现场执行，我们协调创意、制作及技术团队，为企业与文化娱乐项目建立一致而具感染力的观众体验。",
        offerings: ["商演及大型活动策划制作", "专业展览与品牌发布", "影视及数字内容制作", "沉浸式体验与互动内容"],
        audiences: ["品牌及企业市场团队", "活动主办方与场地运营者", "文化、娱乐及内容机构"],
      },
      en: {
        title: "Entertainment Production",
        short: "Connecting cultural creativity and commercial value through content, production and live experiences.",
        overview: "From concept development and content production to on-site delivery, we coordinate creative, production and technical teams to create coherent, engaging audience experiences for corporate and cultural entertainment projects.",
        offerings: ["Live shows and large-scale event production", "Professional exhibitions and brand launches", "Screen and digital content production", "Immersive experiences and interactive content"],
        audiences: ["Brands and corporate marketing teams", "Event organisers and venue operators", "Cultural, entertainment and content organisations"],
      },
    },
  },
  {
    slug: "classic-automotive",
    index: 2,
    content: {
      tc: {
        title: "經典名車業務",
        short: "圍繞珍藏汽車文化，發展展覽、會所、品牌體驗與專業服務。",
        overview: "以經典汽車文化為核心，我們策劃收藏展示、會員體驗及品牌活動，並連結車輛護理與專業技術資源，建立兼具文化、社群及商業價值的平台。",
        offerings: ["經典名車博物館與主題展覽", "會員會所及收藏家活動", "汽車品牌門店與體驗活動", "車輛護理、維修與資源協調"],
        audiences: ["經典汽車收藏家及愛好者", "汽車品牌與生活品味品牌", "商業地產、展覽及活動機構"],
      },
      sc: {
        title: "经典名车业务",
        short: "围绕珍藏汽车文化，发展展览、会所、品牌体验与专业服务。",
        overview: "以经典汽车文化为核心，我们策划收藏展示、会员体验及品牌活动，并连接车辆护理与专业技术资源，建立兼具文化、社群及商业价值的平台。",
        offerings: ["经典名车博物馆与主题展览", "会员会所及收藏家活动", "汽车品牌门店与体验活动", "车辆护理、维修与资源协调"],
        audiences: ["经典汽车收藏家及爱好者", "汽车品牌与生活品味品牌", "商业地产、展览及活动机构"],
      },
      en: {
        title: "Classic Automotive",
        short: "Developing exhibitions, clubs, brand experiences and specialist services around collector-car culture.",
        overview: "Centred on classic automotive culture, we develop collection showcases, membership experiences and brand events while connecting vehicle-care and technical resources into a platform with cultural, community and commercial value.",
        offerings: ["Classic-car museums and themed exhibitions", "Members’ clubs and collector events", "Automotive brand stores and experiences", "Vehicle care, maintenance and resource coordination"],
        audiences: ["Classic-car collectors and enthusiasts", "Automotive and lifestyle brands", "Commercial property, exhibition and event organisations"],
      },
    },
  },
  {
    slug: "innovation-technology",
    index: 3,
    content: {
      tc: {
        title: "創新科技研發",
        short: "以人工智能、物聯網及數據技術，協助企業建立可信賴的數碼能力。",
        overview: "我們由實際業務場景出發，整合人工智能、物聯網及數據應用，協助企業規劃可落地的數碼方案，提升流程效率、資訊可信度及客戶互動。",
        offerings: ["AIoT 智能設備與場景應用", "產品防偽、追蹤及溯源方案", "企業系統及數據流程整合", "智慧互動與客戶體驗設計"],
        audiences: ["正在推動數碼轉型的企業", "重視產品認證與供應鏈透明度的品牌", "需要智慧服務的場地與機構"],
      },
      sc: {
        title: "创新科技研发",
        short: "以人工智能、物联网及数据技术，协助企业建立可信赖的数字能力。",
        overview: "我们由实际业务场景出发，整合人工智能、物联网及数据应用，协助企业规划可落地的数字方案，提升流程效率、信息可信度及客户互动。",
        offerings: ["AIoT 智能设备与场景应用", "产品防伪、追踪及溯源方案", "企业系统及数据流程整合", "智慧互动与客户体验设计"],
        audiences: ["正在推动数字转型的企业", "重视产品认证与供应链透明度的品牌", "需要智慧服务的场地与机构"],
      },
      en: {
        title: "Innovation & Technology",
        short: "Applying AI, IoT and data technologies to build trusted digital capabilities for enterprises.",
        overview: "Starting with real operating needs, we combine AI, IoT and data applications to plan practical digital solutions that improve process efficiency, information integrity and customer interaction.",
        offerings: ["AIoT devices and smart-scenario applications", "Product authentication, tracking and traceability", "Enterprise systems and data-process integration", "Smart interaction and customer-experience design"],
        audiences: ["Enterprises pursuing digital transformation", "Brands focused on authentication and supply-chain transparency", "Venues and institutions requiring smart services"],
      },
    },
  },
  {
    slug: "digital-marketing",
    index: 4,
    content: {
      tc: {
        title: "數碼市場推廣",
        short: "從品牌策略到內容及績效營銷，建立一致而可衡量的市場影響力。",
        overview: "我們把品牌策略、內容、社交媒體及推廣活動連成一套清晰的市場方案，協助企業在不同接觸點保持一致定位，並以可衡量的方式持續優化成效。",
        offerings: ["品牌及市場策略規劃", "內容生態與創意製作", "社交媒體營運與社群管理", "整合推廣及績效活動"],
        audiences: ["建立新品牌或推出新服務的企業", "需要提升市場增長與轉化的團隊", "零售、活動及消費品牌"],
      },
      sc: {
        title: "数字市场推广",
        short: "从品牌策略到内容及绩效营销，建立一致而可衡量的市场影响力。",
        overview: "我们把品牌策略、内容、社交媒体及推广活动连接成一套清晰的市场方案，协助企业在不同接触点保持一致定位，并以可衡量的方式持续优化成效。",
        offerings: ["品牌及市场策略规划", "内容生态与创意制作", "社交媒体运营与社群管理", "整合推广及绩效活动"],
        audiences: ["建立新品牌或推出新服务的企业", "需要提升市场增长与转化的团队", "零售、活动及消费品牌"],
      },
      en: {
        title: "Digital Marketing",
        short: "Building consistent, measurable market impact from brand strategy to content and performance.",
        overview: "We connect brand strategy, content, social media and campaigns into a clear market programme, helping organisations maintain consistent positioning across touchpoints and improve performance through measurable learning.",
        offerings: ["Brand and market strategy", "Content ecosystems and creative production", "Social media operations and community management", "Integrated and performance campaigns"],
        audiences: ["Businesses launching a brand or new service", "Teams seeking stronger growth and conversion", "Retail, event and consumer brands"],
      },
    },
  },
  {
    slug: "family-succession",
    index: 5,
    content: {
      tc: {
        title: "家族傳承規劃",
        short: "以長遠視角協調家族治理、資產安排與跨境發展需要。",
        overview: "我們協助家族梳理長遠目標、持份者需要及跨地域考量，建立清晰的規劃框架，並按需要協調法律、稅務、教育及其他相關專業顧問。",
        offerings: ["家族治理與溝通框架", "資產安排需求梳理", "跨境發展與資源協調", "下一代教育及升學規劃"],
        audiences: ["企業創辦人及家族企業", "正準備世代交接的家庭", "具有跨境生活與發展需要的家族"],
      },
      sc: {
        title: "家族传承规划",
        short: "以长远视角协调家族治理、资产安排与跨境发展需要。",
        overview: "我们协助家族梳理长远目标、持份者需要及跨地域考虑，建立清晰的规划框架，并按需要协调法律、税务、教育及其他相关专业顾问。",
        offerings: ["家族治理与沟通框架", "资产安排需求梳理", "跨境发展与资源协调", "下一代教育及升学规划"],
        audiences: ["企业创办人及家族企业", "正准备世代交接的家庭", "具有跨境生活与发展需要的家族"],
      },
      en: {
        title: "Family Succession Planning",
        short: "Taking a long-term view of family governance, asset arrangements and cross-border needs.",
        overview: "We help families clarify long-term objectives, stakeholder needs and cross-market considerations, creating a structured planning framework and coordinating legal, tax, education and other relevant professional advisers where required.",
        offerings: ["Family governance and communication frameworks", "Asset-arrangement needs assessment", "Cross-border development and resource coordination", "Next-generation education planning"],
        audiences: ["Founders and family enterprises", "Families preparing for generational transition", "Families with cross-border living and development needs"],
      },
    },
  },
  {
    slug: "corporate-finance",
    index: 6,
    content: {
      tc: {
        title: "企業融資策劃",
        short: "協助中小企梳理融資需要，連接合適的企業發展方案。",
        overview: "我們由企業目標、營運狀況及資金用途出發，協助中小企整理融資需求與資料，規劃合適的資金方向，並連接相關專業資源。所有安排須視乎評估及適用條款。",
        offerings: ["企業融資需求評估", "資金用途與現金流規劃", "信用狀況及文件準備諮詢", "中小企方案與專業資源配對"],
        audiences: ["需要營運資金的中小企", "正在擴展業務的成長型企業", "需要整理融資資料與方向的創業團隊"],
      },
      sc: {
        title: "企业融资策划",
        short: "协助中小企梳理融资需要，连接合适的企业发展方案。",
        overview: "我们由企业目标、运营状况及资金用途出发，协助中小企整理融资需求与资料，规划合适的资金方向，并连接相关专业资源。所有安排须视乎评估及适用条款。",
        offerings: ["企业融资需求评估", "资金用途与现金流规划", "信用状况及文件准备咨询", "中小企方案与专业资源配对"],
        audiences: ["需要运营资金的中小企", "正在扩展业务的成长型企业", "需要整理融资资料与方向的创业团队"],
      },
      en: {
        title: "Corporate Finance Advisory",
        short: "Helping SMEs clarify funding needs and connect with appropriate business-development solutions.",
        overview: "Starting with business objectives, operating conditions and intended use of funds, we help SMEs organise funding needs and supporting information, consider suitable capital directions and connect with relevant professional resources. All arrangements remain subject to assessment and applicable terms.",
        offerings: ["Business funding-needs assessment", "Use-of-funds and cash-flow planning", "Credit-status and document-preparation consultation", "SME solution and professional-resource matching"],
        audiences: ["SMEs requiring working capital", "Growth businesses preparing to expand", "Founding teams organising funding information and direction"],
      },
    },
  },
  {
    slug: "brand-development",
    index: 7,
    content: {
      tc: {
        title: "品牌建設發展",
        short: "由品牌定位延伸至空間及資產管理，建立一致的企業體驗。",
        overview: "我們由品牌核心與市場定位出發，建立清晰的視覺、內容及管理框架，再延伸至知識產權、商業空間與品牌資產應用，讓品牌在每個接觸點保持一致。",
        offerings: ["品牌創建與定位策略", "品牌識別及日常管理", "知識產權與品牌資產協調", "商業空間及體驗顧問"],
        audiences: ["正在建立新品牌的企業", "需要品牌更新與整合的組織", "商業空間、地產及體驗項目"],
      },
      sc: {
        title: "品牌建设发展",
        short: "由品牌定位延伸至空间及资产管理，建立一致的企业体验。",
        overview: "我们由品牌核心与市场定位出发，建立清晰的视觉、内容及管理框架，再延伸至知识产权、商业空间与品牌资产应用，让品牌在每个接触点保持一致。",
        offerings: ["品牌创建与定位策略", "品牌识别及日常管理", "知识产权与品牌资产协调", "商业空间及体验顾问"],
        audiences: ["正在建立新品牌的企业", "需要品牌更新与整合的组织", "商业空间、地产及体验项目"],
      },
      en: {
        title: "Brand Development",
        short: "Extending brand positioning into spatial and asset management for a consistent corporate experience.",
        overview: "Beginning with brand purpose and market positioning, we create a clear visual, content and management framework, then extend it into intellectual property, commercial spaces and brand-asset applications for consistency across every touchpoint.",
        offerings: ["Brand creation and positioning strategy", "Brand identity and ongoing management", "Intellectual-property and brand-asset coordination", "Commercial space and experience consultancy"],
        audiences: ["Businesses creating a new brand", "Organisations requiring brand renewal and integration", "Commercial-space, property and experience projects"],
      },
    },
  },
];

export const servicePageLabels = {
  tc: {
    brand: "鉅瀧集團", back: "返回集團首頁", allServices: "七大集團服務", overview: "服務概覽",
    offerings: "專業服務", audiences: "適合對象", process: "合作流程", other: "其他集團服務",
    steps: [["了解需要", "釐清目標、現況與項目範圍。"], ["整合方案", "組合合適的專業團隊與執行方向。"], ["推進落地", "按階段協調、執行及檢視成果。"]],
    contactTitle: "與我們討論你的需要", contactText: "告訴我們你的目標，我們會協助梳理合適的服務方向。", contact: "聯絡我們", language: "語言",
  },
  sc: {
    brand: "钜泷集团", back: "返回集团首页", allServices: "七大集团服务", overview: "服务概览",
    offerings: "专业服务", audiences: "适合对象", process: "合作流程", other: "其他集团服务",
    steps: [["了解需要", "厘清目标、现况与项目范围。"], ["整合方案", "组合合适的专业团队与执行方向。"], ["推进落地", "按阶段协调、执行及检视成果。"]],
    contactTitle: "与我们讨论你的需要", contactText: "告诉我们你的目标，我们会协助梳理合适的服务方向。", contact: "联系我们", language: "语言",
  },
  en: {
    brand: "WCG", back: "Back to Group", allServices: "Seven Group Services", overview: "Service overview",
    offerings: "Professional services", audiences: "Who we support", process: "How we work", other: "Other Group services",
    steps: [["Understand", "Clarify objectives, current conditions and project scope."], ["Integrate", "Bring together the right expertise and delivery direction."], ["Deliver", "Coordinate implementation and review outcomes by stage."]],
    contactTitle: "Let’s discuss what you need", contactText: "Tell us your objectives and we will help identify the right service direction.", contact: "Contact us", language: "Language",
  },
} as const;

export function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}
