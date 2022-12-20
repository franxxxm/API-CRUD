const validar = (req, res, next)=>{
    const { body } = req
    
    if(body.nome == undefined || body.nome == ''){
        return res.status(400).json({mensagem:'VALOR ENVIA INVALIDO'})
    }
    next()
}



module.exports = { 
    validar,
    }
