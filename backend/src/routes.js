const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();

routes.post('/categorias', async (req, res) => {
    const { id, name } = req.body;

    await connection('categorias').insert({
        id,
        name
    })

    return res.json({ id });
});

routes.get('/categorias', async (req, res) => {
    const categorias = await connection('categorias').select('*');

    return res.json(categorias);
});

routes.get('/categorias/:id', async (req, res) => {
    const { id } = req.params;

    const categorias = await connection('categorias').where('id', id).first();
    return res.json(categorias);
});

routes.put('/categorias/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    await connection('categorias').where('id', id).update({
        name
    });

    return res.json({ id });
});

routes.delete('/categorias/delete/:id', async (req, res) => {
    const { id } = req.params;

    await connection('categorias').where('id', id).delete();

    return res.status(204).send();
});

module.exports = routes;
