import Sequelize, { Model } from 'sequelize';
import Category from './Category';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        idProd: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        descProd: Sequelize.STRING,
        idCatProd: {
          type: Sequelize.INTEGER,
          references: {
            model: Category,
            key: 'idCatProd',
          },
        },
        valorProd: Sequelize.DOUBLE,
      },
      { sequelize, tableName: 'produto' }
    );
  }
}

export default Product;
