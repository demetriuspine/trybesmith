import userModel from '../models/user';
import { User, UserID } from '../types/User';

const createUser = async (user: User): Promise<UserID> => {
  const newUser: UserID = await userModel.createUser(user);

  return newUser;
};

export default {
  createUser,
};