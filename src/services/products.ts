import { Product, ProductObj } from '../types/Product';
import productsModel from '../models/products';

const addProduct = async (product: Product): Promise<ProductObj> => {
  const newProduct = await productsModel.addProduct(product);

  return newProduct;
};

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();

  return products;
};

export default {
  addProduct,
  getAllProducts,
};