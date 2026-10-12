export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  category: string;
  service: string;
  serviceSlug: string;
  published: string;
  readingTime: string;
  summary: string;
  seoDescription: string;
  keywords: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  imagePrompt: string;
  intro: string;
  sections: InsightSection[];
  conclusion: string;
  sources: { label: string; url: string }[];
};

export const insights: InsightArticle[] = [
  {
    slug: "hong-kong-ipo-readiness-guide",
    title: "香港企業上市前準備：由財務基礎到管治架構的實務路線圖",
    category: "資本與企業發展",
    service: "企業融資及上市",
    serviceSlug: "corporate-finance",
    published: "2026-10-12",
    readingTime: "約 8 分鐘",
    summary: "上市不是提交申請前數月才開始的工作。本文整理香港企業由資金需求、財務紀錄、內部監控到專業團隊協調的上市前準備框架。",
    seoDescription: "了解香港企業上市前應如何準備財務紀錄、盈利模式、公司管治、內部監控及專業團隊，建立清晰的融資與上市路線圖。",
    keywords: ["香港上市準備", "企業融資", "IPO", "公司管治", "上市前規劃", "香港企業"],
    tags: ["企業融資", "上市準備", "資本市場", "公司管治"],
    image: "/insights/hong-kong-ipo-readiness.jpg",
    imageAlt: "Asian finance team reviewing IPO readiness in a Hong Kong boardroom",
    imagePrompt: "Asian finance team reviewing cash-flow dashboards, governance documents and IPO readiness in a premium Hong Kong boardroom, wide editorial photography, navy and gold palette.",
    intro: "對成長中的企業而言，上市可以是融資、提升品牌公信力及建立長期資本平台的一種選擇，但它並不是單一交易，而是一場對業務質素、財務透明度、管理制度及執行能力的全面檢驗。越早建立可持續的基礎，企業越能在正式啟動項目時減少反覆補資料、重整架構及延誤時間表的風險。",
    sections: [
      {
        heading: "先回答：企業為何需要上市",
        paragraphs: [
          "企業首先要把「需要資金」拆解成具體用途，例如擴充產能、拓展海外市場、併購、研發或優化資本結構。不同目標可能對應銀行融資、私募股權、策略投資者或公開市場，上市未必是唯一答案。",
          "清晰的資金用途亦會影響投資者如何理解企業。管理層應能解釋資金投入後如何形成收入、毛利、現金流或競爭壁壘，而不是只提出一個融資金額。",
        ],
        bullets: ["列明未來三至五年的資金用途與優先次序", "比較債務、股權及上市融資的成本與限制", "預先設定融資後的績效指標及問責方式"],
      },
      {
        heading: "建立可驗證的財務紀錄",
        paragraphs: [
          "上市審核重視的並非單一年度盈利，而是財務資料是否完整、一致及能反映真實業務。企業應盡早統一會計政策、收入確認方式、關聯交易紀錄及管理報表口徑，並把個人化或口頭式管理轉化為可追溯流程。",
          "現金流往往比帳面增長更能揭示企業韌性。應收帳週期、存貨周轉、主要客戶集中度及一次性收入，都需要管理層持續監察並準備合理解釋。",
        ],
        bullets: ["每月結帳與管理報表制度", "主要合約、發票及付款紀錄的完整歸檔", "關聯方交易、或然負債及資產權屬的核對"],
      },
      {
        heading: "把企業管治由文件變成日常操作",
        paragraphs: [
          "公司管治不是上市前臨時製作的政策手冊。董事會決策、授權層級、利益衝突、風險管理及資訊披露，都應在日常營運中留下清楚紀錄。當企業由創辦人主導走向制度化管理，關鍵是讓責任可以分工、監督及交接。",
          "企業亦應檢視知識產權、僱傭安排、牌照、資料保障及重要供應商合約。這些看似分散的事項，在盡職審查時會共同影響企業價值與交易進度。",
        ],
      },
      {
        heading: "專業團隊要提早協調",
        paragraphs: [
          "香港交易所的上市流程涉及保薦人、律師、申報會計師、內控顧問及其他專業人士。企業應指定內部項目負責人，建立資料室、問題清單及統一回覆機制，避免不同部門向顧問提供矛盾資料。",
          "正式時間表應保留整改空間。若審視後發現業務、架構或內控仍需改善，先完成整改再推進，通常比帶著重大未決事項進入申請程序更穩健。",
        ],
      },
      {
        heading: "上市準備自我檢查",
        paragraphs: ["企業可先以五個問題判斷目前成熟度。任何一項未能清楚回答，都代表需要補強基礎或尋求專業意見。"],
        bullets: ["商業模式及增長假設能否以數據支持？", "財務紀錄是否一致、完整並可追溯？", "主要法律、稅務、牌照及合約風險是否已識別？", "董事會與內部監控是否真正運作？", "管理層是否有能力同時維持營運並推進上市項目？"],
      },
    ],
    conclusion: "鉅瀧集團可按企業目標協助梳理資金需求、融資結構及上市前準備方向，並按需要協調合資格的法律、會計、稅務及資本市場專業人士，讓企業在作出重大資本決策前建立更清晰的路線圖。",
    sources: [
      { label: "香港交易所：主板上市概覽", url: "https://www.hkex.com.hk/join-our-market/ipo/getting-started/listing-on-the-main-board?sc_lang=zh-HK" },
      { label: "香港交易所：新上市申請人指南", url: "https://en-rules.hkex.com.hk/rulebook/guide-new-listing-applicants" },
    ],
  },
  {
    slug: "privacy-first-digital-marketing-hong-kong",
    title: "香港數碼推廣合規入門：收集客戶資料前必須想清楚的五件事",
    category: "數碼與科技",
    service: "數碼市場推廣",
    serviceSlug: "digital-marketing",
    published: "2026-10-12",
    readingTime: "約 7 分鐘",
    summary: "由表格、會員計劃到電郵與即時通訊推廣，香港企業應如何建立以私隱為先的客戶資料流程？本文以五個實務環節說明。",
    seoDescription: "香港企業進行電郵、社交媒體及會員推廣時，如何處理同意、退訂、資料用途及供應商管理？掌握私隱為先的數碼推廣框架。",
    keywords: ["香港數碼推廣", "個人資料私隱", "直接促銷", "電郵推廣", "客戶資料", "網上營銷"],
    tags: ["數碼推廣", "私隱合規", "客戶體驗", "直接促銷"],
    image: "/insights/privacy-first-digital-marketing.jpg",
    imageAlt: "Asian marketing professional planning a privacy-first digital campaign in Hong Kong",
    imagePrompt: "Asian digital marketing professional planning a privacy-conscious campaign in a contemporary Hong Kong office, subtle consent and secure-data overlays, wide premium editorial photography.",
    intro: "數碼推廣的價值來自更準確地理解客戶，但資料愈多，責任亦愈大。網站表格、會員系統、網店、活動登記、WhatsApp 及電郵名單都可能涉及個人資料。企業若只追求名單數量，而沒有設計清晰的收集目的、同意紀錄及退出流程，不但影響信任，也可能增加合規風險。",
    sections: [
      {
        heading: "一、先界定收集目的",
        paragraphs: [
          "每一個欄位都應對應清楚目的。若只需回覆查詢，通常不必同時收集生日、身份證號碼或其他無關資料。資料最少化可降低保安負擔，也能提高表格完成率。",
          "企業應以容易理解的方式說明資料用途、可能接收資料的人士、查閱及改正方法。私隱聲明不應只是頁尾的一條長連結，而應在關鍵收集點提供適當提示。",
        ],
      },
      {
        heading: "二、分開服務訊息與直接促銷",
        paragraphs: [
          "訂單更新、預約確認與推廣優惠的目的不同。企業應在系統及流程上分開管理，避免把客戶為完成交易而提供的資料，自動加入未經同意的推廣名單。",
          "根據香港個人資料私隱專員公署的指引，使用個人資料作直接促銷前須遵守指定程序並取得所需同意。企業應保存同意的時間、渠道、版本及涵蓋範圍，以便日後核對。",
        ],
      },
      {
        heading: "三、讓拒收真正有效",
        paragraphs: [
          "每次直接促銷都應提供清晰、方便及不收費的拒收方法。收到退出要求後，企業要把結果同步至電郵、短訊、CRM 及外判平台，避免同一客戶在另一渠道再次收到訊息。",
          "最實用的做法是建立中央抑制名單，而不是直接刪除所有紀錄。這有助系統識別已拒收人士，避免日後重新匯入舊名單時再次聯絡。",
        ],
      },
      {
        heading: "四、審視廣告與科技供應商",
        paragraphs: [
          "企業使用電郵平台、聊天機械人、廣告受眾工具或數據分析服務時，仍需了解資料會傳送到哪裡、保存多久、由誰存取，以及供應商發生事故時如何通知。",
          "合約應列明資料處理目的、保安要求、刪除安排、分包商管理及事故回應。若涉及跨境資料流動，亦應評估目的地、保障措施及企業內部權限。",
        ],
      },
      {
        heading: "五、用可信任的數據衡量成效",
        paragraphs: [
          "合規不等於停止分析，而是把衡量方式設計得更透明。企業可以集中於自有渠道的互動、內容表現、查詢質素、轉化成本及客戶留存，減少依賴來源不明的名單。",
          "一套成熟的數碼推廣系統，應把品牌訊息、內容節奏、同意管理及數據分析視為同一個客戶體驗，而不是分散的工具。",
        ],
        bullets: ["定期清理重複、過期及來源不明資料", "按職能限制客戶資料存取權限", "建立資料事故及客戶投訴處理流程", "每次更改表格或自動化流程時重新檢查用途"],
      },
    ],
    conclusion: "鉅瀧集團的數碼市場推廣服務整合搜尋、社交媒體、內容、電郵、即時通訊及自動化工具，協助企業在建立網上增長的同時，梳理更清晰、可持續的客戶接觸流程。具體法律及私隱合規事項應由合資格專業人士提供意見。",
    sources: [
      { label: "個人資料私隱專員公署：直接促銷指引", url: "https://www.pcpd.org.hk/english/resources_centre/publications/files/GN_DM_e.pdf" },
      { label: "個人資料私隱專員公署：指引及報告", url: "https://www.pcpd.org.hk/english/resources_centre/publications/guidance/guidance.html" },
    ],
  },
  {
    slug: "modular-integrated-construction-hong-kong",
    title: "MiC 組裝合成建築法是甚麼？香港工程項目的效益、限制與準備",
    category: "建築創新",
    service: "建築建設工程",
    serviceSlug: "construction-engineering",
    published: "2026-10-12",
    readingTime: "約 8 分鐘",
    summary: "MiC 把部分現場工序轉移至工廠，但並非簡單把房間像積木般疊起。本文說明香港項目採用 MiC 的效益、限制及前期準備。",
    seoDescription: "深入了解香港 MiC 組裝合成建築法的流程、工期與安全效益、設計限制、跨境供應鏈及項目管理重點。",
    keywords: ["MiC 香港", "組裝合成建築法", "建築工程", "模組化建築", "施工管理", "建築科技"],
    tags: ["MiC", "建築科技", "工程管理", "高效建造"],
    image: "/insights/modular-construction-hong-kong.jpg",
    imageAlt: "Asian engineers coordinating modular construction at a Hong Kong building site",
    imagePrompt: "Modern modular integrated construction site in Hong Kong with prefabricated modules installed by crane and Asian engineers in PPE, wide architectural editorial photography.",
    intro: "MiC（Modular Integrated Construction，組裝合成建築法）把結構、裝修及部分機電工序轉移至受控工廠環境完成，再把模組運到工地安裝。這種方法可減少現場工序及工種交疊，但它要求設計、審批、製造、運輸與吊裝更早整合，因此項目成功的關鍵往往在施工前。",
    sections: [
      {
        heading: "MiC 與傳統施工有何不同",
        paragraphs: [
          "傳統工程通常按結構、圍封、機電及裝修順序在現場推進；MiC 則把多個工序平行化。當地盤進行地基及上蓋準備時，模組可在工廠同步生產。",
          "這種平行工作模式有機會縮短現場工期、減少高空及濕工序，並改善品質一致性。不過，任何設計變更都可能影響生產線、運輸及介面，所以決策時間通常要比傳統項目更早。",
        ],
      },
      {
        heading: "香港項目可能獲得的效益",
        paragraphs: [
          "香港地盤空間有限、工序密集，MiC 可把部分人手及物料管理移至工廠。發展局曾引述研究指出，試點項目的建造時間、現場生產力及成本均可因項目條件而改善。",
          "效益並非自動產生。若模組種類過多、設計經常更改、運輸路線受限或吊裝安排不足，節省的時間可能被重新設計與協調成本抵消。",
        ],
        bullets: ["減少現場工種交疊及高空作業", "工廠環境有助標準化品質檢查", "地盤更整潔，物料浪費及噪音可望減少", "基礎工程與模組生產可同步推進"],
      },
      {
        heading: "設計凍結與介面管理",
        paragraphs: [
          "MiC 的核心不是單一模組，而是模組之間、模組與核心筒、外牆、機電及消防系統的介面。設計團隊應建立統一模型、碰撞檢查及版本管理，並明確界定每個介面的責任。",
          "樣板模組及首件檢驗十分重要。它們可在大規模生產前驗證防水、隔音、設備維修空間、飾面及使用體驗，降低批量問題。",
        ],
      },
      {
        heading: "跨境製造、運輸與吊裝",
        paragraphs: [
          "模組尺寸會受到工廠設備、道路、碼頭、臨時存放及吊機能力限制。項目團隊應把運輸路線調查、惡劣天氣安排、吊裝次序及現場緩衝空間納入早期方案。",
          "若採用跨境供應鏈，品質文件、出廠驗收、追溯編碼及到場檢查必須一致。任何模組到場後才發現的重大缺陷，都可能比傳統材料更難即場修正。",
        ],
      },
      {
        heading: "採用 MiC 前的項目清單",
        paragraphs: ["業主不應只問「能否使用 MiC」，而應評估整個項目是否具備早期整合條件。"],
        bullets: ["項目布局是否有足夠重複性？", "主要設計能否按生產時間表提早凍結？", "審批機構、顧問、承建商及供應商是否及早參與？", "工廠品質計劃、運輸及吊裝方案是否互相配合？", "全生命周期維修與更換是否已考慮？"],
      },
    ],
    conclusion: "鉅瀧集團的建築建設工程服務由前期規劃至施工管理，按項目需要協調可行性、設計、審批、成本、品質、安全與進度。對考慮 MiC 的業主而言，越早整合專業團隊，越能把技術潛力轉化為可執行方案。",
    sources: [
      { label: "香港發展局：MiC 政策及技術通告", url: "https://www.devb.gov.hk/filemanager/technicalcirculars/en/upload/1406/1/C-2026-2-1.pdf" },
      { label: "香港發展局：MiC 的應用與效益", url: "https://www.devb.gov.hk/en/publications_and_press_releases/press/index_id_14075.html" },
    ],
  },
  {
    slug: "secure-ai-adoption-for-hong-kong-smes",
    title: "香港中小企導入 AI：由小型場景開始，同時建立網絡安全底線",
    category: "數碼與科技",
    service: "創新科技研發",
    serviceSlug: "innovation-technology",
    published: "2026-10-12",
    readingTime: "約 8 分鐘",
    summary: "AI 不應只是一個聊天工具採購項目。本文提供香港中小企由場景選擇、數據整理、權限管理到成效衡量的安全導入框架。",
    seoDescription: "香港中小企如何安全導入 AI？由選擇應用場景、整理數據、控制權限、管理供應商到網絡安全，建立可衡量的實務路線。",
    keywords: ["香港中小企 AI", "人工智能應用", "網絡安全", "數碼轉型", "AI 自動化", "企業科技"],
    tags: ["人工智能", "網絡安全", "中小企", "數碼轉型"],
    image: "/insights/secure-ai-for-hong-kong-smes.jpg",
    imageAlt: "Asian SME team mapping secure AI workflows in a Hong Kong office",
    imagePrompt: "Asian SME leadership team mapping practical AI workflows and cybersecurity safeguards on large screens in a Hong Kong office, wide premium technology editorial photography.",
    intro: "AI 工具愈來愈容易使用，但企業真正需要的不是追逐每個新功能，而是把合適技術放進可控制、可衡量的流程。若員工自行把客戶資料、合約或內部文件輸入未經批准的平台，效率提升可能伴隨資料外洩、錯誤決策及供應商鎖定風險。",
    sections: [
      {
        heading: "從高頻、低風險場景開始",
        paragraphs: [
          "首個 AI 項目應選擇規則清晰、資料敏感度較低及容易量度的工作，例如整理公開資料、草擬產品描述、分類一般查詢或協助內部搜尋。這些場景可讓團隊學習提示、審核及例外處理。",
          "不要一開始便把 AI 接駁付款、批核或不可逆決策。涉及財務、法律、人事或客戶權益的輸出，必須保留合資格人士覆核。",
        ],
      },
      {
        heading: "先整理流程，再自動化",
        paragraphs: [
          "若原有流程沒有清晰輸入、責任及品質標準，加入 AI 只會更快地製造不一致結果。企業應先畫出現況流程，識別重複工作、資料來源、決策點與交接位置。",
          "每個試點都要設定基準，例如平均處理時間、錯誤率、回覆一致性或客戶滿意度。沒有基準，就難以判斷工具是否真正創造價值。",
        ],
      },
      {
        heading: "建立資料與權限邊界",
        paragraphs: [
          "企業可把資料分為公開、內部、機密及受限制等級，明確規定哪些資料可輸入哪類 AI 工具。帳戶應使用公司管理方式、啟用多重認證，並按職能配置權限。",
          "知識庫與模型回答亦需要版本、來源及更新機制。過時政策或未經核實資料若被大量重用，會把小錯誤放大成營運風險。",
        ],
        bullets: ["禁止以私人帳戶處理公司機密資料", "保存關鍵提示、輸出及人工覆核紀錄", "定期撤銷離職或轉職人員權限", "為供應商事故、服務中斷及資料匯出準備方案"],
      },
      {
        heading: "把網絡安全放進項目設計",
        paragraphs: [
          "AI 可能協助偵測異常，也可能被用來製作更逼真的釣魚內容。企業應把員工培訓、端點保護、備份、修補、存取控制及事故演練視為基本盤。",
          "香港數字政策辦公室近年持續推動安全使用 AI 及支援中小企的網絡安全措施，反映 AI 應用與安全治理需要同步推進，而不是系統推出後才補救。",
        ],
      },
      {
        heading: "九十日導入節奏",
        paragraphs: ["中小企可用三個階段降低試點風險，並讓管理層在每個階段決定是否擴大。"],
        bullets: ["第 1–30 日：選定單一場景、基準指標及資料邊界", "第 31–60 日：由小組試用，記錄錯誤、例外及時間節省", "第 61–90 日：完成安全檢查、員工指引及成效評估後再擴展"],
      },
    ],
    conclusion: "鉅瀧集團的創新科技研發服務由企業實際場景出發，探索企業網絡、數據安全、數碼防偽、資料平台及智能自動化方案，協助團隊把科技投資轉化為更穩健的營運能力。",
    sources: [
      { label: "香港數字政策辦公室：AI 與網絡安全措施", url: "https://www.digitalpolicy.gov.hk/en/news/speeches/2026/07/sp_20260728.html" },
      { label: "數碼轉型支援先導計劃", url: "https://dtspp.cyberport.hk/zh-hk/%E9%A6%96%E9%A0%81/" },
    ],
  },
  {
    slug: "family-succession-planning-hong-kong",
    title: "香港家族傳承規劃：資產、企業與家族共識如何同步安排",
    category: "財富與傳承",
    service: "家族傳承規劃",
    serviceSlug: "family-succession",
    published: "2026-10-12",
    readingTime: "約 9 分鐘",
    summary: "傳承不只是分配資產。本文從家族目標、企業控制、流動性、治理及下一代培育，說明香港家族如何啟動有結構的規劃。",
    seoDescription: "香港家族傳承規劃實務指南：了解資產盤點、企業接班、家族信託、保險、家族治理與下一代培育的核心步驟。",
    keywords: ["香港家族傳承", "家族信託", "企業接班", "財富傳承", "家族治理", "家族辦公室"],
    tags: ["家族傳承", "企業接班", "家族治理", "財富規劃"],
    image: "/insights/family-succession-planning-hong-kong.jpg",
    imageAlt: "Multigenerational Asian family discussing succession planning with an adviser in Hong Kong",
    imagePrompt: "Multigenerational Asian family discussing succession planning with an Asian adviser in an elegant Hong Kong home, warm harbour view, wide premium editorial lifestyle photography.",
    intro: "家族傳承的難題通常不在於缺少工具，而在於資產、企業、家庭關係及個人期望互相牽連。遺囑、信託、保險或控股公司各有功能，但若沒有共同目標與治理安排，再完善的文件也未必能解決控制權、現金流及下一代角色的問題。",
    sections: [
      {
        heading: "先建立完整的家族資產地圖",
        paragraphs: [
          "資產盤點不應只列出銀行存款與物業，還要包括公司股權、股東貸款、知識產權、保單、海外資產、擔保責任及重要數碼資產。每項資產要記錄擁有人、所在地、估值、流動性及受益安排。",
          "企業資產與個人資產亦要區分。若家族成員長期以私人方式支付公司開支或使用公司資產，傳承時容易產生權屬、稅務及公平性爭議。",
        ],
      },
      {
        heading: "把所有權、控制權與經營權分開思考",
        paragraphs: [
          "創辦人常把持股、董事權力與日常管理視為同一件事，但三者可以有不同交接節奏。下一代可先參與管理，未必立即取得全部股權；家族亦可保留重大事項控制，同時引入專業管理層。",
          "接班人選應按能力、意願及企業需要決定，而不是單靠排行。若部分家族成員不參與業務，便要設計清晰的分紅、資訊及退出機制。",
        ],
      },
      {
        heading: "預留流動性，避免被迫出售",
        paragraphs: [
          "家族財富若高度集中於企業或物業，遇到稅務、債務、家庭支出或成員退出時，可能缺乏現金。規劃應估算不同情境下的流動性需求，並檢視保險、融資、股東協議或資產配置。",
          "流動性安排亦能提高公平性。例如由一名子女承接企業，其他成員可以透過不同資產或收益權取得合理安排，減少要求企業即時分拆或出售的壓力。",
        ],
      },
      {
        heading: "用家族治理處理長期變化",
        paragraphs: [
          "家族會議、家族憲章及投資委員會的目的，是建立溝通與決策規則。內容可包括共同價值、成員加入企業的資格、薪酬原則、重大投資門檻、衝突處理及慈善方向。",
          "治理文件需要定期檢視，尤其在婚姻、移居、新生代加入、企業融資或重大資產交易後。真正有效的治理來自持續對話，而不是一次簽署。",
        ],
        bullets: ["每年至少一次更新資產及責任清單", "為關鍵角色建立緊急授權與替代安排", "讓下一代逐步參與投資、企業及公益議題", "定期與法律、稅務、會計及財務顧問檢視"],
      },
      {
        heading: "香港的家族辦公室發展環境",
        paragraphs: [
          "香港近年持續發展家族辦公室生態，結合資產管理、專業服務、慈善及創科網絡。這為具跨境資產及多代需求的家族提供更多協作資源，但成立家族辦公室並非每個家庭的起點。",
          "家族應先界定需要管理的複雜度、資產規模、私隱要求與服務範圍，再決定採用單一家族辦公室、多家族辦公室或由現有專業團隊協作。",
        ],
      },
    ],
    conclusion: "鉅瀧集團協助家族梳理目標、資產及企業傳承方向，並按需要協調合資格的法律、會計、稅務與財務專業人士。規劃愈早開始，家族便愈有空間建立共識，讓財富、企業與核心價值得以延續。",
    sources: [
      { label: "投資推廣署：香港家族辦公室", url: "https://www.investhk.gov.hk/zh-hk/key-industries/family-office/" },
      { label: "投資推廣署：香港單一家族辦公室市場發展", url: "https://www.investhk.gov.hk/en/news/hong-kongs-single-family-offices-total-surpasses-3-380-injecting-over-10-billion-annually-into-local-economy/" },
    ],
  },
];

export const insightCategories = ["資本與企業發展", "數碼與科技", "建築創新", "財富與傳承"];

export function findInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
