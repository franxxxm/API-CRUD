const { application } = require('express');
const express = require('express')
const app = express.Router();
const clienteController = require("./controllers/clientesControllers")

app.get("/clientes", clienteController.getAll)

app.post("/clientes", clienteController.setOne)

module.exports = app;