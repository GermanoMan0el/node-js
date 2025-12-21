import express, { type RequestHandler } from "express";
import { interferir } from "../middlewares/interferir.js";

const listForProducts:object = [
  {
    "nome": "Smartphone iPhone 16 Pro Max",
    "preco": "R$ 9.499,00"
  },
  {
    "nome": "Samsung Galaxy Tab S10 FE Plus",
    "preco": "R$ 3.299,00"
  },
  {
    "nome": "Console PlayStation 5 Slim",
    "preco": "R$ 3.780,00"
  },
  {
    "nome": "Fone de Ouvido JBL Tune 520BT",
    "preco": "R$ 250,00"
  },
  {
    "nome": "Smart Lâmpada Wi-Fi Positivo",
    "preco": "R$ 65,00"
  }
]

const server = express();

server.use(interferir);

server.get("/produtos", (req, res) => {
    console.log("Executrou nossa lista de produtos!");
    res.json( listForProducts );
});

export default server;
