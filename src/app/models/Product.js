import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        descProd: Sequelize.STRING,
        idCatProd: Sequelize.INTEGER,
        valorProd: Sequelize.DOUBLE,
      },
      { sequelize }
    );
  }
}

export default Product;
