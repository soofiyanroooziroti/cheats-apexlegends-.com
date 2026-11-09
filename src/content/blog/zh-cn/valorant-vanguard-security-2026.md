---
{
  "tag": "Safety",
  "title": "Vanguard 安全时间线 (2026)",
  "h1Title": "Valorant Vanguard 2026年安全更新",
  "seoTitle": "Valorant Anti-Cheat: Vanguard 2026年安全更新",
  "slug": "valorant-vanguard-security-2026",
  "image": "/images/gameplay/valorant-vanguard-risk-hud.webp",
  "imageAlt": "带有风险提示的低光照叠加示例",
  "desc": "2026年5月 DMA 和 IOMMU，6月按需 HVCI/VBS/TPM, 以及2026年11月 VCT 预检查——面向 VALORANT 的普通风险背景，并非绕过指南。",
  "date": "Nov 8, 2026",
  "dateIso": "2026-11-08",
  "readTime": "7 min read",
  "author": "Valorant Staff",
  "featured": true,
  "body": [
    {
      "type": "p",
      "text": "Riot 在 2026 年最大规模的第三方作弊打击分三波公开推出：5 月份以硬件为重点的 Vanguard 发布、6 月份的按需安全基准以及 11 月份的竞技完整性框架。本页总结了 Riot 传达的内容以及本商店购买者应视为风险背景的信息。它不描述检测内部原理，也不提供绕过方法。"
    },
    {
      "type": "h2",
      "text": "2026年5月22日 — DMA 与 IOMMU"
    },
    {
      "type": "p",
      "text": "2026年5月22日的 Vanguard 更新针对外部直接内存访问硬件——esp特别是用作第三方作弊桥接的 SATA 和 NVMe 风格设置。社区讨论串描述了 Windows IOMMU 和 DMA 重新映射，它们阻止了与这些设备绑定的恶意 DLL。"
    },
    {
      "type": "p",
      "text": "Riot 的公开说法是该更新破坏了主机 PC 上的非法作弊 config 配置，而不是损坏合法的零售硬件。在线讨论的高 end 自定义 DMA 堆栈据报道在打完补丁后的该 Windows 环境中毫无用处。这些都没有改变本商店销售的产品：结账时获得的 Windows loader，而不是 DMA 卡。"
    },
    {
      "type": "h2",
      "text": "2026年6月 — Vanguard 按需模式"
    },
    {
      "type": "p",
      "text": "Vanguard 按需模式允许反作弊在 VALORANT 未运行时关闭。启用它需要牺牲便利性以换取更严格的防护。在 Windows 11 上，Riot 要求启用基于虚拟化的安全组件——HVCI、VBS 和 TPM 2.0，从而关闭依赖较弱基准的注入器路径。"
    },
    {
      "type": "p",
      "text": "如果您在同一 PC 上加载任何第三方内容，请将这些 Windows 功能视为风险面的一部分。[状态页面](/status/)) 针对此菜单文件仍然显示绿色或红色，并不声称 Vanguard 会忽略它。"
    },
    {
      "type": "h2",
      "text": "2026年11月5日 — VCT 2027 完整性框架"
    },
    {
      "type": "p",
      "text": "2026年11月5日，Riot 详细介绍了为 VCT 2027 做准备的公开竞技规模扩展。普通玩家的头条新闻是 Vanguard 预检查：在线预选赛前的合规例程，具有更重的软件层审查和后台进程筛选。"
    },
    {
      "type": "p",
      "text": "锦标赛规则与未评级队列风险不同，但方向是一样的——在比赛开始前进行更多自动化检查。本商店不承诺预检查完全通过。在每次 Vanguard 提示后阅读状态标签，如果问题是硬件或申诉，请将 HWID 与产品分开处理。"
    },
    {
      "type": "h2",
      "text": "加载前该做的事情"
    },
    {
      "type": "p",
      "text": "在上述任何里程碑或 VALORANT 客户端补丁之后阅读 [状态页面](/status/))。绿色列出要加载的文件。红色意味着等待。如果您也玩 CS2，请将此时间线与较短的 [Vanguard 与 VAC](/blog/valorant-vanguard-vs-vac/)) 提示进行比较——建议不能在游戏之间通用。"
    }
  ]
}
---
