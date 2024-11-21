import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
});

app.listen(3000)

/*
    Criar nossa API de Usuários:
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

/*
    1- Tipo de Rota / Método HTTP
    2- Endereço

    felipe
    uKdjZV6uqIyi2ll6
*/