---
{
  "tag": "Safety",
  "title": "Vanguard Cronología de seguridad (2026)",
  "h1Title": "Valorant Actualizaciones de seguridad de Vanguard en 2026",
  "seoTitle": "Valorant Anti-Cheat: Actualizaciones de seguridad de Vanguard en 2026",
  "slug": "valorant-vanguard-security-2026",
  "image": "/images/gameplay/valorant-vanguard-risk-hud.webp",
  "imageAlt": "Ejemplo de superposición con poca luz y una nota de riesgo",
  "desc": "Mayo de 2026 DMA e IOMMU, junio HVCI/VBS/TPM, bajo demanda y noviembre de 2026 VCT Pre-Check: contexto de riesgo claro para VALORANT, no una guía de elusión.",
  "date": "8 de nov. de 2026",
  "dateIso": "2026-11-08",
  "readTime": "7 min de lectura",
  "author": "Personal de Valorant",
  "featured": true,
  "body": [
    {
      "type": "p",
      "text": "La mayor ofensiva de Riot contra los hacks de terceros en 2026 llegó en tres oleadas públicas: un lanzamiento de Vanguard enfocado en hardware en mayo, una base de seguridad bajo demanda en junio y un marco de integridad competitiva en noviembre. Esta página resume lo que comunicó Riot y lo que los compradores en esta tienda deben considerar como contexto de riesgo. No describe detalles internos de detección ni ofrece un método para sortear el sistema."
    },
    {
      "type": "h2",
      "text": "22 de mayo de 2026 — DMA e IOMMU"
    },
    {
      "type": "p",
      "text": "La actualización del 22 de mayo de 2026 de Vanguard se dirigió al hardware de acceso directo a memoria (DMA) externo, esppecialmente configuraciones de tipo SATA y NVMe utilizadas como puentes para valorant cheats. Los hilos de la comunidad describieron cómo IOMMU de Windows y el reasignamiento de DMA bloqueaban las DLL maliciosas vinculadas a esos dispositivos."
    },
    {
      "type": "p",
      "text": "La postura pública de Riot fue que la actualización interrumpe las configuraciones de config ilícitas en el PC host, no que arruina el hardware comercial legítimo. Se informó que las pilas personalizadas de alto end DMA comentadas en línea quedaron inútiles en ese entorno de Windows tras el parche. Nada de eso cambia lo que vende esta tienda: un Windows loader desde el pago, no una tarjeta DMA."
    },
    {
      "type": "h2",
      "text": "Junio de 2026 — Vanguard bajo demanda"
    },
    {
      "type": "p",
      "text": "El modo bajo demanda de Vanguard permite que el antitrampas se desactive cuando VALORANT no se está ejecutando. Activarlo cambia comodidad por una mitigación más estricta. En Windows 11, Riot requiere que los elementos de seguridad basados en virtualización —HVCI, VBS y TPM 2.0— permanezcan habilitados, cerrando rutas de inyección que dependían de bases más débiles."
    },
    {
      "type": "p",
      "text": "Si cargas cualquier elemento de terceros en el mismo PC, trata esas funciones de Windows como parte de la superficie de riesgo. La [página de estado](/status/) sigue estando en VERDE o ROJO para este archivo de menú, lo que no es una afirmación de que Vanguard lo ignorará."
    },
    {
      "type": "h2",
      "text": "5 de noviembre de 2026 — Marco de integridad VCT 2027"
    },
    {
      "type": "p",
      "text": "El 5 de noviembre de 2026, Riot detalló la ampliación del juego competitivo abierto de cara a VCT 2027. La novedad principal para los jugadores habituales es Vanguard Pre-Check: una rutina de cumplimiento antes de las eliminatorias en línea, con una revisión más profunda de la capa de software y escaneo de procesos en segundo plano."
    },
    {
      "type": "p",
      "text": "Las reglas de los torneos no son lo mismo que el riesgo en las colas no competitivas, pero la dirección es la misma: más comprobaciones automatizadas antes de que comience una partida. Esta tienda no promete una comprobación previa limpia. Lee la etiqueta de estado después de cada nota de Vanguard, y mantén separados HWID y los productos si el problema es el hardware o una apelación."
    },
    {
      "type": "h2",
      "text": "Qué hacer antes de cargar"
    },
    {
      "type": "p",
      "text": "Lee la [página de estado](/status/) después de cualquiera de los hitos anteriores o de un parche del cliente de VALORANT. VERDE enumera el archivo para cargar. ROJO significa esperar. Compara esta cronología con la nota más breve de [Vanguard frente a VAC](/blog/valorant-vanguard-vs-vac/)) si también juegas a CS2; los consejos no se transfieren entre juegos."
    }
  ]
}
---
