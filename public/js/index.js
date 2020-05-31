if (window.location.href.includes('?')) storeTokens();

async function go() {
  const { accessToken, refreshToken } = getTokensFromCookies();
  const profile = await getProfileData();
  decorate(profile);
  const user = await getOrCreateUser(profile, accessToken, refreshToken);
  drawGroups(user.groups);
}

go();
