import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        idCatProd: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        descCatProd: Sequelize.STRING,
      },
      { sequelize, tableName: 'categoriaproduto' }
    );
  }
}

export default Category;
