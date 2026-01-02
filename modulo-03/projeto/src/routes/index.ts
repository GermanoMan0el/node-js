import express from "express";
import { createContact, getContect, deleteContect } from "../services/contacts.js";

const router = express.Router();

router.post("/contato", async (request, response) => {
    const { name } = request.body;
    
    if (!name || name.length < 2) {
        response.json({ error: "Nome precisa ter pelo menos 2 caracteres." });
        return response.status(404).send();
    }
    
    // Processamento dos dados
   
    await createContact(name);

    return response.status(201).json({ success: name });
});

router.get("/contatos", async (request, response) => {
    let listContact = await getContect();

    response.json({ contatos: listContact });
});

router.delete("/contato", async (request, response) => {
    const { name } = request.query;   

    if (!name) {
        return response.json({ error: "Contato não encontrado, digite um nome válido!" });
    }

    await deleteContect((name as string));
   
    response.json({ contato: name });
});

export default router;