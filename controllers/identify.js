const spotify = require('../spotify');

async function getProfile(accessToken, refreshToken) {
  let failed = false;
  const profile = await spotify.getSpotifyProfile(accessToken)
    .catch((err) => {
      console.log(err);
      failed = true;
    });
  if (failed) {
    const newAccessToken = await spotify.refreshAccessToken(refreshToken)
      .catch((err) => console.log(err));
    console.log('newAccessToken', newAccessToken);
    const retriedProfile = await spotify.getSpotifyProfile(newAccessToken)
      .catch((err) => console.log(err.response.body));
    console.log(retriedProfile.body);
    return retriedProfile;
  }
  return profile;
}

module.exports = (router) => {
  router.get('/', (req, res) => {
    const { accessToken } = req.query;
    const { refreshToken } = req.query;
    if (!accessToken || !refreshToken) res.status(400).send({ error: 'Missing access token or refresh token', status: 400 });
    getProfile(accessToken, refreshToken).then((profile) => {
      console.log(profile.body);
      res.send(profile.body);
    })
      .catch((err) => res.status(400).send(err));
  });
};
