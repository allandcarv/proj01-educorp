import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        descCatProd: Sequelize.STRING,
      },
      { sequelize, tableName: 'categoriaproduto', timestamps: true }
    );
  }
}

export default Category;
