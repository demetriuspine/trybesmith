import { Request, Response } from 'express';
import 'express-async-errors';
import { Product, ProductObj, productSchema } from '../types/Product';
import productsService from '../services/products';

const createProduct = async (req: Request, res: Response) => {
  const data: Product = req.body;

  productSchema.parse(data);

  const newProduct: ProductObj = await productsService.addProduct(data);

  return res.status(201).json(newProduct);
};

export default {
  createProduct,
};