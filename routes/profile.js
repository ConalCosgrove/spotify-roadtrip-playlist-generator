function getProfile(req, res) {
  res.sendFile('profile.html');
}

module.exports = getProfile;
