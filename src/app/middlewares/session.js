import session from 'express-session';
import uuid from 'uuid/v4';
import FileStore from 'session-file-store';

const Store = FileStore(session);

export default session({
  genid: () => uuid(),
  store: new Store(),
  secret: 'secret123',
  resave: false,
  saveUninitialized: true,
});
