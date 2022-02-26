import { Request, Response } from 'express';
import userService from '../services/user';
import { User, UserID, userSchema } from '../@types/User';
import { generateJWT } from '../auth/generateJWT';
import StatusCode from '../enums/StatusCode';

const createUser = async (req: Request, res: Response) => {
  const data: User = req.body;

  userSchema.parse(data); // https://www.npmjs.com/package/zod#basic-usage
  
  const newUser: UserID = await userService.createUser(data);
  const { id, username } = newUser;
  const token = generateJWT({ id, username });

  return res.status(StatusCode.CREATED).json({ token });
};

export default {
  createUser,
};