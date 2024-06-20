const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsing do corpo das requisições em JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rota para obter todos os itens (exemplo)
app.get('/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    res.json(items);
});

// Rota para obter um item específico pelo ID
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = { id: itemId, name: `Item ${itemId}` };
    res.json(item);
});

// Rota para criar um novo item
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = Math.floor(Math.random() * 100) + 1;
    res.status(201).json(newItem);
});

// Rota para atualizar um item pelo ID
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    updatedItem.id = itemId;
    res.json(updatedItem);
});

// Rota para deletar um item pelo ID
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
