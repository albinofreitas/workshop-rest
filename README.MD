- passos
    - insatalar express, sequelize, mysql2, nodemon e sucrase.
    - configurar o sucrase
    - criar app, router e sever
    - configurar banco de dados
        - docker (docker run --name workshop-rest -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=workshop-rest -d -p 3306:3306 mysql:5.7)
    - crud de usuários
    - crud posts

- resources principais
    - users
    - posts
    - comments

- funcionalidades
    - cadastrar novos usuários
    - editar usuário
    - remover usuário
    - retornar dados de um usuário
    - cadastrar um post
    - excluir um post
    - adicionar comentários a um post
    - editar um comentário
    - excluir um comentário
    - curtiu um post
    - não gostar de um post

- funcionalidades extras
    - autenticação usando JWT

users
    - name
    - email
    - password

posts
    - title
    - content
    - likes [ {user_id, timestamp} ]
    - dislikes [ {user_id, timestamp} ]

comments
    - user_id
    - post_id
    - content