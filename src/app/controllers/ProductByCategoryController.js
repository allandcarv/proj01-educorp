import Product from '../models/Product';

class ProductByCategoryController {
  async index(req, res) {
    const idCatProd = req.params.id;
    const result = await Product.findAll({ where: { idCatProd } });
    return res.status(200).json(result);
  }
}

export default new ProductByCategoryController();
