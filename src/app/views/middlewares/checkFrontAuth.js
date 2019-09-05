module.exports = (req, res, next) => {
  if (req.session && req.session.idUsr) {
    return next();
  }
  return res.redirect('/auth');
};
