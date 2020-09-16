/** @format */

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authController');
const postCtrl = require('./controllers/postController');

const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);
//Auth endpoints
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);

//Post endpoints
app.get('/api/posts/:userid', postCtrl.getAllPosts);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then(dbInstance => {
  app.set('db', dbInstance);
  console.log('DB CONNECTED ----');
  app.listen(SERVER_PORT, () =>
    console.log(`SERVER RUNNING ON PORT: ${SERVER_PORT}`)
  );
});
