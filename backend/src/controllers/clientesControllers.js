const clienteMoldes = require("../models/clientes");

const getAll = async (req, res)=>{

    const clientes = await clienteMoldes.getAll();

    return res.status(200).json(clientes)
}

const setOne = async (req, res)=>{
    const clientes = await clienteMoldes.setOne(req.body);

    return res.status(201).json(clientes);
}


module.exports = {
    getAll,
    setOne
}