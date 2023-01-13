const express = require("express")
const cookieParser = require('cookie-parser')

const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.get("/", async (req,res) => {
    res.send('Espere o mehor com um ☕ na mão... Projeto basico de cadastro com json')
    console.log(req.cookies)
})

app.post("/api/login", async (req,res) => {
    const {email,senha} = req.body

    if(!email || email == "") {
        res.send("Não")
    }

    if (email == "thzin@contato.com"  && senha == "1234") {
        res.json(req.body)
    }
})

app.listen(3000,()=>{
    setTimeout(() => {console.log("[☕] 1 Verificação de jsons...")}, 1000);
    setTimeout(() => {console.log("[☕] 2 Verificação de dados...")}, 2000);
    setTimeout(() => {console.log("[☕] Cafe pronto, agora e so sonhar...")}, 3000);
})




const filmes = require('./filmes/filmes.json');

app.get("/api/filmes/:nome", async (req,res) => {
    const nomedofilme = req.params.nome;
    const result = filmes.find( fruit => fruit.Nome === nomedofilme );
    const nomeid = result.Nome


    if (!result) {
        res.json({
            status: 404,
            motivo: "Não existe"
        })
        return
    }


    res.json({
        nomeid,
        status: 202
    })



})

app.get("/api/findall", async (req,res) => {
    res.json(filmes)
})