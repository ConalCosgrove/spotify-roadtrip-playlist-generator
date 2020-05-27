const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const user = require('./routes/user');
const group = require('./routes/group');
const identify = require('./routes/identify');

const app = express();
const login = require('./routes/login.js');
const spotifycallback = require('./routes/spotify-callback.js');

const PORT = process.env.PORT || 8000;

app.use(cookieParser());
app.use(express.json());
app.use('/login', login);
app.use('/spotify-callback', spotifycallback);
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));
app.use('/v1/user', user);
app.use('/v1/group', group);
app.use('/v1/identify', identify);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
