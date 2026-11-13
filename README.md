
## Fase 1 — Wireframes

Entrega dos WireFrames mobile, tablet e desktop.

## Fase 2 — Página

Construção da estrutura visual com React, TypeScript e Tailwind CSS, seguindo os wireframes. Foram implementados cabeçalho, navegação, destaque, catálogo, ficha de detalhes, coleções temáticas, seção dos três passos e rodapé.

A página recebeu links âncora para navegar entre as seções, cabeçalho fixo durante a rolagem e uma grade de títulos com duas colunas no celular, três no tablet e cinco no computador.

## Fase 3 — Componentes, dados e estado

**Branch:** `fase-3-componentes`

### O que foi feito

- Separação das seções e dos cards em componentes com responsabilidades definidas.
- Criação dos tipos `Title` e `Collection` e dos vetores locais com dez títulos e três coleções.
- Renderização das duas listagens com `map`, usando o identificador de cada item como `key`.
- Tipagem das props dos componentes que recebem dados e funções.
- Ativação dos filtros por tipo e gênero, combinados com a busca por título.

### Decisões técnicas

Os estados `activeType`, `activeGenre` e `searchText` ficam no `App.tsx`. Seus valores e as funções de atualização são passados ao catálogo por props. O catálogo utiliza `filter` para selecionar os resultados e `map` para apresentar os cards, preservando o vetor original.

`TitleCard` e `CollectionCard` concentram a estrutura de apresentação de cada item. Os estilos permanecem no `src/index.css`, utilizando `@apply` do Tailwind em classes descritivas. As imagens ficam na pasta `public/imagens/`.

Nesta fase, as duas listagens utilizam dados locais declarados em `src/data/titles.ts` e `src/data/collections.ts`. O consumo de JSON externo faz parte da Fase 4.

### Desafio bonificado implementado — Busca

O campo de busca é controlado por `useState`, com `value` e `onChange`, e filtra os títulos em tempo real. Aceita trechos do nome, ignora diferenças entre maiúsculas e minúsculas e desconsidera espaços no início e no fim do texto.

A busca funciona junto com os filtros por tipo e gênero. Por exemplo, selecionar **Séries** e **Ficção científica** apresenta Dark e Stranger Things; digitar **dark** mantém apenas Dark. Ao apagar o texto, os dois títulos voltam a aparecer, preservando os filtros selecionados.
