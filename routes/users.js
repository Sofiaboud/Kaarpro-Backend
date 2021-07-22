const express = require('express');
const usersRouter = express.Router();

const { db } = require('../config');

usersRouter.get('/', async (req, res) => {
  const sql = 'SELECT id, username, firstname, lastname FROM users';
  const [results] = await db.query(sql);
  res.json(results);
});

usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  let sqlValues = [id];
  const sql =
    'SELECT id, username, firstname, lastname FROM users WHERE id = ? ';
  const [results] = await db.query(sql, sqlValues);
  if (err) {
    res.status(400).send('error retreiving from database');
  }
  res.json(results);
});

usersRouter.post('/', async (req, res) => {
  const { username, email, password, firstname, lastname, avatar } = req.body;
  const sql =
    'INSERT INTO users ( username, email, password, firstname, lastname) VALUES(?, ?, ?, ?, ?)';
  let sqlValues = [username, email, password, firstname, lastname, avatar];
  try {
    const [results] = await db.query(sql, sqlValues);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).send('Error saving the user');
  }
});

usersRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let sqlValues = [id];
  const sql = 'DELETE FROM users WHERE id = ? ';
  try {
    const [results] = await db.query(sql, sqlValues);
    res.status(201).json(results);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting an user');
  }
});

module.exports = usersRouter;
