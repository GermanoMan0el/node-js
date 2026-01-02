import express from "express";
import helmet from "helmet";
const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get("/", (req, res) => {
    res.send("Seja bem vindo a nossa loja!");
});
server.listen(3333, () => {
    console.log("Servidor rodando na URL: http://localhost:3333/");
});
//# sourceMappingURL=server.js.map