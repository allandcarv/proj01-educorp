import session from 'express-session';
import uuid from 'uuid/v4';

export default session({
  genid: () => uuid(),
  secret: 'secret123',
  resave: false,
  saveUninitialized: true,
});
