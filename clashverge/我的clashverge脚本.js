// ============================================================
// 常量定义
// ============================================================

// 1. 【优化点】将超长的 ChatGPT 过滤正则抽离，保持代码整洁
const REGEX_CHATGPT_FILTER = "AD|🇦🇩|安道尔|AE|🇦🇪|阿联酋|AF|🇦🇫|阿富汗|AG|🇦🇬|安提瓜和巴布达|AL|🇦🇱|阿尔巴尼亚|AM|🇦🇲|亚美尼亚|AO|🇦🇴|安哥拉|AR|🇦🇷|阿根廷|AT|🇦🇹|奥地利|AU|🇦🇺|澳大利亚|AZ|🇦🇿|阿塞拜疆|BA|🇧🇦|波黑|BB|🇧🇧|巴巴多斯|BD|🇧🇩|孟加拉国|BE|🇧🇪|比利时|BF|🇧🇫|布基纳法索|BG|🇧🇬|保加利亚|BH|🇧🇭|巴林|BI|🇧🇮|布隆迪|BJ|🇧🇯|贝宁|BN|🇧🇳|文莱|BO|🇧🇴|玻利维亚|BR|🇧🇷|巴西|BS|🇧🇸|巴哈马|BT|🇧🇹|不丹|BW|🇧🇼|博茨瓦纳|BZ|🇧🇿|伯利兹|CA|🇨🇦|加拿大|CD|🇨🇩|刚果（金）|CF|🇨🇫|中非|CG|🇨🇬|刚果（布）|CH|🇨🇭|瑞士|CI|🇨🇮|科特迪瓦|CL|🇨🇱|智利|CM|🇨🇲|喀麦隆|CO|🇨🇴|哥伦比亚|CR|🇨🇷|哥斯达黎加|CV|🇨🇻|佛得角|CY|🇨🇾|塞浦路斯|CZ|🇨🇿|捷克|DE|🇩🇪|德国|DJ|🇩🇯|吉布提|DK|🇩🇰|丹麦|DM|🇩🇲|多米尼克|DO|🇩🇴|多米尼加|DZ|🇩🇿|阿尔及利亚|EC|🇪🇨|厄瓜多尔|EE|🇪🇪|爱沙尼亚|EG|🇪🇬|埃及|ER|🇪🇷|厄立特里亚|ES|🇪🇸|西班牙|ET|🇪🇹|埃塞俄比亚|FI|🇫🇮|芬兰|FJ|🇫🇯|斐济|FM|🇫🇲|密克罗尼西亚|FR|🇫🇷|法国|GA|🇬🇦|加蓬|GB|🇬🇧|英国|GD|🇬🇩|格林纳达|GE|🇬🇪|格鲁吉亚|GH|🇬🇭|加纳|GM|🇬🇲|冈比亚|GN|🇬🇳|几内亚|GQ|🇬🇶|赤道几内亚|GR|🇬🇷|希腊|GT|🇬🇹|危地马拉|GW|🇬🇼|几内亚比绍|GY|🇬🇾|圭亚那|HN|🇭🇳|洪都拉斯|HR|🇭🇷|克罗地亚|HT|🇭🇹|海地|HU|🇭🇺|匈牙利|ID|🇮🇩|印度尼西亚|IE|🇮🇪|爱尔兰|IL|🇮🇱|以色列|IN|🇮🇳|印度|IQ|🇮🇶|伊拉克|IS|🇮🇸|冰岛|IT|🇮🇹|意大利|JM|🇯🇲|牙买加|JO|🇯🇴|约旦|JP|🇯🇵|日本|KE|🇰🇪|肯尼亚|KG|🇰🇬|吉尔吉斯斯坦|KH|🇰🇭|柬埔寨|KI|🇰🇮|基里巴斯|KM|🇰🇲|科摩罗|KN|🇰🇳|圣基茨和尼维斯|KR|🇰🇷|韩国|KW|🇰🇼|科威特|KZ|🇰🇿|哈萨克斯坦|LA|🇱🇦|老挝|LB|🇱🇧|黎巴嫩|LC|🇱🇨|圣卢西亚|LI|🇱🇮|列支敦士登|LK|🇱🇰|斯里兰卡|LR|🇱🇷|利比里亚|LS|🇱🇸|莱索托|LT|🇱🇹|立陶宛|LU|🇱🇺|卢森堡|LV|🇱🇻|拉脱维亚|LY|🇱🇾|利比亚|MA|🇲🇦|摩洛哥|MC|🇲🇨|摩纳哥|MD|🇲🇩|摩尔多瓦|ME|🇲🇪|黑山|MG|🇲🇬|马达加斯加|MH|🇲🇭|马绍尔群岛|MK|🇲🇰|北马其顿|ML|🇲🇱|马里|MM|🇲🇲|缅甸|MN|🇲🇳|蒙古|MR|🇲🇷|毛里塔尼亚|MT|🇲🇹|马耳他|MU|🇲🇺|毛里求斯|MV|🇲🇻|马尔代夫|MW|🇲🇼|马拉维|MX|🇲🇽|墨西哥|MY|🇲🇾|马来西亚|MZ|🇲🇿|莫桑比克|NA|🇳🇦|纳米比亚|NE|🇳🇪|尼日尔|NG|🇳🇬|尼日利亚|NI|🇳🇮|尼加拉瓜|NL|🇳🇱|荷兰|NO|🇳🇴|挪威|NP|🇳🇵|尼泊尔|NR|🇳🇷|瑙鲁|NZ|🇳🇿|新西兰|OM|🇴🇲|阿曼|PA|🇵🇦|巴拿马|PE|🇵🇪|秘鲁|PG|🇵🇬|巴布亚新几内亚|PH|🇵🇭|菲律宾|PK|🇵🇰|巴基斯坦|PL|🇵🇱|波兰|PS|🇵🇸|巴勒斯坦|PT|🇵🇹|葡萄牙|PW|🇵🇼|帕劳|PY|🇵🇾|巴拉圭|QA|🇶🇦|卡塔尔|RO|🇷🇴|罗马尼亚|RS|🇷🇸|塞尔维亚|RW|🇷🇼|卢旺达|SA|🇸🇦|沙特阿拉伯|SB|🇸🇧|所罗门群岛|SC|🇸🇨|塞舌尔|SD|🇸🇩|苏丹|SE|🇸🇪|瑞典|SG|🇸🇬|新加坡|SI|🇸🇮|斯洛文尼亚|SK|🇸🇰|斯洛伐克|SL|🇸🇱|塞拉利昂|SM|🇸🇲|圣马力诺|SN|🇸🇳|塞内加尔|SO|🇸🇴|索马里|SR|🇸🇷|苏里南|SS|🇸🇸|南苏丹|ST|🇸🇹|圣多美和普林西比|SV|🇸🇻|萨尔瓦多|SZ|🇸🇿|斯威士兰|TD|🇹🇩|乍得|TG|🇹🇬|多哥|TH|🇹🇭|泰国|TJ|🇹🇯|塔吉克斯坦|TL|🇹🇱|东帝汶|TM|🇹🇲|土库曼斯坦|TN|🇹🇳|突尼斯|TO|🇹🇴|汤加|TR|🇹🇷|土耳其|TT|🇹🇹|特立尼达和多巴哥|TV|🇹🇻|图瓦卢|TW|🇹🇼|台湾|TZ|🇹🇿|坦桑尼亚|UA|🇺🇦|乌克兰|UG|🇺🇬|乌干达|US|🇺🇸|美国|UY|🇺🇾|乌拉圭|UZ|🇺🇿|乌兹别克斯坦|VA|🇻🇦|梵蒂冈|VC|🇻🇨|圣文森特和格林纳丁斯|VN|🇻🇳|越南|VU|🇻🇺|瓦努阿图|WS|🇼🇸|萨摩亚|YE|🇾🇪|也门|ZA|🇿🇦|南非|ZM|🇿🇲|赞比亚|ZW|🇿🇼|津巴布韦";

