import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        descCatProd: Sequelize.STRING,
      },
      { sequelize }
    );
  }
}

export default Category;
