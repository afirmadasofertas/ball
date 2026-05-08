# Adidas PDP Design System

Fonte de referencia: https://www.adidas.com/us/fifa-world-cup-26-historical-pro-ball-set/KB1812.html

Este guia resume os padroes visuais e de interface observados na pagina de produto da adidas para o "FIFA World Cup 26 Historical Pro Ball Set". Use como base para recriar telas de e-commerce com linguagem adidas: direta, funcional, esportiva, com alto contraste e botoes fortes.

## Personalidade Visual

- Estetica: e-commerce esportivo premium, editorial e utilitario.
- Sensacao: rapido, preciso, objetivo, com foco total em produto e compra.
- Direcao: contraste preto/branco, grids rigidos, bordas retas, tipografia condensada/forte e setas como linguagem de acao.
- Evitar: cards arredondados, sombras decorativas, gradientes suaves, excesso de cor e botoes com visual delicado.

## Tokens Principais

```css
:root {
  --ad-black: #000000;
  --ad-white: #ffffff;
  --ad-off-white: #f5f5f5;
  --ad-gray-100: #eceff1;
  --ad-gray-200: #d3d7da;
  --ad-gray-300: #c8cbcc;
  --ad-gray-500: #767677;
  --ad-gray-700: #3a3a3a;
  --ad-red: #e32b2b;
  --ad-blue-focus: #0066cc;

  --ad-font: "AdihausDIN", "Helvetica Neue", Arial, sans-serif;
  --ad-font-display: "AdineuePRO", "Arial Black", "Helvetica Neue", Arial, sans-serif;

  --ad-radius-none: 0;
  --ad-border: 1px solid var(--ad-black);
  --ad-border-muted: 1px solid var(--ad-gray-300);

  --ad-space-1: 4px;
  --ad-space-2: 8px;
  --ad-space-3: 12px;
  --ad-space-4: 16px;
  --ad-space-5: 20px;
  --ad-space-6: 24px;
  --ad-space-8: 32px;
  --ad-space-10: 40px;
  --ad-space-12: 48px;

  --ad-transition-fast: 120ms ease;
  --ad-transition-base: 180ms ease;
}
```

## Tipografia

### Familias

- Display: `AdineuePRO`, fallback para `Arial Black`, `Helvetica Neue`, `Arial`, sans-serif.
- Texto/UI: `AdihausDIN`, fallback para `Helvetica Neue`, `Arial`, sans-serif.
- Caso as fontes adidas nao estejam disponiveis, use `Arial`/`Helvetica Neue` com pesos fortes.

### Escala

```css
.ad-title-xl {
  font-family: var(--ad-font-display);
  font-size: clamp(32px, 5vw, 56px);
  line-height: .95;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.ad-title-product {
  font-family: var(--ad-font-display);
  font-size: clamp(26px, 3vw, 42px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.015em;
}

.ad-heading {
  font-family: var(--ad-font-display);
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
}

.ad-body {
  font-family: var(--ad-font);
  font-size: 16px;
  line-height: 1.45;
  font-weight: 400;
}

.ad-small {
  font-family: var(--ad-font);
  font-size: 13px;
  line-height: 1.35;
  font-weight: 400;
}

.ad-label {
  font-family: var(--ad-font);
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
}
```

## Layout PDP

### Desktop

- Grid principal em duas colunas:
  - Galeria: 60% a 66% da largura.
  - Painel de compra: 34% a 40% da largura.
- Painel de compra pode ficar sticky no topo em telas grandes.
- Galeria usa imagens grandes em grade 2 colunas, com fundo cinza claro.
- Breadcrumb discreto acima do produto.
- Informacoes principais no painel:
  - Categoria: `Soccer`.
  - Rating: nota + quantidade de reviews.
  - Nome do produto.
  - Preco.
  - Aviso promocional/adiClub.
  - Cor.
  - Seletor de tamanho.
  - CTA principal.
  - Wishlist.

```css
.ad-pdp {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(360px, .85fr);
  gap: 32px;
  background: var(--ad-white);
  color: var(--ad-black);
}

.ad-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
}

.ad-gallery-item {
  background: var(--ad-gray-100);
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
}

.ad-buybox {
  position: sticky;
  top: 24px;
  align-self: start;
  padding: 24px 24px 32px;
}
```

