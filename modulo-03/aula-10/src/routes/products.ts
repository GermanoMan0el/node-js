import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const notebook:object = { name: "Notebook Lenovo LOQ", price: 10 };
    const monitor:object = { name: "Monitor AOC", price: 40 };
    const teclado:object = { name: "Teclado Ajazz", price: 30 };

    res.json({ produtos: [notebook, monitor, teclado] });
});

// Usando o GET com rotas dinâmicas
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const notebook:object = { 
        id: id, 
        name: "Notebook Lenovo LOQ", 
        price: 4000 
    };

    res.json( notebook );
});

export default router;