// 代理组名称
const GROUP_NAMES = {
  NODE_SELECT: "节点选择",
  BEST_LATENCY: "延迟选优",
  FAILOVER: "故障转移",
  LB_HASH: "负载均衡(散列)",
  LB_ROUND: "负载均衡(轮询)",
  DIRECT: "全局直连",
  REJECT: "全局拦截",
  LEAK: "漏网之鱼",
  FIGMA: "🎨 Figma",
  ADOBE: "Adobe",
  GOOGLE: "谷歌服务",
  FOREIGN_MEDIA: "国外媒体",
  TELEGRAM: "电报消息",
  CHATGPT: "ChatGPT",
  MICROSOFT: "微软服务",
  APPLE: "苹果服务",
  AD_BLOCK: "广告过滤",
};

// 常用代理列表
const PROXY_LISTS = {
  ALL:[GROUP_NAMES.NODE_SELECT, GROUP_NAMES.BEST_LATENCY, GROUP_NAMES.FAILOVER, GROUP_NAMES.LB_HASH, GROUP_NAMES.LB_ROUND, GROUP_NAMES.DIRECT],
  WITHOUT_DIRECT:[GROUP_NAMES.NODE_SELECT, GROUP_NAMES.BEST_LATENCY, GROUP_NAMES.FAILOVER, GROUP_NAMES.LB_HASH, GROUP_NAMES.LB_ROUND],
  WITH_DIRECT_FIRST:[GROUP_NAMES.DIRECT, GROUP_NAMES.NODE_SELECT, GROUP_NAMES.BEST_LATENCY, GROUP_NAMES.FAILOVER, GROUP_NAMES.LB_HASH, GROUP_NAMES.LB_ROUND],
  AD_BLOCK:[GROUP_NAMES.REJECT, GROUP_NAMES.DIRECT],
};