### Mobile

- Uma coluna.
- Galeria horizontal ou carrossel no topo.
- Painel de compra abaixo da imagem principal.
- CTA principal deve ficar largo, com alvo minimo de 48px de altura.

```css
@media (max-width: 767px) {
  .ad-pdp {
    display: block;
  }

  .ad-gallery {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .ad-gallery-item {
    min-width: 86vw;
    scroll-snap-align: start;
  }

  .ad-buybox {
    position: static;
    padding: 20px 16px 28px;
  }
}
```

## Botoes

A linguagem dos botoes adidas e reta, de alto contraste, com seta para indicar acao. O CTA principal e preto com texto branco. O secundario costuma ser branco ou transparente com borda preta.

### Botao Primario

Uso: `Add to bag`, `Sign up for free`, `Download the app`, acao principal da tela.

```html
<button class="ad-btn ad-btn-primary">
  <span>Add to bag</span>
  <span class="ad-btn-arrow" aria-hidden="true">→</span>
</button>
```

```css
.ad-btn {
  min-height: 50px;
  min-width: 160px;
  border-radius: 0;
  border: 1px solid var(--ad-black);
  padding: 0 18px 0 20px;
  font-family: var(--ad-font);
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .02em;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  cursor: pointer;
  position: relative;
  transition: transform var(--ad-transition-fast), color var(--ad-transition-fast), background var(--ad-transition-fast);
}

.ad-btn::after {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  right: -4px;
  bottom: -4px;
  border-right: 1px solid var(--ad-black);
  border-bottom: 1px solid var(--ad-black);
  pointer-events: none;
}

.ad-btn-primary {
  background: var(--ad-black);
  color: var(--ad-white);
}

.ad-btn-primary::after {
  border-color: var(--ad-black);
}

.ad-btn-primary:hover {
  color: var(--ad-gray-300);
}

.ad-btn-primary:active {
  transform: translate(2px, 2px);
}

.ad-btn-primary:focus-visible {
  outline: 2px solid var(--ad-blue-focus);
  outline-offset: 3px;
}

.ad-btn-arrow {
  font-size: 22px;
  line-height: 1;
  transform: translateY(-1px);
}
```

### Botao Secundario

Uso: voltar, wishlist textual, acoes de suporte, filtros.

```html
<button class="ad-btn ad-btn-secondary">
  <span>Add to Wishlist</span>
  <span class="ad-btn-arrow" aria-hidden="true">♡</span>
</button>
```

```css
.ad-btn-secondary {
  background: var(--ad-white);
  color: var(--ad-black);
}

.ad-btn-secondary:hover {
  color: var(--ad-gray-500);
}

.ad-btn-secondary:active {
  transform: translate(2px, 2px);
}
```

### Botao Icone

Uso: wishlist no topo, bag, menu, busca, fechar modal.

```html
<button class="ad-icon-btn" aria-label="Add to Wishlist">
  ♡
</button>
```

```css
.ad-icon-btn {
  width: 44px;
  height: 44px;
  border: 1px solid var(--ad-black);
  border-radius: 0;
  background: var(--ad-white);
  color: var(--ad-black);
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  transition: background var(--ad-transition-fast), color var(--ad-transition-fast);
}

.ad-icon-btn:hover {
  background: var(--ad-black);
  color: var(--ad-white);
}

.ad-icon-btn:focus-visible {
  outline: 2px solid var(--ad-blue-focus);
  outline-offset: 2px;
}
```

## Seletores de Tamanho

Na pagina observada, o produto possui tamanho unico exibido como `AAA`. O padrao adidas e usar caixas retangulares com borda, texto centralizado e estado selecionado/indisponivel.

```html
<div class="ad-size-grid" aria-label="Sizes">
  <button class="ad-size-option is-selected">AAA</button>
</div>
```

```css
.ad-size-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--ad-gray-300);
  border-left: 1px solid var(--ad-gray-300);
}

.ad-size-option {
  min-height: 48px;
  border: 0;
  border-right: 1px solid var(--ad-gray-300);
  border-bottom: 1px solid var(--ad-gray-300);
  background: var(--ad-white);
  color: var(--ad-black);
  font-family: var(--ad-font);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.ad-size-option:hover,
.ad-size-option.is-selected {
  box-shadow: inset 0 0 0 2px var(--ad-black);
}

.ad-size-option[disabled] {
  color: var(--ad-gray-500);
  background:
    linear-gradient(to bottom right, transparent calc(50% - 1px), var(--ad-gray-300) 50%, transparent calc(50% + 1px)),
    var(--ad-white);
  cursor: not-allowed;
}
```

