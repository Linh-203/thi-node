import express from 'express';
import { add, get, getAll, remove, update } from '../controller/products';
const routerProducts = express.Router();
routerProducts.get('/products', getAll);
routerProducts.get('/products/:id', get);
routerProducts.post('/products', add);
routerProducts.patch('/products/:id', update);
routerProducts.delete('/products/:id', remove);
export default routerProducts;
