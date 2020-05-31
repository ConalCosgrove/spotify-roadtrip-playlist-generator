function createGroup(data) {
  const container = document.getElementById('group-container');
  const group = document.createElement('div');
  const title = document.createElement('h3');

  group.className = 'group';
  group.id = `group${data.id}`;
  title.innerHTML = data.name;
  group.appendChild(title);
  container.appendChild(group);
}

function setUpNewGroupButton() {
  const newGroupContainer = document.getElementById('new-group-container');
  newGroupContainer.onclick = () => window.location.href = '/newGroup';
}

function drawGroups(groups) {
  groups.forEach((group) => {
    createGroup(group);
  });
  setUpNewGroupButton();
}
