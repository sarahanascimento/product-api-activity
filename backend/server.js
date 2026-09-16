const express = require('express')
const cors = require('cors')
const { request } = require('node:http')
const api = express()
api.use(cors())
api.use(express.json())
api.get('/', (request, response) => {
    response.status(200).json([
        {
            "nome": "Iphone 11",
            "preco": 1750,
            "categoria": "Eletrônicos"
        },
        {
            "nome": "Freebuds SE 4 Anc",
            "preco": 166,
            "categoria": "Eletrônicos"
        },
        {
            "nome": "PC Gamer",
            "preco": 37000,
            "categoria": "Eletrônicos"
        },
        {
            "nome": "Notebook",
            "preco": 2500,
            "categoria": "Eletrônicos"
        }
    ])
})
api.listen(3000, () => {
    console.log('api working');
})