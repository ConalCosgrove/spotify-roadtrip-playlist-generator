async function getOrCreateUser(profile, accessToken, refreshToken) {
  let userRequest = await fetch(`/v1/user?spotifyId=${profile.id}`);

  if (userRequest.status < 400) {
    const userJSON = await userRequest.json();
    return userJSON;
  }

  const firstName = profile.display_name.split(' ')[0];
  const lastName = profile.display_name.split(' ').length > 1 || '';
  const { email } = profile;
  const spotifyId = profile.id;
  const body = {
    firstName,
    lastName,
    email,
    spotifyId,
    accessToken,
    refreshToken,
  };
  userRequest = await fetch('/v1/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const userJSON = await userRequest.json();
  return userJSON;
}

async function createNewGroup(user) {
  const { id } = user;
  const body = {
    method: 'post',
    creatorId: id,
  };
  const groupRequest = await fetch('/v1/group', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  // TODO handle error.
  const groupJSON = groupRequest.json();
  return groupJSON;
}
