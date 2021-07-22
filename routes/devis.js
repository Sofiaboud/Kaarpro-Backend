const express = require('express');
const devisRouter = express.Router();

const { db } = require('../config');

devisRouter.get('/', async (req, res) => {
  const [rows] = await db.query(
    'SELECT iddevis, firstname, lastname , email , phone , reprog , fap , année , modèle , carburant  , marques , message  FROM devis; '
  );
  res.status(200).json(rows);
});

devisRouter.post('/', async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    reprog,
    fap,
    année,
    modèle,
    carburant,
    marques,
    message,
  } = req.body;

  await db.query(
    'INSERT INTO devis (firstname, lastname , email , phone , reprog , fap , année , modèle , carburant  , marques , message) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
    [
      firstname,
      lastname,
      email,
      phone,
      reprog,
      fap,
      année,
      modèle,
      carburant,
      marques,
      message,
    ]
  );
  res.status(201).send('its ok');
});

devisRouter.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

module.exports = devisRouter;
