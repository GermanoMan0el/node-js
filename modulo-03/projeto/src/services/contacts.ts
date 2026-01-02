import { readFile, writeFile } from "fs/promises";

const dataSource = "./data/list.txt";

export async function getContect() {
    let listContact:string[] = [];
    try {
        const data = await readFile(dataSource, { encoding: "utf-8" });
        listContact = data.split("/n"); // "Germano\nThomas" -> ["Germano", "Thomas"]
    
    } catch {}

    return listContact;
}

export async function createContact(name: string) {
    let listContact = await getContect();

    listContact.push(name);
    await writeFile(dataSource, listContact.join("\n"));
}

export async function deleteContect(name: string) {
    let listContact = await getContect();

    listContact = listContact.filter(contact => {
        return contact.toLocaleLowerCase() !== name.toLocaleLowerCase();
    }); // A gente esta fazendo um filtro e jogando o valor novo na nossa lista, ou seja se caso o contato for diferente do que a gente enviou para deletar ele vai colocar dentro da lista, se caso for igual ele remove.

    await writeFile(dataSource, listContact.join("\n"));
}