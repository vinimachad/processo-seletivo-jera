# Processo Seletivo Jera

Projeto foi realizado com base nas informações passadas pelo documento do desafio.

## Objetivo Geral

Desenvolver uma aplicação Web ou Mobile para o armazenamento de uma lista de filmes que o usuário gostaria de assistir. Essa lista deverá ser pega pela API do TheMovieDB [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api).

Uma conta pode ser vinculada a mais de um perfil, sendo obrigatório ter ao menos um perfil vinculado.

A lista de filmes deverá estar associada ao perfil, não a conta, por exemplo: o perfil Filho deverá ter uma lista de filmes a assistir, já o perfil Mãe pode ter outros filmes a assistir (como funciona no Netflix).

## Funcionalidades

- [x] **Criar conta**
- [x] **Login da conta**
- [x] Login com rede social
- [x] Criar perfil
- [x] Listar perfis
- [ ] Lista de filmes sugeridos
- [x] **Busca de filmes**
- [x] **Marcar filme como para assistir**
- [x] **Visualizar lista para assistir**
- [x] Marcar como assistido
- [ ] Compartilhar filme assistido
- [ ] Agendar filme para assistir

## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:

```sh
  $ git clone https://github.com/maateusilva/youtube-context-api.git
```

Depois disso, instale as dependências do Front-end e do Back-end:

```sh
  $ cd youtube-context-api/backend && yarn install # ou npm install
  $ cd ../starter && yarn install # ou npm install
```

## Executando a aplicação

Primeiro acesse a pasta do back-end e execute o seguinte comando:

```sh
  $ yarn dev # ou npm run dev
```

Agora é só executar o front-end:

```sh
  $ yarn start # ou npm start
```
