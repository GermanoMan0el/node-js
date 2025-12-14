import express  from "express";
import helmet from "helmet";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.send("Seja bem vindo a loja de produtos!");
});

// Usando o GET com rotas estáticas
server.get("/produtos", (req, res) => {
    const notebook:object = { name: "Notebook Lenovo LOQ", price: 10 };
    const monitor:object = { name: "Monitor AOC", price: 40 };
    const teclado:object = { name: "Teclado Ajazz", price: 30 };

    res.json({ produtos: [notebook, monitor, teclado] });
});

// Usando o GET com rotas dinâmicas
server.get("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const notebook:object = { 
        id: id, 
        name: "Notebook Lenovo LOQ", 
        price: 4000 
    };

    res.json( notebook );
});

// Exemplo 2:
// from -> De
// to -> Para
// flight -> Voo
server.get("/voos/:from/:to", (req, res) => {
    const { from, to } = req.params;

    // res.json({ flight: {from: "Recife", to: "EUA", price: 5000} });
    res.json({ 
        flight: {
            from: from.toUpperCase(), 
            to: to.toUpperCase(),
            price: 5000
        } 
    });
});

server.listen(3333, () => {
    console.log("Servidor rodando na porta em: http://localhost:3333/");
});