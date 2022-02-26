import { sign, verify } from 'jsonwebtoken';
import { Token } from '../@types/User';

const secret = 'trybesmith';

export const generateJWT = (data: Token) => {
  const token: string = sign({ data }, secret);
  return token;
};

export const verifyJWT = (token: string) => verify(token, secret);