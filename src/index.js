import '../css/style.css';
import { header, paragraph, image } from './page_desc';
import menu from './menu';
import contact from './contact';

function setListener(func, target) {
  document.getElementById('displayTab').innerHTML = '';
  document.getElementById('displayTab').append(func());
  const current = document.getElementsByClassName('active-tab');
  current[0].className = current[0].className.replace(' active-tab', '');
  target.classList.add('active-tab');
}

function displayComponent() {
  const content = document.getElementById('content');
  content.classList.add('center-align');
  content.appendChild(header());
  content.appendChild(image());
  content.appendChild(paragraph());
  const tabHolder = document.createElement('div');
  const menuTab = document.createElement('span');
  menuTab.innerHTML = '&nbsp;Menu';
  menuTab.classList.add('tab');
  menuTab.classList.add('active-tab');
  const contactTab = document.createElement('span');
  contactTab.innerHTML = '&nbsp;Contact';
  contactTab.classList.add('tab');
  const displayTab = document.createElement('div');
  displayTab.id = 'displayTab';
  displayTab.append(menu());
  displayTab.classList.add('tab-display');
  tabHolder.appendChild(menuTab);
  tabHolder.appendChild(contactTab);
  content.appendChild(tabHolder);
  content.appendChild(displayTab);
  menuTab.addEventListener('click', (event) => {
    setListener(menu, event.target);
  });
  contactTab.addEventListener('click', (event) => {
    setListener(contact, event.target);
  });
}


displayComponent();
