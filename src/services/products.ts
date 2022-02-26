import { Product, ProductInfo, ProductObj } from '../@types/Product';
import productsModel from '../models/products';

const addProduct = async (product: Product): Promise<ProductObj> => {
  const newProduct: ProductObj = await productsModel.addProduct(product);

  return newProduct;
};

const getAllProducts = async (): Promise<ProductInfo[]> => {
  const products: ProductInfo[] = await productsModel.getAllProducts();

  return products;
};

export default {
  addProduct,
  getAllProducts,
};