import { Router } from 'express';
import 'marko/node-require';
import 'marko/express'; // enable res.marko

import CategoryController from './app/controllers/CategoryController';
import ProductByCategoryController from './app/controllers/ProductByCategoryController';
import ProductController from './app/controllers/ProductController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import checkFrontAuth from './app/views/middlewares/checkFrontAuth';
import AuthView from './app/views/auth.marko';
import HomeView from './app/views/home.marko';
import RegisterView from './app/views/register.marko';

const routes = new Router();

// Frontend
routes.get('/', checkFrontAuth, (req, res) => res.marko(HomeView));
routes.get('/auth', (req, res) => res.marko(AuthView));
routes.get('/register', (req, res) => res.marko(RegisterView));

// Backend
routes.post('/signin', SessionController.store);
routes.post('/register', UserController.store);
routes.get('/categories', CategoryController.index);
routes.get('/products', ProductController.index);
routes.get('/products/category/:id', ProductByCategoryController.index);
routes.get('/products/:id', ProductController.show);

export default routes;