## Avisos e Mensagens

Avisos de promocao ou elegibilidade aparecem como blocos de texto curtos, com separacao clara antes dos controles.

```css
.ad-notice {
  margin: 20px 0;
  padding: 14px 0;
  border-top: 1px solid var(--ad-gray-300);
  border-bottom: 1px solid var(--ad-gray-300);
  font-family: var(--ad-font);
  font-size: 14px;
  line-height: 1.45;
  color: var(--ad-black);
}
```

## Rating

```html
<a class="ad-rating" href="#reviews" aria-label="Rated 3.5 out of 5 from 13 reviews">
  <span class="ad-stars">★★★☆☆</span>
  <span>3.5</span>
  <span>(13)</span>
</a>
```

```css
.ad-rating {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--ad-black);
  font-family: var(--ad-font);
  font-size: 13px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ad-stars {
  letter-spacing: -1px;
}
```

## Breadcrumb

```css
.ad-breadcrumb {
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: var(--ad-font);
  font-size: 14px;
  line-height: 1;
  color: var(--ad-black);
}

.ad-breadcrumb a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ad-back {
  font-weight: 700;
  text-transform: uppercase;
}
```

## Accordions

Use para descricao, detalhes, envio e devolucao. O visual deve ser seco, com divisorias horizontais.

```html
<details class="ad-accordion">
  <summary>Product Details</summary>
  <div>
    A limited-collection boxed set of all 15 adidas World Cup match balls.
  </div>
</details>
```

```css
.ad-accordion {
  border-top: 1px solid var(--ad-black);
}

.ad-accordion:last-child {
  border-bottom: 1px solid var(--ad-black);
}

.ad-accordion summary {
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: var(--ad-font);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  list-style: none;
}

.ad-accordion summary::-webkit-details-marker {
  display: none;
}

.ad-accordion summary::after {
  content: "+";
  font-size: 24px;
  line-height: 1;
}

.ad-accordion[open] summary::after {
  content: "-";
}

.ad-accordion > div {
  padding: 0 0 20px;
  font-family: var(--ad-font);
  font-size: 15px;
  line-height: 1.55;
  color: var(--ad-gray-700);
}
```

## Header / Navegacao

Padroes observados:

- Utilidades no topo: store finder, help, orders and returns, gift cards, join adiClub.
- Navegacao principal por categorias: MEN, WOMEN, KIDS, SPORTS, SALE, NEW & TRENDING.
- Carrinho e conta no canto direito.
- Logo adidas como ancora para homepage.

```css
.ad-topbar {
  height: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  align-items: center;
  padding: 0 32px;
  background: var(--ad-white);
  color: var(--ad-black);
  font-family: var(--ad-font);
  font-size: 12px;
}

.ad-mainnav {
  height: 64px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
  padding: 0 32px;
  border-bottom: 1px solid var(--ad-gray-300);
}

.ad-navlinks {
  display: flex;
  gap: 24px;
  align-items: center;
}

.ad-navlinks a {
  color: var(--ad-black);
  font-family: var(--ad-font);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
}

.ad-navlinks a:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
}
```

## Footer

Padroes observados:

- Bloco forte de adiClub: `JOIN OUR ADICLUB & GET 15% OFF` + CTA.
- Colunas densas: Products, Sports, Collections, Support, Company Info, Follow Us.
- Links pequenos, alto volume de informacao.
- Base legal com copyright.

```css
.ad-club-band {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 36px 24px;
  background: var(--ad-black);
  color: var(--ad-white);
}

.ad-club-band h2 {
  margin: 0;
  font-family: var(--ad-font-display);
  font-size: clamp(24px, 3vw, 38px);
  line-height: 1;
  text-transform: uppercase;
}

.ad-footer {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 28px;
  padding: 40px 32px;
  background: var(--ad-white);
  color: var(--ad-black);
}

.ad-footer h3 {
  margin: 0 0 14px;
  font-family: var(--ad-font);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.ad-footer a {
  display: block;
  margin: 0 0 8px;
  color: var(--ad-black);
  font-family: var(--ad-font);
  font-size: 13px;
  text-decoration: none;
}

.ad-footer a:hover {
  text-decoration: underline;
}
```