// 图标 URL
const ICONS = {
  ADJUST: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
  SPEED: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg",
  AMBULANCE: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg",
  MERRY_GO: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg",
  BALANCE: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg",
  GOOGLE: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg",
  YOUTUBE: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg",
  TELEGRAM: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg",
  CHATGPT: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg",
  MICROSOFT: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg",
  APPLE: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg",
  BUG: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg",
  LINK: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg",
  BLOCK: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg",
  FISH: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg",
  FIGMA: "https://qhdtc.oss-cn-chengdu.aliyuncs.com/obsidian/202412111622083.svg",
  ADOBE: "https://qhdtc.oss-cn-chengdu.aliyuncs.com/obsidian/202412111631129.svg",
};

// ============================================================
// DNS 基础配置
// ============================================================
const domesticNameservers =["https://dns.alidns.com/dns-query", "https://doh.pub/dns-query", "https://doh.360.cn/dns-query"];
const foreignNameservers =["https://1.1.1.1/dns-query", "https://1.0.0.1/dns-query", "https://208.67.222.222/dns-query", "https://208.67.220.220/dns-query", "https://194.242.2.2/dns-query", "https://194.242.2.3/dns-query"];

const dnsConfig = {
  enable: true,
  listen: "0.0.0.0:1053",
  ipv6: true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter":[
    "+.lan", "+.local", "+.msftconnecttest.com", "+.msftncsi.com",
    "localhost.ptlogin2.qq.com", "localhost.sec.qq.com", "localhost.work.weixin.qq.com",
  ],
  "default-nameserver":["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  nameserver:[...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver":[...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers,
  },
};

// ============================================================
// 【优化点2】集中化 Rule Providers 映射表 (消除冗余代码)
// ============================================================
const ruleProviderCommon = { type: "http", format: "yaml", interval: 86400 };

