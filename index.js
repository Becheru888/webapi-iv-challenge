require('dotenv').config();
const express = require('express');
const server = express()
const expressRouters = require('./expressRouters')

server.use(express.json())
server.use(expressRouters)


server.get("/", (req, res) => {
    res.json('Hello to my api!')
})

const port = process.env.PORT




server.listen(port, () => {
    console.log('Server running at port 3000')
})
