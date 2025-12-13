// Express:
import express from "express";
import helmet from "helmet";
import path from "path";

const server = express();

server.use(helmet()); // .use() nos permite inserir coisas dentro do servidor, desde configurações até bibliotecas externas.

server.use(express.json()); // Vai configurar o cabeçalho de resposta para avisar para quem estiver >> recebendo a resposta da API que a resposta é no formato JSON. <<
server.use(express.urlencoded({ extended: true })); // Vai extender uma configuração padrão do EXPRESS que ela lida com os dados de requisição.

// server.use(express.static(path.join(__dirname, "../public")));

server.get("/", (req, res) => {
    let myName:string = "Germano";
    let responseInJson: string = "Agora a resposta é no formato JSON.";
    // res.send(`Hello World Express, my name is ${myName}!`);

    res.json({ myName, respostaInJson: responseInJson });
});

server.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333/");
});