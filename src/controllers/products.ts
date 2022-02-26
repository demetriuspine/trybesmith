import { Request, Response } from 'express';
import 'express-async-errors';
import { Product, ProductObj, productSchema } from '../@types/Product';
import productsService from '../services/products';
import StatusCode from '../enums/StatusCode';

const createProduct = async (req: Request, res: Response) => {
  const data: Product = req.body;

  productSchema.parse(data);

  const newProduct: ProductObj = await productsService.addProduct(data);

  return res.status(StatusCode.CREATED).json(newProduct);
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts();

  return res.status(StatusCode.OK).json(products);
};

export default {
  createProduct,
  getAllProducts,
};