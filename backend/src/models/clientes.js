const sequelize = require("./bd")

const getAll = async ()=>{
    const [clientes] = await sequelize.query("SELECT * FROM cliente");
    return clientes;
};

const setOne = async ({nome})=>{
    const sql = `INSERT INTO cliente(nome) VALUES('${nome}')`
    const [cliente] = await sequelize.query(sql)
    return cliente;
}

module.exports = {
    getAll,
    setOne
}