const express = require('express');
require('dotenv').config()
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient

const app = express();

app.get("/", function(req, res) {
    res.send("hello world");
});



app.listen(3000, () => {
    console.log(`executando servidor na porta ${process.env.PORT}`)
})