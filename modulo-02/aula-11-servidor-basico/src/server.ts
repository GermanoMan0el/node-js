// 127.0.0.1 -> IP padrão que aponta para o seu proprio PC

import { createServer } from "node:http";

const server = createServer((request, response) => {
    let myName: string = "Germano";
    response.end(`Hello World, my name is ${myName}!!`);
});

server.listen(3333, () => {
    console.log("Servidor funcionando em http://localhost/3333...");
});