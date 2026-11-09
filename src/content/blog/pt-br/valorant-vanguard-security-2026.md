---
{
  "tag": "Safety",
  "title": "Vanguard Linha do Tempo de Segurança (2026)",
  "h1Title": "Valorant Atualizações de segurança da Vanguard em 2026",
  "seoTitle": "Valorant Anti-Cheat: Atualizações de Segurança da Vanguard em 2026",
  "slug": "valorant-vanguard-security-2026",
  "image": "/images/gameplay/valorant-vanguard-risk-hud.webp",
  "imageAlt": "Exemplo de overlay com pouca luz e um aviso de risco",
  "desc": "Maio de 2026 DMA e IOMMU, junho sob demanda HVCI/VBS/TPM, e novembro de 2026 VCT Pre-Check — contexto de risco simples para VALORANT, não um guia de bypass.",
  "date": "Nov 8, 2026",
  "dateIso": "2026-11-08",
  "readTime": "7 min de leitura",
  "author": "Equipe Valorant",
  "featured": true,
  "body": [
    {
      "type": "p",
      "text": "A maior ofensiva da Riot contra cheats de terceiros em 2026 chegou em três ondas públicas: um lançamento de maio focado em hardware Vanguard, uma linha de base de segurança sob demanda em junho e uma estrutura de integridade competitiva em novembro. Esta página resume o que a Riot comunicou e o que os compradores nesta loja devem tratar como contexto de risco. Ela não descreve detalhes internos de detecção e não oferece um bypass."
    },
    {
      "type": "h2",
      "text": "22 de maio de 2026 — DMA e IOMMU"
    },
    {
      "type": "p",
      "text": "A atualização de 22 de maio de 2026 Vanguard teve como alvo hardware externo de Acesso Direto à Memória — especialmente configurações do estilo SATA e NVMe usadas como pontes de cheats de terceiros. Tópicos da comunidade descreveram Windows IOMMU e remapeamento DMA bloqueando DLLs maliciosas vinculadas a esses dispositivos."
    },
    {
      "type": "p",
      "text": "A linha pública da Riot foi que a atualização quebra configurações de cheats ilícitos no PC host, e não que ela danifica hardware de varejo legítimo. Pilhas personalizadas de alto-end DMA discutidas online foram relatadas como inúteis nesse ambiente Windows após o patch. Nada disso muda o que esta loja vende: um Windows loader do checkout, e não um cartão DMA."
    },
    {
      "type": "h2",
      "text": "Junho de 2026 — Vanguard sob demanda"
    },
    {
      "type": "p",
      "text": "O Modo Sob Demanda Vanguard permite que o anti-cheat desative quando o VALORANT não está em execução. Ativá-lo troca conveniência por mitigação mais rigorosa. No Windows 11, a Riot exige que elementos de segurança baseados em virtualização — HVCI, VBS e TPM 2.0 — permaneçam ativados, fechando caminhos de injetores que dependiam de bases mais fracas."
    },
    {
      "type": "p",
      "text": "Se você carregar qualquer coisa de terceiros no mesmo PC, trate esses recursos Windows como parte da superfície de risco. A [página de status](/status/)) ainda está VERDE ou VERMELHA para este arquivo de menu, não sendo uma garantia de que o Vanguard o ignorará."
    },
    {
      "type": "h2",
      "text": "5 de novembro de 2026 — Estrutura de integridade do VCT 2027"
    },
    {
      "type": "p",
      "text": "Em 5 de novembro de 2026, a Riot detalhou a ampliação do jogo competitivo aberto antes do VCT 2027. O principal destaque para os jogadores casuais é o Pré-Check Vanguard: uma rotina de conformidade antes de qualificatórias online, com revisão mais pesada em camada de software e triagem de processos em segundo plano."
    },
    {
      "type": "p",
      "text": "As regras de torneio não são iguais ao risco de filas sem ranque, mas a direção é a mesma — mais verificações automatizadas antes de uma partida começar. Esta loja não promete uma pré-verificação limpa. Leia o rótulo de status após cada nota Vanguard e mantenha HWID e produtos separados se o problema for hardware ou um recurso."
    },
    {
      "type": "h2",
      "text": "O que fazer antes de carregar"
    },
    {
      "type": "p",
      "text": "Leia a [página de status](/status/)) após qualquer um dos marcos acima ou um patch de cliente VALORANT. VERDE lista o arquivo para carregar. VERMELHO significa aguardar. Compare esta linha do tempo com a nota mais curta de [Vanguard versus VAC](/blog/valorant-vanguard-vs-vac/)) se você também joga CS2 — os conselhos não se aplicam de um jogo para o outro."
    }
  ]
}
---
