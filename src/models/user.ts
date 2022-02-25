import { ResultSetHeader } from 'mysql2';
import { User, UserID } from '../types/User';
import connection from './connection';

const createUser = async ({ username, password, classe, level }: User) => {
  const query = `
  INSERT INTO Trybesmith.Users (username, password, classe, level)
  VALUES (?, ?, ?, ?)
  `; // insert retorna um OkPacket ou ResultSetHeader

  const values = [username, password, classe, level];

  const [rows] = await connection.execute<ResultSetHeader>( // adaptado do vídeo do renato https://trybecourse.slack.com/archives/C023YHXAEGM/p1645562224495599?thread_ts=1645561923.462649&cid=C023YHXAEGM
    query,
    values,
  );
  
  const { insertId: id } = rows; // desestruturando a prop insertId e renomeando para id
  const user: UserID = { id, username, password, classe, level };

  return user;
};

export default {
  createUser,
};