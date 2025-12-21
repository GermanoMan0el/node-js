import express from "express";
import helmet from "helmet";

import listaProdutos from "./routes/produtos.js";
import listaUsuarios from "./routes/users.js"

import { notFoundRequest } from "./routes/handleError.js";

const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.send("Seja bem vindo a nossa loja!");
});

server.get("/produtos", listaProdutos);
server.get("/usuarios", listaUsuarios)
server.use(notFoundRequest);

console.log(process.env.TOKEN_OF_ACESS); // Variável de ambiente

server.listen(3333, () => {
    console.log("Servidor rodando na URL: http://localhost:3333/");
});