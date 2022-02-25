import { Product, ProductObj } from '../types/Product';
import productsModel from '../models/products';

const addProduct = async (product: Product): Promise<ProductObj> => {
  const newProduct = await productsModel.addProduct(product);

  return newProduct;
};

export default {
  addProduct,
};