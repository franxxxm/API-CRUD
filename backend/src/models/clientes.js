const sequelize = require("./bd")

const getAll = async ()=>{
    const sql = 'SELECT * FROM cliente'
    const [clientes] = await sequelize.query(sql);
    return clientes;
};

const creatOne = async ({nome})=>{
    const sql = `INSERT INTO cliente(nome) VALUES('${nome}')`
    const [cliente] = await sequelize.query(sql)
    return cliente;
}

const deleteOne = async (id)=>{
    const sql = `DELETE FROM cliente WHERE id = '${id}'`
    const [cliente] = await sequelize.query(sql)
    return cliente;
}

const editarOne = async (id,{nome})=>{
    const sql = `UPDATE cliente SET nome = '${nome}' WHERE id = '${id}'`
    const [cliente] = await sequelize.query(sql)
    return cliente;
}

module.exports = {
    getAll,
    creatOne,
    deleteOne,
    editarOne
}