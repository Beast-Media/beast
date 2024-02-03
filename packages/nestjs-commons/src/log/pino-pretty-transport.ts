import pinoPretty, { PrettyOptions } from 'pino-pretty';

export default (opts: PrettyOptions) =>
  pinoPretty({
    ...opts,
    messageFormat: (log, messageKey) => {
      return `${log[messageKey]}`;
    },
  });
