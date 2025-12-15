import express from "express";

const router = express.Router();

router.get("/:from/:to", (req, res) => {
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