import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    const result = await Category.findAll();
    res.status(200).json({ result });
  }
}

export default new CategoryController();
