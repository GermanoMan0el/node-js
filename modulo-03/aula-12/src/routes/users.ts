import express from "express";

const server = express();

server.get("/usuarios", (req, res) => {
    console.log("PARAMS", req.params);
    console.log("QUERY", req.query);
    console.log("BODY", req.body);


    res.json({ 
        id: 1, 
        name: "Germano", 
        age: 23 
    });
});

export default server;