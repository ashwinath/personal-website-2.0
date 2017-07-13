const server = require('./server'),
      logger = require('./logger');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  logger.info(`Serving on port ${PORT}`);
});
