import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product, ProductInfo, ProductObj } from '../@types/Product';
import connection from './connection';

const addProduct = async ({ name, amount }: Product): Promise<ProductObj> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [rows] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId: id } = rows;
  const newProduct: ProductObj = { item: { id, name, amount } };

  return newProduct;
};

const getAllProducts = async (): Promise<ProductInfo[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  
  const [rows] = await connection.execute<RowDataPacket[]>(query);

  return rows as ProductInfo[]; // https://github.com/tryber/sd-014-b-live-lectures/blob/b9b3a4e5f003a1bec4148f0dc0c9bdc074174000/usercrud/src/models/User.ts
};

export default {
  addProduct,
  getAllProducts,
};