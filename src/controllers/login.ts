import { Request, Response } from 'express';
import loginService from '../services/login';
import { Login, loginSchema } from '../@types/User';
import { generateJWT } from '../auth/generateJWT';
import StatusCode from '../enums/StatusCode';

const login = async (req: Request, res: Response) => {
  const user: Login = req.body;

  loginSchema.parse(user); // https://www.npmjs.com/package/zod#basic-usage
  
  const loggedUser = await loginService.login(user);

  if (!loggedUser) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }

  const { id, username } = loggedUser;
  const token = generateJWT({ id, username });

  return res.status(StatusCode.OK).json({ token });
};

export default {
  login,
};