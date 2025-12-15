import express  from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Seja bem vindo a loja de produtos!");
});

// Usando o GET com rotas estáticas
router.get("/produtos", (req, res) => {
    const notebook:object = { name: "Notebook Lenovo LOQ", price: 10 };
    const monitor:object = { name: "Monitor AOC", price: 40 };
    const teclado:object = { name: "Teclado Ajazz", price: 30 };

    res.json({ produtos: [notebook, monitor, teclado] });
});

// Usando o GET com rotas dinâmicas
router.get("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const notebook:object = { 
        id: id, 
        name: "Notebook Lenovo LOQ", 
        price: 4000 
    };

    res.json( notebook );
});

router.get("/voos/:from/:to", (req, res) => {
    const { from, to } = req.params;

    // res.json({ flight: {from: "Recife", to: "EUA", price: 5000} });
    res.json({ 
        flight: {
            from: from.toUpperCase(), 
            to: to.toUpperCase(),
            price: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
        } 
    });
});

export default router;