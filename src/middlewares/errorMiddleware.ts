import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import StatusCode from '../enums/StatusCode';

const errorMiddleware: ErrorRequestHandler = async (err, _req, res, _next) => { // https://stackoverflow.com/questions/50218878/typescript-express-error-function
  console.log(`err: ${err}`);

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }

  if (err instanceof ZodError) { // https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md
    const statusCode = err.issues[0]
      .message.endsWith('required') ? StatusCode.BAD_REQUEST : StatusCode.UNPROCESSABLE_ENTITY;
    return res.status(statusCode).json({ error: err.issues[0].message });
  }

  return res.status(500).json({ error: 'Internal Server Error' });
};

export default errorMiddleware;