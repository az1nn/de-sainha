# DE SAINHA — O País das Maravilhas

Landing page promocional, responsiva e zero-dependency para o evento **DE SAINHA — O País das Maravilhas**, no Rio de Janeiro.

## Evento

- **Data:** 09 de outubro de 2026
- **Horário:** 21h–04h
- **Local:** Experience Music — Rua Riachuelo, 20, Lapa, Rio de Janeiro
- **Line-up divulgado:** DABREN · DABOMB · MAX · YURE IDD
- **Moods:** Hip Hop · Baile Funk · Trap · Dancehall · Afrobeat
- **Ingressos:** https://shotgun.live/pt-br/events/de-sainha-o-pais-das-maravilhas
- **Instagram:** https://www.instagram.com/desainha/

## Direção de produto

A página foi desenhada para conversão mobile-first, com:

- hero full-screen e CTA de ingresso acima da dobra;
- data, horário, local e countdown sempre claros;
- narrativa visual editorial/club culture;
- line-up tipográfico de alto impacto;
- dresscode e identidade cultural do De Sainha;
- CTA persistente em mobile;
- FAQ, SEO social e `MusicEvent` em JSON-LD;
- suporte a `prefers-reduced-motion` e navegação por teclado.

## Stack

HTML5 + CSS3 + JavaScript puro. Sem build step e sem dependências de runtime.

## Desenvolvimento local

```bash
python -m http.server 8080
```

Abra `http://localhost:8080`.

## Deploy no GitHub Pages

O projeto é estático. No repositório GitHub, abra **Settings → Pages** e configure **Deploy from a branch**, usando `master` e `/ (root)`.

## Assets

A V1 referencia fotografias e arte oficial já publicadas pelos canais do De Sainha/Shotgun. Para produção definitiva, recomenda-se versionar os masters autorizados dentro de `assets/` para evitar hotlinking e garantir controle de performance, direitos e disponibilidade.
