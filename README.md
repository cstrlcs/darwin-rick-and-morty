# Darwin's Rick & Morty API

# Introdução

Este projeto foi desenvolvido com o intuito de consumir a API do Rick & Morty e exibir os personagens em uma lista, com a possibilidade de filtrar por nome e status. Faz parte do desafio técnico da Darwin.

# Preview

https://darwin-rick-and-morty.vercel.app/

# Tecnologias

- Vue.js
- Vue Router
- Vite
- Cypress
- Radix Vue
- TailwindCSS
- Rivotril

# Setup

```bash
pnpm i
pnpm dev
pnpx cypress open
```

# Explicações

Estou escrevendo uma breve explicação sobre o projeto, mas explico com mais detalhes no vídeo que irei anexar ao e-mail.

### Styling e componentes

- O projeto é estilizado com TailwindCSS junto com alguns primitivos do Radix-vue para fornecer a base de alguns comps como Select e Pagination.

### Rotas

Além da rota principal que exibe os personagens, resolvi aproveitar o resto da API e montar também uma listagem de episódios e locais. Para isso, criei mais duas rotas, uma para cada e uma rota de item único.

- / (Personagens)
- /character/:id (Personagem)
- /episodes (Episódios)
- /episode/:id (Episódio)
- /locations (Locais)
- /location/:id (Local)
- /* (404)

As rotas servem como base e utilizam um dos seguints componentes:

- List (Listagem completa de itens)
- Unique (Item único)

Esses dois componentes são componentes genéricos que recebem uma função GET de service e uma função formatter pra formatar os seus dados. Todo o componente é tipado atavés de uma genéric T e U que estendem seus respectivos tipos.

### API

Apesar de existirem wrappers para a API do Rick e Morty, decidi mapear a API manualmente pra ter mais controle e flexibilidade sobre os dados.

Segui uma estrutura de providers & services pra consumir a API, nomeando o primeiro provider de `defaultProvider`.

* defaultProvider
  * characterService
  * episodeService
  * locationService

### Testes

- Cypress foi utilizado para testes de componentes. Apesar 3 componentes foram testados por falta de tempo. A ideia foi fazer o setup do cypress e configurar o ambiente.
