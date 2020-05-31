const spotify = require('../spotify');

module.exports = (router) => {
  router.post('/', (req, res) => {
    spotify.refreshAccessToken(req.body.refresh_token)
      .then((newToken) => {
        res.send(newToken);
      })
      .catch((error) => {
        res.status(400).send(JSON.parse(error.response.text));
      });
  });
};
