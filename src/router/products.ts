import { Router } from 'express';
import validateJWT from '../auth/validateJWT';
import productsController from '../controllers/products';

const router = Router();

router.post('/', validateJWT, productsController.createProduct);

export default router;