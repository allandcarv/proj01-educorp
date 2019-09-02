import Sequelize from 'sequelize';

import dbconfig from '../config/database';

import Category from '../app/models/Category';
import User from '../app/models/User';
import Product from '../app/models/Product';

const models = [Category, User, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbconfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
