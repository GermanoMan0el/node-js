import express  from "express";
import helmet from "helmet";

// Rotas separadas em arquivo único
import router from "./routes/index.js";

// Rotas separadas em arquivos diferentes
import routerProducts from "./routes/products.js";
import routerFlights from "./routes/flights.js"

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Para a gente especificar que a gente quer pegar as rotas que esta em outro router, a gente na hora de importar colocar outro nome pra ele. Exemplo: routerProducts
server.use("/produtos", routerProducts);
server.use("/voos", routerFlights);

// Normalmente a gente coloca esse cara por final, isso porque ele vai pegar os router especificos e depois o nosso router abrangente
server.use("/", router);

server.listen(3333, () => {
    console.log("Servidor rodando na porta em: http://localhost:3333/");
});