---
{
  "tag": "Safety",
  "title": "Vanguard Chronologie de sécurité (2026)",
  "h1Title": "Valorant Mises à jour de sécurité Vanguard en 2026",
  "seoTitle": "Valorant Anti-Cheat : Mises à jour de sécurité Vanguard en 2026",
  "slug": "valorant-vanguard-security-2026",
  "image": "/images/gameplay/valorant-vanguard-risk-hud.webp",
  "imageAlt": "Exemple d'overlay à faible luminosité avec une note de risque",
  "desc": "Mai 2026 DMA et IOMMU, juin HVCI/VBS/TPM, à la demande et novembre 2026 VCT Pré-contrôle — contexte de risque clair pour VALORANT, pas un guide de contournement.",
  "date": "Nov 8, 2026",
  "dateIso": "2026-11-08",
  "readTime": "7 min de lecture",
  "author": "Valorant Staff",
  "featured": true,
  "body": [
    {
      "type": "p",
      "text": "La plus grande offensive de Riot contre les cheats tiers en 2026 s'est déroulée en trois vagues publiques : une sortie axée sur le matériel en mai Vanguard, une base de sécurité à la demande en juin et un cadre d'intégrité compétitive en novembre. Cette page résume ce que Riot a communiqué et ce que les acheteurs de cette boutique doivent considérer comme un contexte de risque. Elle ne décrit pas les mécanismes internes de détection et ne propose aucun contournement."
    },
    {
      "type": "h2",
      "text": "22 mai 2026 — DMA et IOMMU"
    },
    {
      "type": "p",
      "text": "La mise à jour Vanguard du 22 mai 2026 a ciblé le matériel externe d'accès direct à la mémoire (DMA) — esppécialement les configurations de type SATA et NVMe utilisées comme ponts de cheats tiers. Les fils de discussion de la communauté ont décrit l'IOMMU Windows et le remappage DMA bloquant les DLL malveillantes liées à ces appareils."
    },
    {
      "type": "p",
      "text": "La ligne officielle de Riot était que la mise à jour perturbe les configurations de cheats illicites sur la PC hôte, et non qu'elle bloque définitivement le matériel grand public légitime. Les piles DMA personnalisées haut de end discutées en ligne ont été signalées comme inutiles dans cet environnement Windows après le correctif. Rien de tout cela ne change ce que cette boutique vend : un Windows loader dès le paiement, et non une carte DMA."
    },
    {
      "type": "h2",
      "text": "Juin 2026 — Vanguard à la demande"
    },
    {
      "type": "p",
      "text": "Le mode à la demande Vanguard permet à l'anti-cheat de se désactiver lorsque VALORANT ne tourne pas. L'activer troque de la commodité contre une atténuation plus stricte. Sur Windows 11, Riot exige que les éléments de sécurité basés sur la virtualisation — HVCI, VBS et TPM 2.0 — restent activés, fermant ainsi les chemins d'injection qui reposaient sur des bases plus faibles."
    },
    {
      "type": "p",
      "text": "Si vous chargez un élément tiers sur le même PC, considérez ces fonctionnalités Windows comme faisant partie de la surface de risque. La [page de statut](/status/) est toujours VERTE ou ROUGE pour ce fichier de menu, ce n'est pas une garantie que Vanguard l'ignorera."
    },
    {
      "type": "h2",
      "text": "5 novembre 2026 — Cadre d'intégrité VCT 2027"
    },
    {
      "type": "p",
      "text": "Le 5 novembre 2026, Riot a détaillé la mise à l'échelle pour le jeu compétitif ouvert en prévision du VCT 2027. L'élément principal pour les joueurs de tous les jours est le pré-contrôle Vanguard : une routine de conformité avant les qualifications en ligne, avec un examen approfondi de la couche logicielle et un filtrage des processus en arrière-plan."
    },
    {
      "type": "p",
      "text": "Les règles de tournoi ne sont pas les mêmes que le risque en file d'attente non classée, mais la direction est la même — davantage de contrôles automatisés avant le début d'un match. Cette boutique ne promet pas un pré-contrôle propre. Lisez l'étiquette de statut après chaque note Vanguard, et séparez HWID et les produits si le problème concerne le matériel ou un appel."
    },
    {
      "type": "h2",
      "text": "Que faire avant de charger"
    },
    {
      "type": "p",
      "text": "Lisez la [page de statut](/status/) après l'une des étapes ci-dessus ou un correctif client VALORANT. VERT liste le fichier à charger. ROUGE signifie patienter. Comparez cette chronologie avec la note plus courte [Vanguard par rapport à VAC](/blog/valorant-vanguard-vs-vac/)) si vous jouez également à CS2 — les conseils ne sont pas transférables d'un jeu à l'autre."
    }
  ]
}
---