## Iconografia

Icones funcionais observados no HTML da pagina:

- `arrow-right`, `arrow-left`, `arrow-down`, `arrow-up`
- `bag-active`, `bag-inactive`
- `wishlist-active`, `wishlist-inactive`
- `search`
- `hamburger`
- `profile`
- `close`
- `plus`, `minus`
- `rating-active`, `rating-inactive`
- `share`, `zoom`

Diretrizes:

- Use icones lineares, pretos, sem preenchimento decorativo.
- Seta direita e parte da identidade de CTA.
- Evite icones coloridos em controles principais.
- Tamanho comum: 20px a 24px.

## Estados Interativos

```css
.ad-interactive {
  transition: color var(--ad-transition-fast), background var(--ad-transition-fast), border-color var(--ad-transition-fast), transform var(--ad-transition-fast);
}

.ad-interactive:hover {
  color: var(--ad-gray-500);
}

.ad-interactive:focus-visible {
  outline: 2px solid var(--ad-blue-focus);
  outline-offset: 2px;
}

.ad-interactive:disabled,
.ad-interactive[aria-disabled="true"] {
  opacity: .45;
  cursor: not-allowed;
}
```

## Exemplo De Bloco Buybox

```html
<aside class="ad-buybox">
  <div class="ad-product-meta">Soccer</div>

  <a class="ad-rating" href="#reviews">
    <span class="ad-stars">★★★☆☆</span>
    <span>3.5</span>
    <span>(13)</span>
  </a>

  <h1 class="ad-title-product">FIFA World Cup 26 Historical Pro Ball Set</h1>
  <p class="ad-price">$2,500</p>

  <div class="ad-notice">
    adiClub discount vouchers can be used on this item. Other promo codes will not apply.
  </div>

  <p class="ad-color">Multicolor</p>

  <div class="ad-size-header">
    <h2>Sizes</h2>
  </div>

  <div class="ad-size-grid">
    <button class="ad-size-option is-selected">AAA</button>
  </div>

  <div class="ad-action-stack">
    <button class="ad-btn ad-btn-primary">
      <span>Add to bag</span>
      <span class="ad-btn-arrow" aria-hidden="true">→</span>
    </button>

    <button class="ad-btn ad-btn-secondary">
      <span>Add to Wishlist</span>
      <span class="ad-btn-arrow" aria-hidden="true">♡</span>
    </button>
  </div>
</aside>
```

```css
.ad-product-meta,
.ad-color {
  font-family: var(--ad-font);
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 12px;
}

.ad-price {
  margin: 12px 0 0;
  font-family: var(--ad-font);
  font-size: 16px;
  font-weight: 700;
}

.ad-size-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 10px;
}

.ad-size-header h2 {
  margin: 0;
  font-family: var(--ad-font);
  font-size: 16px;
  font-weight: 700;
}

.ad-action-stack {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

.ad-action-stack .ad-btn {
  width: 100%;
}
```

## Checklist De Fidelidade

- Usar preto/branco como base, cinzas apenas para fundo de imagem e divisorias.
- Botoes sempre retos, sem border-radius.
- CTA principal preto, texto branco e seta a direita.
- Tipografia forte e compacta, principalmente em titulos.
- Imagens do produto grandes e dominantes.
- Compra sempre clara: preco, tamanho, add to bag e wishlist.
- Bordas finas em vez de sombras.
- Mobile com CTA largo e layout de uma coluna.
- Footer denso e utilitario, sem visual de landing page.

## Conteudo Observado Na Pagina

- Produto: FIFA World Cup 26 Historical Pro Ball Set.
- Categoria: Soccer / Accessories.
- Avaliacao exibida: 3.5 com 13 reviews no momento da captura.
- Preco exibido: $2,500.
- Cor: Multicolor.
- Tamanho exibido: AAA.
- CTAs: Add to bag, Add to Wishlist.
- Mensagem: adiClub discount vouchers can be used on this item. Other promo codes will not apply.

