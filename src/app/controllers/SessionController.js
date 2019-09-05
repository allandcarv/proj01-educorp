import User from '../models/User';

class SessionController {
  async store(req, res) {
    const user = await User.findOne({
      where: { emailUsr: req.body.email, senhaUsr: req.body.password },
    });

    if (!user) {
      return res.status(400).json({ error: 'Usuário e/ou senha inválido(s)' });
    }

    const { idUsr, nomeUsr, emailUsr, loginUsr } = user;

    req.session.idUsr = idUsr;

    return res.status(200).json({ idUsr, nomeUsr, emailUsr, loginUsr });
  }
}

export default new SessionController();
