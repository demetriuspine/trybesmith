import { RowDataPacket } from 'mysql2';
import { Login, Token } from '../@types/User';
import connection from './connection';

const login = async ({ username, password }: Login): Promise<Token[]> => {
  const query = 'SELECT id, username FROM Trybesmith.Users WHERE username = ? AND password = ?'; // select retorna array de rowdatapacket
  const values = [username, password];
  
  const [rows] = await connection.execute<RowDataPacket[]>(query, values);
  
  console.log(rows);
  
  return rows as Token[];
};

export default {
  login,
};