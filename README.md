# Very Usefull Tools to Remeber

## Tabela de conteúdo

<!-- ts -->

- [Sobre](#sobre)
- [Features](#features)
- [Pré-requisitos](#pre)
- [Como utilizar](#how)
- [Tecnologias usadas](#techs)
- [Autor](#me)
- [Licença](#license)

<!--te-->

<h3 id="sobre">Sobre o projeto</h3>

Projeto onde o usuário poderá adicionar ferramentas que utiliza para melhorar sua produtividade, adicionando o nome da ferramenta, site, descrição sobre a ferramenta e tags que se identificam com o propósito da ferramenta.
Este desafio foi motivado pela [BossaBox](https://app.bossabox.com/profile/me)

<h3 id="features">Features</h3>

- [x] Pesquisa de modo geral
- [x] Pesquisa por tags
- [x] Adicionar novas ferramentas
- [x] Remover ferramentas

<h3 id='pre'>Pré-requisitos</h3>

Para utilizar esta aplicação é necessário primeiro baixar/clonar o [repositório](https://gitlab.com/bossabox/challenge-fake-api/tree/master) que emulará um banco de dados, rodar os comandos `yarn install` e `npx json-server db.json` que irá rodar no seu local host, na porta 3000.
Após do mesmo modo é clonar esta [aplicação](), utilizar o mesmo comando `yarn install` para instalar as dependências e `yarn start` para rodar a aplicação, que perguntará se deseja rodar na porta 3001, onde é só começar.abs

<h3 id='how'>Como utilizar</h3>

Esta aplicação é um SPA (single page aplication) e conta com feature como:

- Pesquisar por atributos gerais

  - É possível pesquisar diretamente pelos atributos presentes no nome, descrição da ferramenta
    &nbsp;&nbsp;

     <img width="450" style="border-radius: 5px" src="https://imgur.com/uTqEvjA.gif" alt="Search method">
    &nbsp;&nbsp;

- Pesquisar por tags.
  - Ao ativar o campo de seleção ao lado da barra de pesquisa, confirma a opção de pesquisar somente pelas tags da ferramenta.
    &nbsp;&nbsp;
    <img width="450" style="border-radius: 5px" src="https://imgur.com/e64qBwN.gif" alt="Search method by tags">
    &nbsp;&nbsp;
- Adicionar novas ferramentas.

  - Ao clicar no botão no campo superior direito escrito **+ ADD** irá abrir novos campos para adicionar as informações da nova ferramenta como nome, link, descrição e tags dela.
    &nbsp;&nbsp;
    <img width="450" style="border-radius: 5px" src="https://imgur.com/7O7pNLa.gif" alt="adding tools">
    &nbsp;&nbsp;

- Remover uma ferramenta.

  - Se o usuário desejar remover uma feramenta, deve clicar no botão **X remove** no canto superior de cada card da ferramenta. Um diálogo de confirmação irá aparecer para confirmar se o usuário deseja realmente excluir aquela ferramenta.
    &nbsp;&nbsp;
    <img width="450" style="border-radius: 5px" src="https://imgur.com/E5ipgHO.gif" alt="Removing tools">

  &nbsp;&nbsp;

<h3 id='techs'>Tecnologias Usadas</h3>

[React](https://reactjs.org/)
[React-Redux](https://react-redux.js.org/)
[Redux-Thunk](https://github.com/reduxjs/redux-thunk)
[Material-UI](https://material-ui.com/pt/)
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
[Formik](https://formik.org/)

<h3 id='me'> Autor</h3>

[![BADGE](https://img.shields.io/static/v1?label=github&message=Fernandochi&color=181717&style=social&logo=github&link=https://github.com/fernandochi)](https://github.com/fernandochi)
[![BADGE](https://img.shields.io/static/v1?label=linkedin&message=Fernando&color=0A66C2&style=social&logo=linkedin&link=https://www.linkedin.com/in/fernando-l-santos/)](https://www.linkedin.com/in/fernando-l-santos/)
[![BADGE](https://img.shields.io/static/v1?label=Netfly&message=Netfly&color=88C848&style=social&logo=Netfly&link=https://vuttr-fer.netlify.app/)](https://vuttr-fer.netlify.app/)

<h3 id='license'>Licença</h3>

[MIT](https://choosealicense.com/licenses/mit/)
