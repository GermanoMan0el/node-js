import express  from "express";
import helmet from "helmet";

// Rotas separadas em arquivo único
import router from "./routes/index.js";
import { errorHandler, notFoundRequest } from "./routes/errorhandler.js";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(3333, () => {
    console.log("Servidor rodando na porta em: http://localhost:3333/");
});