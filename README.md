# linktrii

Página de links pessoal (estilo Linktree) construída a partir do design
[Personal Portfolio – Portfolio App](https://www.figma.com/design/91QKCZ85NYHthtKJ5mo6hi/Personal-Portfolio---Porrtfolio-App--Community-)
do Figma Community.

HTML + CSS + JS puro. Sem build, sem dependências, sem `node_modules`.

---

## Estrutura

```
index.html                 marcação + meta tags de preview
dev-server.js              servidor local só pra desenvolvimento (não sobe no deploy)
assets/
  css/style.css            todo o visual, começando pelos tokens de cor
  js/data.js               >>> É AQUI QUE VOCÊ EDITA O CONTEÚDO <<<
  js/icons.js              SVGs inline das marcas
  js/app.js                monta a página a partir do data.js
  img/avatar.jpg           sua foto, fundo já trocado pelo azul sólido
  img/og.jpg               imagem de preview em redes sociais (1200x630)
```

## Editando

Praticamente tudo mora em **`assets/js/data.js`**:

| O quê | Onde |
|---|---|
| Nome, @, bio, local | `profile` |
| Fileira de ícones com números | `stats` (deixe `[]` pra esconder a seção) |
| Cards de link | `links` |

### Cards de link

```js
{
  icon:  "github",      // chave de assets/js/icons.js
  theme: "t-github",    // classe de cor
  span:  6,             // largura: 6 = linha inteira, 4+2 ou 3+3 dividem a linha
  title: "GitHub",
  sub:   "@seuuser",
  href:  "https://github.com/seuuser",
  badge: "Follow"       // opcional, o balãozinho
}
```

**Ícones disponíveis:** `mail` `github` `facebook` `figma` `dev` `instagram`
`linkedin` `whatsapp` `x` `youtube` `spotify` `dribbble` `behance` `globe`
`scissors`

**Temas de cor:** `t-email` `t-facebook` `t-github` `t-figma` `t-x` `t-instagram`
`t-linkedin` `t-whatsapp` `t-youtube` `t-spotify` `t-behance` `t-dribbble`
`t-accent` (amarelo do Figma) `t-light` (branco)

Um card com `action: "copy"` copia o texto em vez de abrir o link — é o que o
card de Email faz hoje.

### Cores

Todas as cores são variáveis CSS no topo de `assets/css/style.css`.
O acento hoje é o azul da foto (`--accent: #0593D5`); trocar por `#FFC629`
devolve o amarelo original do Figma.

O tema claro é o bloco `[data-theme="light"]`, logo abaixo.

---

## Rodando local

```bash
node dev-server.js
```

Abre em `http://localhost:5173`. Abrir o `index.html` direto pelo Explorer
também funciona, mas o botão de copiar email cai no modo de compatibilidade
porque `file://` não tem acesso à Clipboard API.

## No ar

**https://viniciosmunuz.github.io/links/**

GitHub Pages a partir da branch `main`, pasta raiz. **Todo push para `main`
republica em 1–2 minutos**, sem build no meio:

```bash
git add -A; git commit -m "feat(links): ..."; git push
```

Esse é um *project site*, então o endereço tem o `/links/` no fim — o
`viniciosmunuz.github.io` na raiz é o portfólio, outro repositório.

Se um dia o endereço mudar, `og:url` e `og:image` no `<head>` do `index.html`
têm que mudar junto: as duas são URLs absolutas porque WhatsApp e Discord não
resolvem caminho relativo na hora de montar o preview.

---

## Conteúdo atual

Tudo preenchido com dados reais, conferidos em 20/08/2026:

| Card | Destino |
|---|---|
| Email | `jvinipmuniz@gmail.com` (clique copia) |
| Instagram | [@viniciosmuniz_](https://www.instagram.com/viniciosmuniz_) — 1.980 seguidores |
| GitHub | [@Viniciosmunuz](https://github.com/Viniciosmunuz) — 13 repos públicos |
| LinkedIn | [vinicios-muniz-332370423](https://www.linkedin.com/in/vinicios-muniz-332370423/) — 100 conexões |
| WhatsApp | link QR (`wa.me/qr/…`) |
| Portfólio | [viniciosmunuz.github.io](https://viniciosmunuz.github.io) |
| BarberFlow | [deploy `-smoky`](https://fullstackweek-barber-v2-smoky.vercel.app) — **não** o `-tawny`, que está com 500 |

**O número de telefone não aparece em lugar nenhum da página**, por decisão dele.
O link do WhatsApp é o QR curto, que abre a conversa sem revelar o número — se um
dia alguém trocar por `wa.me/55DDDNUMERO`, o número volta a ficar exposto na URL.

## Histórico

A página teve uma galeria com abas (Todos / Projetos / Portfólio) e 7 capturas
de tela dos projetos. **Foi removida em 20/08/2026** a pedido — HTML, CSS, o
`renderGallery` do `app.js` e o bloco `gallery` do `data.js` saíram junto, e as
imagens foram apagadas. Se um dia voltar, é preciso reconstruir os quatro.
