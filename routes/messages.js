const express = require('express');
const messagesRouter = express.Router();

const { db } = require('../config');

messagesRouter.get('/', async (req, res) => {
  const [rows] = await db.query(
    'SELECT firstname, lastname, object, content, timedate  FROM messages; '
  );
  res.status(200).json(rows);
});

messagesRouter.post('/', async (req, res) => {
  const { firstname, lastname, email, object, content } = req.body;

  await db.query(
    'INSERT INTO messages(firstname, lastname, email , object, timedate, content) VALUES(?,?,?,?,?,?)',
    [firstname, lastname, email, object, new Date(), content]
  );
  res
    .status(201)
    .send(`Received new message: ${firstname} ${lastname} said ${content}`);
});

messagesRouter.use('/', (req, res) => {
  res.status(404).send('Route not found! '); // PERMET DE REPONDRE A TOUTES LES REQUETES EN ENVOYANT UNE 404
});

module.exports = messagesRouter;