// 只需在这里维护规则集的 URL、Path 和 Behavior 即可
const providerList = {
  reject: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt", path: "./ruleset/loyalsoldier/reject.yaml" },
  icloud: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt", path: "./ruleset/loyalsoldier/icloud.yaml" },
  apple: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt", path: "./ruleset/loyalsoldier/apple.yaml" },
  google: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt", path: "./ruleset/loyalsoldier/google.yaml" },
  proxy: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt", path: "./ruleset/loyalsoldier/proxy.yaml" },
  direct: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt", path: "./ruleset/loyalsoldier/direct.yaml" },
  private: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt", path: "./ruleset/loyalsoldier/private.yaml" },
  gfw: { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt", path: "./ruleset/loyalsoldier/gfw.yaml" },
  "tld-not-cn": { behavior: "domain", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt", path: "./ruleset/loyalsoldier/tld-not-cn.yaml" },
  telegramcidr: { behavior: "ipcidr", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt", path: "./ruleset/loyalsoldier/telegramcidr.yaml" },
  cncidr: { behavior: "ipcidr", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt", path: "./ruleset/loyalsoldier/cncidr.yaml" },
  lancidr: { behavior: "ipcidr", url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt", path: "./ruleset/loyalsoldier/lancidr.yaml" },
  openai: { behavior: "classical", url: "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml", path: "./ruleset/blackmatrix7/openai.yaml" },
  // 自定义规则集
  customReject: { behavior: "domain", url: "https://raw.githubusercontent.com/qihaogithub/Proxy-rules/refs/heads/main/ruleset/REJECT.yaml", path: "./ruleset/REJECT.yaml" },
  customDirect: { behavior: "domain", url: "https://raw.githubusercontent.com/qihaogithub/Proxy-rules/refs/heads/main/ruleset/DIRECT.yaml", path: "./ruleset/DIRECT.yaml" },
  customAIGC: { behavior: "domain", url: "https://raw.githubusercontent.com/qihaogithub/Proxy-rules/refs/heads/main/ruleset/AIGC.yaml", path: "./ruleset/AIGC.yaml" },
  customFigma: { behavior: "domain", url: "https://raw.githubusercontent.com/qihaogithub/Proxy-rules/refs/heads/main/ruleset/figma.yaml", path: "./ruleset/figma.yaml" },
};

// 自动组合生成最终的 rule-providers 对象
const ruleProviders = Object.keys(providerList).reduce((acc, key) => {
  acc[key] = { ...ruleProviderCommon, ...providerList[key] };
  return acc;
}, {});

// ============================================================
// 【优化点3】分块定义路由规则 (解耦，方便增删改查)
// ============================================================

// 1. 本地回环直连 (TUN/服务模式下防止本地回调被误代理)
const loopbackRules = [
  "DOMAIN,localhost,全局直连",
  "IP-CIDR,127.0.0.0/8,全局直连,no-resolve",
  "IP-CIDR6,::1/128,全局直连,no-resolve",
];

// 2. 本地应用及自定义域名规则 (优先级最高)
const customAppRules =[
  // 开发及AI工具
  "DOMAIN-KEYWORD,docker,节点选择",
  "DOMAIN-KEYWORD,cursor,节点选择",
  "DOMAIN,openaipublic.blob.core.windows.net,节点选择",
  "DOMAIN,v2rayse.com,节点选择",
  "DOMAIN-SUFFIX,v2rayssr.com,节点选择",
  
  // Adobe 系列
  "DOMAIN-SUFFIX,adobe.com,Adobe",
  "DOMAIN-SUFFIX,adobe.io,Adobe",
  "DOMAIN-SUFFIX,adobelogin.com,Adobe",
  "DOMAIN-SUFFIX,adobeid-na1.services.adobe.com,Adobe",
  "DOMAIN-SUFFIX,adobeoobe.com,Adobe",
  
  // Figma 系列
  "DOMAIN-SUFFIX,figma.com,🎨 Figma",
  "DOMAIN-SUFFIX,figma.net,🎨 Figma",

  // 谷歌及其它
  "DOMAIN-SUFFIX,googleapis.cn,节点选择",
  "DOMAIN-SUFFIX,gstatic.com,节点选择",
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择",
  "DOMAIN-SUFFIX,github.io,节点选择",
];

// 2. 远程 Rule Providers 映射规则
const remoteRuleSets =[
  // 个人自定义规则集
  "RULE-SET,customDirect,全局直连",
  "RULE-SET,customFigma,🎨 Figma",
  "RULE-SET,customReject,广告过滤",
  "RULE-SET,customAIGC,ChatGPT",
  // 基础远程规则集
  "RULE-SET,openai,ChatGPT",
  "RULE-SET,private,全局直连",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,icloud,微软服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,google,谷歌服务",
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",
  "RULE-SET,tld-not-cn,节点选择",
  "RULE-SET,direct,全局直连",
  // 局域网及CN IP 保护 (防解析泄露)
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,telegramcidr,电报消息,no-resolve",
];

// 3. 兜底与 GEOIP 规则 (优先级最低)
const fallbackRules =[
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼",
];

// 组合所有规则
const rules = [...loopbackRules, ...customAppRules, ...remoteRuleSets, ...fallbackRules];


// ============================================================
// 代理组辅助函数
// ============================================================
const groupBaseOption = { interval: 300, timeout: 3000, url: "https://www.google.com/generate_204", lazy: true, "max-failed-times": 3, hidden: false };

function createSelectGroup(name, proxies, icon, extra = {}) {
  return { ...groupBaseOption, name, type: "select", proxies, "include-all": true, icon, ...extra };
}
function createUrlTestGroup(name, tolerance = 100, icon) {
  return { ...groupBaseOption, name, type: "url-test", tolerance, "include-all": true, icon };
}
function createFallbackGroup(name, icon) {
  return { ...groupBaseOption, name, type: "fallback", "include-all": true, icon };
}
function createLoadBalanceGroup(name, strategy, icon) {
  return { ...groupBaseOption, name, type: "load-balance", strategy, "include-all": true, icon };
}

// ============================================================
// Main 函数入口
// ============================================================
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount = typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) throw new Error("配置文件中未找到任何代理");

  // 覆盖基础配置
  config["dns"] = dnsConfig;
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 重新构建代理组
  config["proxy-groups"] = [
    // 基础策略组
    createSelectGroup(GROUP_NAMES.NODE_SELECT,[GROUP_NAMES.BEST_LATENCY, GROUP_NAMES.FAILOVER, GROUP_NAMES.LB_HASH, GROUP_NAMES.LB_ROUND], ICONS.ADJUST),
    createUrlTestGroup(GROUP_NAMES.BEST_LATENCY, 100, ICONS.SPEED),
    createFallbackGroup(GROUP_NAMES.FAILOVER, ICONS.AMBULANCE),
    createLoadBalanceGroup(GROUP_NAMES.LB_HASH, "consistent-hashing", ICONS.MERRY_GO),
    createLoadBalanceGroup(GROUP_NAMES.LB_ROUND, "round-robin", ICONS.BALANCE),
    
    // 自定义应用策略组
    createSelectGroup(GROUP_NAMES.FIGMA,[GROUP_NAMES.NODE_SELECT, GROUP_NAMES.BEST_LATENCY], ICONS.FIGMA, { url: "https://www.figma.com", tolerance: 50 }),
    createSelectGroup(GROUP_NAMES.ADOBE,[GROUP_NAMES.REJECT, GROUP_NAMES.DIRECT, GROUP_NAMES.BEST_LATENCY], ICONS.ADOBE),
    
    // 服务类策略组
    createSelectGroup(GROUP_NAMES.GOOGLE, PROXY_LISTS.ALL, ICONS.GOOGLE),
    createSelectGroup(GROUP_NAMES.FOREIGN_MEDIA, PROXY_LISTS.ALL, ICONS.YOUTUBE),
    createSelectGroup(GROUP_NAMES.TELEGRAM, PROXY_LISTS.ALL, ICONS.TELEGRAM),
    
    // 【优化点4】将常量代入 ChatGPT 配置，让结构十分清爽
    createSelectGroup(GROUP_NAMES.CHATGPT, PROXY_LISTS.ALL, ICONS.CHATGPT, { url: "https://chatgpt.com", "expected-status": "200", filter: REGEX_CHATGPT_FILTER }),
    createSelectGroup(GROUP_NAMES.MICROSOFT, PROXY_LISTS.WITH_DIRECT_FIRST, ICONS.MICROSOFT),
    createSelectGroup(GROUP_NAMES.APPLE, PROXY_LISTS.ALL, ICONS.APPLE),
    
    // 拦截与直连策略组
    createSelectGroup(GROUP_NAMES.AD_BLOCK, PROXY_LISTS.AD_BLOCK, ICONS.BUG),
    createSelectGroup(GROUP_NAMES.DIRECT, PROXY_LISTS.WITH_DIRECT_FIRST, ICONS.LINK),
    createSelectGroup(GROUP_NAMES.REJECT, PROXY_LISTS.AD_BLOCK, ICONS.BLOCK),
    createSelectGroup(GROUP_NAMES.LEAK, PROXY_LISTS.ALL, ICONS.FISH),
  ];

  return config;
}