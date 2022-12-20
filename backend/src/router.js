const { application } = require('express');
const express = require('express')
const app = express.Router();
const clienteController = require("./controllers/clientesControllers")
const validar = require("./middlewares/validar")

app.get("/clientes", clienteController.getAll)

app.post("/clientes", validar.validar, clienteController.creatOne)

app.delete("/clientes/:id", clienteController.deleteOne)

app.put("/clientes/:id", validar.validar, clienteController.editarOne)


module.exports = app;