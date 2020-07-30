import './stylesheets/custom.scss';
import './stylesheets/menu.scss';
import './stylesheets/contact.scss';
import './stylesheets/about.scss';
import 'bootstrap';
import 'animate.css';
import mainContainer from './js/main_container';
import jumbotron from './js/jumbotron';

import header from './js/header';

import menu from './js/menu';

import contact from './js/contact';

import about from './js/about';

const container = jumbotron('Best Sushi on town!');
mainContainer().appendChild(header());
mainContainer().appendChild(container);

// Default val
mainContainer().appendChild(menu());

document.getElementById('Home').addEventListener('click', () => {
  const contact = mainContainer().children[2];
  contact.classList.add('animate__animated', 'animate__backOutRight');
  contact.addEventListener('animationend', () => {
    mainContainer().removeChild(contact);
    mainContainer().appendChild(menu());
  });
  if (mainContainer().children[2] === undefined) {
    mainContainer().appendChild(menu());
  }
});

document.getElementById('Contact').addEventListener('click', () => {
  const menu = mainContainer().children[2];
  menu.classList.add('animate__animated', 'animate__backOutRight');
  menu.addEventListener('animationend', () => {
    mainContainer().removeChild(menu);
    mainContainer().appendChild(contact());
  });
});

document.getElementById('About').addEventListener('click', () => {
  const child = mainContainer().children[2];
  child.classList.add('animate__animated', 'animate__backOutRight');
  child.addEventListener('animationend', () => {
    mainContainer().removeChild(child);
    mainContainer().appendChild(about());
  });
});