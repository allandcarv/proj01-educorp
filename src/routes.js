import { Router } from 'express';

import CategoryController from './app/controllers/CategoryController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/', (req, res) => res.status(200).send('OK'));
routes.get('/categories', CategoryController.index);
routes.get('/products', ProductController.index);
routes.get('/products/category/:id', ProductController.show);

export default routes;
