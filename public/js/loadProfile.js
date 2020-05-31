function storeTokens() {
  const params = new URLSearchParams(window.location.search);
  const refreshToken = params.get('refreshToken');
  const accessToken = params.get('accessToken');
  document.cookie = `refreshToken=${refreshToken}`;
  document.cookie = `accessToken=${accessToken}`;
  window.location.replace('/profile');
}

function getTokensFromCookies() {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split(';');
  const refreshToken = cookieArray.find((cookie) => cookie.includes('refreshToken'));
  const accessToken = cookieArray.find((cookie) => cookie.includes('accessToken'));

  if (refreshToken && accessToken) {
    const refreshTokenValue = refreshToken.split('=')[1];
    const accessTokenValue = accessToken.split('=')[1];
    const obj = {
      refreshToken: refreshTokenValue,
      accessToken: accessTokenValue,
    };
    return obj;
  }
  return {};
}

async function getProfileData() {
  const { accessToken } = getTokensFromCookies();
  const request = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).catch((err) => console.error(err));
  const profile = await request.json();
  return profile;
}

async function decorate(profile) {
  const headerText = document.getElementById('profile-header-text');
  headerText.innerHTML = `${profile.display_name}'s Profile`;
}
