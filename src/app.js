import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import './database';
import session from './config/session';

class App {
  constructor() {
    this.server = express();
    this.server.use(session);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use('/public', express.static('./src/assets'));
    this.server.use(express.json());

    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
