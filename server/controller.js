/** @format */

const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');

    const { username, password } = req.body;

    const [user] = await db.check_user([username]);

    if (user) {
      return res.status(409).send('Username already taken');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const [newUser] = await db.register_user([username, hash]);

    req.session.user = newUser;

    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const db = req.app.get('db');

    const { username, password } = req.body;

    const [existingUser] = await db.check_user([username]);

    if (!existingUser) {
      return res.status(404).send('Username not found');
    }

    const isAuthenticated = bcrypt.compareSync(password, existingUser.hash);

    if (!isAuthenticated) {
      return res.status(403).send('Incorrect username or password');
    }

    delete existingUser.hash;

    req.session.user = existingUser;

    res.status(200).send(req.session.user);
  },
};
