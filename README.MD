![SNCT 2019 LOGO](./SNCT2019.webp)

# WORKSHOP REST - SNCT 2019
> Autor: Albino Vieira Freitas  
> Cargo: Desenvolvedor backend
>
> Curso: Análise e desenvolvimento de sistemas  
> Data: 23/10/2019

Olá, bem vindo ao repositório do Workshop da SNCT 2019!
O workshop já aconteceu, no dia 23 de outubro de 2019, mas você pode seguir os passos aqui passados e utilizar como base para seu primeiro projeto usando REST! E com Javascript, a linguagem mais famosa atualmente.

## O que foi ensinado

Seguem os passos do que foi passado durante o workshop, ou o que ficou para quem se interessa em avançar mais fora do IFSP:

## Iniciar um projeto Node

Para iniciar um projeto usando Node você deve criar uma pasta e criar um arquivo **package.json** que contém todas as informações sobre seu projeto, desde nome, autor, as bibliotecas utilizadas (conhecidas como dependências), tarefas e outras informações que podem ser utilizadas pelo usuário ou pelas bibliotecas.

Para iniciar um projeto você deve criar primeiro a pasta para ele e entrar nela, pode fazê-lo usando os seguintes comandos:

```sh
mkdir workshop-rest
cd workshop-rest
```

E para iniciar um projeto dentro desta pasta você pode utilizar o NPM que já vem junto com a instalação do Node, usando o comando:

```sh
npm init
```

Ele fará algumas perguntas sobre seu projeto, responda-as de acordo, e confirme ao final, pode ir apenas seguindo dando enter até o fim:

```
package name: (workshop-rest) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 

Is this OK? (yes)
```

Seu projeto estará criado, e podemos passar para o próximo passo.


## Instalar o Express, Sequelize, MySQL e configurar o Nodemon & Sucrase
O projeto utilizou as bibliotecas citadas no título, para instalá-las você deve usar os comandos: 

```
npm install express sequelize mysql2
npm install -D nodemon sucrase
```

### Configurar Sucrase e Nodemon
#### O que é o Sucrase
Sucrase é uma biblioteca que nos permite utilizar o Javascript moderno de uma forma rápida, tendo acesso às facilidades que ele disponibiliza, o Javascript hoje é suportado em várias versões anuais, e o Sucrase ajuda a gente a escrever na versão que preferir pois ele fará com que seja compatível com todas (ou quase todas) as outras.

#### O que é o Nodemon
Nodemon é uma biblioteca que facilita nosso trabalho de executar comandos do Node, pois ele fica olhando os arquivos do projeto e sempre que ele vê alguma alteração no seus códigos, ele executa os comandos que você definiu automaticamente, sem que você precise ficar digitando toda vez. Ou seja, é só salvar que o Nodemon faz todo o resto pra você!

E usaremos aqui pra que ele reinicie nosso servidor com o Sucrase toda vez que fizermos alguma modificação.

#### Bora configurar
Para criar a configuração do Nodemon precisamos criar um arquivo chamado **nodemon.json** na pasta principal do projeto (chamada de raiz), com esse arquivo lá, você deve adicionar o conteúdo abaixo nele:

```json
{
    "execMap": {
        "js": "sucrase-node"
    }
}
```

A definição **execMap** executa um comando assim que qualquer arquivo do tipo dito anteriormente seja alterado, logo toda vez que um arquivo `.js` for alterado, ele chamará o Sucrase nele.

Para mais informações sobre o execMap, [veja aqui](https://github.com/remy/nodemon/blob/master/README.md#default-executables)

## Nossa primeira rota
As rotas no Express seguem as diretrizes do Rest, então você pode chamar qualquer dos 'verbos' especificados, logo:

 - **GET**: Utilizado em buscas, único que tem seu corpo da requisição exposto na URL;
 - **POST**: Utilizado para adicionar novos dados ao servidor;
 - **PUT**: Utilizado para alterar (um objeto por inteiro) algo no servidor;
 - **PATCH**: Utilizado para atualizar (modificações parciais) algo no servidor;
 - **DELETE**: Utilizado para remover algo no servidor.

Para criar uma rota no Express você pode ir no arquivo **routes.js** e criar a rota utilizando qualquer um dos verbos:

```js
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
```

# Recursos adicionais
O projeto tem um pouco mais que apenas REST, como controllers, modelos e migrations, utilizados pelo Express e Sequelize, você pode visualizá-los dentro do presente projeto:

## Recursos
Partes importantes pro projeto rodar como algo funcional, sendo eles a ligação entre os controllers e o banco de dados, os recursos criados foram os de criação de um sistema de postagem, utilizando os seguintes, com os seguintes campos no banco:

**Users**:
 - name
 - email
 - password

**Posts**:
 - title
 - content
 - likes [ {user_id, timestamp} ]
 - dislikes [ {user_id, timestamp} ]

**Comments**:
 - user_id
 - post_id
 - content

### Funcionalidades criadas
 - Cadastrar, editar e remover usuários
 - Retornar dados de um usuário
 - Cadastrar e excluir posts
 - Adicionar, editar e remover comentários de posts
 - Curtir ou não um post

## Divirtam-se!!