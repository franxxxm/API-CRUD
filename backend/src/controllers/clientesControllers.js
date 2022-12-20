const clienteMoldes = require("../models/clientes");

const getAll = async (req, res)=>{

    const clientes = await clienteMoldes.getAll();

    return res.status(200).json(clientes)
}

const creatOne = async (req, res)=>{
    const clientes = await clienteMoldes.creatOne(req.body);

    return res.status(201).json(clientes);
}

const deleteOne = async (req, res)=>{
    await clienteMoldes.deleteOne(req.params.id)

    return res.status(204).json();
}

const editarOne = async (req, res)=>{
    await clienteMoldes.editarOne(req.params.id, req.body);

    return res.status(200).json()
}

module.exports = {
    getAll,
    creatOne,
    deleteOne,
    editarOne
}