import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.status(200).send('OK'));

export default routes;
