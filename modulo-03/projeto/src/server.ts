import express from "express";
import helmet from "helmet";
import router from "./routes/index.js";


const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3333, () => {
    console.log("Aplicação rodando na URL: http://localhost:3333")
})