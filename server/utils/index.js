import pino from 'pino';

const log = pino({
  // enabled: !!!process.env.LOG_DISABLED,
  enabled: false,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const logger = log;
