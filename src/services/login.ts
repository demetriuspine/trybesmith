import loginModel from '../models/login';
import { Login, Token } from '../types/User';

const login = async (user: Login): Promise<Token> => {
  const userFromDB = await loginModel.login(user);
  const [loggedUser] = userFromDB;
  return loggedUser;
};

export default {
  login,
};