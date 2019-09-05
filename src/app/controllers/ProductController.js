import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const result = await Product.findAll();
    return res.status(200).json(result);
  }

  async show(req, res) {
    const idCatProd = req.params.id;
    const result = await Product.findOne({ where: { idCatProd } });
    return res.status(200).json(result);
  }
}

export default new ProductController();
