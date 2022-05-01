const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();

routes.get('/status', async (req, res) => {

    return res.status(200).json();
});

routes.post('/categorias', async (req, res) => {
    const { id, name } = req.body;

    await connection('categorias').insert({
        id,
        name
    })

    return res.status(201).json({ id });
});

routes.get('/categorias', async (req, res) => {
    const categorias = await connection('categorias').select('*');

    return res.status(200).json(categorias);
});

routes.get('/categorias/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).json({ error: 'Missing id' });
    }
    const categorias = await connection('categorias').where('id', id).first();
    return res.status(200).json(categorias);
});

routes.put('/categorias/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!id) {
        return res.status(404).json({ error: 'Missing id' });
    }
    await connection('categorias').where('id', id).update({
        name
    });

    return res.status(200).json({ id });
});

routes.delete('/categorias/delete/:id', async (req, res) => {
    const { id } = req.params;
    const dispositivos = await connection('dispositivos').select('*');
    const filtedispositivos = dispositivos.filter(dispositivo => dispositivo.id === id);


    if (filtedispositivos.length > 0) {
        return res.status(400).send('Categoria possui dispositivos associados');
    }
    await connection('categorias').where('id', id).delete();

    return res.status(204).send();
});

///////////////////////////////////////Dispositivos/////////////////////////////////////////////

routes.post('/dispositivos', async (req, res) => {
    const { color, partNumber, categorias } = req.body;

    await connection('dispositivos').insert({
        color,
        partNumber,
        categoria_id: categorias.id,
    })
    return res.json({ color, partNumber});
});
module.exports = routes;

routes.get('/dispositivos', async (req, res) => {
    const dispositivos = await connection('dispositivos').select('*');

    return res.status(200).json(dispositivos);
});

routes.get('/dispositivos/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).json({ error: 'Missing id' });
    }
    const dispositivos = await connection('dispositivos').where('id', id).first();
    return res.status(200).json(dispositivos);
});

routes.delete('/dispositivos/delete/:id', async (req, res) => {
    const { id } = req.params;
    
    await connection('dispositivos').where('id', id).delete();
    return res.status(204).send();
});