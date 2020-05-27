const requests = require('superagent');
const { accountUrl } = require('./spotifyConstants');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

function refreshAccessToken(refreshToken) {
  return new Promise((resolve, reject) => {
    const url = `${accountUrl}/token`;
    const auth = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
    const headers = { Authorization: auth };
    requests.post(url).set(headers)
      .send('grant_type=refresh_token')
      .send(`refresh_token=${refreshToken}`)
      .then((data) => resolve(data.body.access_token))
      .catch((err) => reject(err));
  });
}

module.exports = refreshAccessToken;
