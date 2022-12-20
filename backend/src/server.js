const app = require("./app")
const bd = require("./models/bd")
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{
    console.log("rodando")
})