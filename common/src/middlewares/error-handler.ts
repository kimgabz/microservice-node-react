import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof RequestValidationError) {
    // console.log('Something went wrong', error);
    res.status(error.statusCode).send({ errors: error.serializeErrors() });
  }

  if (error instanceof DatabaseConnectionError) {
    // console.log('Something went wrong', error);
    res.status(error.statusCode).send({ errors: error.serializeErrors() });
  }

  if (error instanceof CustomError) {
    // console.log('Something went wrong', error);
    res.status(error.statusCode).send({ errors: error.serializeErrors() });
  }

  console.error(error);
  res.status(400).send({ errors: [{ message: error.message }] });
};
