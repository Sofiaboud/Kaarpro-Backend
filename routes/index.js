const messagesRouter = require('./messages');
const devisRouter = require('./devis');
const usersRouter = require('./users');

const setupRoutes = (app) => {
  app.use('/messages', messagesRouter);
  app.use('/devis', devisRouter);
  app.use('/users', usersRouter);
};

module.exports = {
  setupRoutes,
};
