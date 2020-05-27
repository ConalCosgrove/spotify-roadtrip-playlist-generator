const requests = require('superagent');
const { apiUrl, defaultHeaders } = require('./spotifyConstants');

function buildAuthorizationHeader(accessToken) {
  return `Bearer ${accessToken}`;
}

async function getSpotifyProfile(accessToken) {
  const url = `${apiUrl}/me`;
  const authHeader = buildAuthorizationHeader(accessToken);
  const headers = { ...defaultHeaders, Authorization: authHeader };

  const profile = await requests.get(url).set(headers);
  return profile;
}

module.exports = getSpotifyProfile;
