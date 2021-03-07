# Very Usefull Tools to Remeber

## Tabela de conteúdo

<!-- ts -->

- [Sobre](#sobre)
- [Features](#features)
- [Pré-requisitos](#prerequisitos)
- [Como utilizar](#utilizando)
- [Tecnologias usadas](#techs)
- [Autor](#me)
- [Licença](#license)

<!--te-->

## Sobre o projeto

Projeto onde o usuário poderá adicionar ferramentas que utiliza para melhorar sua produtividade, adicionando o nome da ferramenta, site, descrição sobre a ferramenta e tags que se identificam com o propósito da ferramenta.
Este desafio foi motivado pela [BossaBox](https://app.bossabox.com/profile/me)

### Features

- [x] Pesquisa de modo geral
- [x] Pesquisa por tags
- [x] Adicionar novas ferramentas
- [x] Remover ferramentas

### Pré-requisitos

Para utilizar esta aplicação é necessário primeiro baixar/clonar o [repositório](https://gitlab.com/bossabox/challenge-fake-api/tree/master) que emulará um banco de dados, rodar os comandos `yarn install` e `npx json-server db.json` que irá rodar no seu local host, na porta 3000.
Após do mesmo modo é clonar esta [aplicação](), utilizar o mesmo comando `yarn install` para instalar as dependências e `yarn start` para rodar a aplicação, que perguntará se deseja rodar na porta 3001, onde é só começar.abs

### Como utilizar

Esta aplicação é um SPA (single page aplication) e conta com feature como:

- Pesquisar por atributos gerais
  - É possível pesquisar diretamente pelos atributos presentes no nome, descrição da ferramenta
- Pesquisar por tags.
  - Ao ativar o campo de seleção ao lado da barra de pesquisa, confirma a opção de pesquisar somente pelas tags da ferramenta.
- Adicionar novas ferramentas.
  - Ao clicar no botão no campo superior direito escrito **+ ADD** irá abrir novos campos para adicionar as informações da nova ferramenta como nome, link, descrição e tags dela.
- Remover uma ferramenta.
  - Se o usuário desejar remover uma feramenta, deve clicar no botão **X remove** no canto superior de cada card da ferramenta. Um diálogo de confirmação irá aparecer para confirmar se o usuário deseja realmente excluir aquela ferramenta.

### Tecnologias Usadas

[React](https://reactjs.org/)
[React-Redux](https://react-redux.js.org/)
[Redux-Thunk](https://github.com/reduxjs/redux-thunk)
[Material-UI](https://material-ui.com/pt/)
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

### Autor

[![BADGE](https://img.shields.io/static/v1?label=github&message=Fernandochi&color=181717&style=for-the-badge&logo=ghost&link=https://github.com/fernandochi)](https://github.com/fernandochi)
[![BADGE](https://img.shields.io/static/v1?label=linkedin&message=Fernando&color=0A66C2&style=for-the-badge&logo=linkedin&link=https://www.linkedin.com/in/fernando-l-santos/)](https://www.linkedin.com/in/fernando-l-santos/)

### Licença

[MIT](https://choosealicense.com/licenses/mit/)
