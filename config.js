const mysql = require('mysql2/promise');
require('dotenv').config();

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  JWT_SALTROUNDS,
  JWT_SECRET,
} = process.env;

const connection = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  db: connection,
  jwt_rounds: parseInt(JWT_SALTROUNDS),
  jwt_secret: JWT_SECRET,
};
