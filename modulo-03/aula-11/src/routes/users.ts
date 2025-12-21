import express from "express";

const server = express();

server.get("/usuarios", (req, res) => {
    res.json({ 
        id: 1, 
        name: "Germano", 
        age: 23 
    });
});

export default server;