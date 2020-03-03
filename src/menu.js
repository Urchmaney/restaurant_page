function menuItem(name, description) {
  const container = document.createElement('div');
  const head = document.createElement('h3');
  head.innerHTML = name;
  const desc = document.createElement('p');
  desc.innerHTML = description;
  container.appendChild(head);
  container.appendChild(desc);
  return container;
}


export default function menuDisplay() {
  const menu = document.createElement('div');
  menu.appendChild(menuItem('Amala', 'Sweet yoruba delicacy'));
  return menu;
}
