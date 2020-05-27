
async function getProfileData() {
  const params = new URLSearchParams(window.location.search);
  const refreshToken = params.get('refreshToken');
  const accessToken = params.get('accessToken');
  const response = await fetch(`/v1/identify?accessToken=${accessToken}&refreshToken=${refreshToken}`);
  const profile = await response.json();
  return profile;
}

async function decorate() {
  const profile = await getProfileData();
  const headerText = document.getElementById('header-text');
  headerText.innerHTML = `${profile.display_name}'s Profile`;
}

decorate();
