type RequestContext = Map<string, string | unknown>;

declare global {
  // eslint-disable-next-line no-var
  var REQUEST_CONTEXT: RequestContext;
}

if (!global.REQUEST_CONTEXT) {
  global.REQUEST_CONTEXT = new Map();
}

export const requestContext = global.REQUEST_CONTEXT;

const prefix = 'x-correlation-';
process.env['DEFAULT_CORRELATION_ID'] = 'true';

const set = global.REQUEST_CONTEXT.set;

requestContext.set = (key: string, value: string | unknown) => {
  const correlationKey = key.startsWith(prefix) ? key : prefix + key;
  return set(correlationKey, value);
};

if (process.env['DEFAULT_CORRELATION_ID'] === 'true') {
  const { nanoid } = await import('nanoid/async');
  requestContext.set.bind('id', await nanoid());
}
