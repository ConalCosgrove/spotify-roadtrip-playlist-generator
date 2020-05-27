const requests = require('superagent');
const { apiUrl, defaultHeaders } = require('./spotifyConstants');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

function refreshAccessToken(refreshToken) {
  return new Promise((resolve, reject) => {
    const url = 'https://accounts.spotify.com/api/token';
    const auth = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
    console.log(auth);
    const headers = { Authorization: auth };
    console.log('clientid', clientId);
    console.log(`refresh_token=${refreshToken}`);
    requests.post(url).set(headers)
      .send('grant_type=refresh_token')
      .send(`refresh_token=${refreshToken}`)
      .then((data) => resolve(data.body.access_token))
      .catch((err) => reject(err));
  });
}

module.exports = refreshAccessToken;
