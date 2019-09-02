import Sequelize, { Model } from 'sequelize';
import Category from './Category';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        descProd: Sequelize.STRING,
        idCatProd: {
          type: Sequelize.INTEGER,
          references: {
            model: Category,
            key: 'id',
          },
        },
        valorProd: Sequelize.DOUBLE,
      },
      { sequelize, tableName: 'produto', timestamps: true }
    );
  }
}

export default Product;
