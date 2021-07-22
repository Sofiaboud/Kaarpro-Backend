const express = require('express');
const cors = require('cors');
const passport = require('passport');
const { setupRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
setupRoutes(app);

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/misc'));

app.use((req, res) => {
  const msg = `Page not found: ${req.url}`;
  console.warn(msg);
  res.status(404).send(msg);
});

app.listen(5050, () => {
  console.log('API available on http://localhost:5050');
});
