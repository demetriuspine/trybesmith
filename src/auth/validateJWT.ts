import { NextFunction, Request, Response } from 'express';
import { Token } from '../types/User';
import { verifyJWT } from './generateJWT';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Token not found' });

  const verifiedToken = verifyJWT(token);

  const { data } = verifiedToken as { data: Token };

  req.user = data; // namespace declarado vai aqui

  next();
};

export default validateJWT;