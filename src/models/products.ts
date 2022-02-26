import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product, ProductObj } from '../types/Product';
import connection from './connection';

const addProduct = async ({ name, amount }: Product): Promise<ProductObj> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [rows] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId: id } = rows;
  const newProduct: ProductObj = { item: { id, name, amount } };

  return newProduct;
};

const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  
  const [rows] = await connection.execute<RowDataPacket[]>(query);

  return rows;
};

export default {
  addProduct,
  getAllProducts,
};