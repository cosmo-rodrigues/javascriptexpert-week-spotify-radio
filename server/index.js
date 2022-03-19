import server from './server.js';
import { logger } from './utils/index.js';
import { config } from './config/index.js';

server
  .listen(config.port)
  .on('listening', () => logger.info(`server running on port ${config.port}`));
