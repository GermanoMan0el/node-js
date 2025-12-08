// Node puro:
// import { createServer } from "node:http";

// const server = createServer((req, res) => {
//     res.write("Hello World!!!");
//     res.end();
// });

// server.listen(3333, () => {
//     console.log("Servidor rodando em http://localhost:3333/");
// });

// Express:
import express from "express";

const server = express();

server.get("/", (req, res) => {
    let myName:string = "Germano";
    res.send(`Hello World Express, my name is ${myName}!`);
});

server.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333/");
});