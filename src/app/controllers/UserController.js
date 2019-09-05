import { Sequelize } from 'sequelize';
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nomeUsr: Yup.string()
        .required()
        .min(4)
        .max(50),
      emailUsr: Yup.string()
        .email()
        .required(),
      loginUsr: Yup.string()
        .required()
        .min(4)
        .max(10),
      senhaUsr: Yup.string()
        .required()
        .min(6)
        .max(8),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('senhaUsr'), null])
        .required('Confirmação de Senha'),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Failed.' });
    }

    const userExists = await User.findOne({
      where: {
        [Sequelize.Op.or]: [
          { emailUsr: req.body.emailUsr },
          { loginUsr: req.body.loginUsr },
        ],
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Login ou E-mail já cadastrado' });
    }

    const { nomeUsr, emailUsr, loginUsr } = await User.create(req.body);

    return res.status(201).json({ nomeUsr, emailUsr, loginUsr });
  }
}

export default new UserController();
