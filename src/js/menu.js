import menu1 from '../img/menu1.jpeg';
import menu2 from '../img/menu2.jpg';
import menu3 from '../img/menu3.jpg';
import menu4 from '../img/menu4.jpeg';

const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('d-flex', 'flex-column', 'menu');
  const mealsImages = [menu1, menu2, menu3, menu4];
  const menuDescription = ['A sweet Roll based on creamed cheese and shrimps with hot sauce',
    'The typical California roll with krab and cheese with cucumber', 'Poker roll with toasted carrot, krab meat , creamed cheese and avocado',
    'The alaskan roll based on salmon, cucumber, creamed cheese and avocado',
  ];

  const menuHeader = document.createElement('h2');
  menuHeader.innerHTML = 'The menu';
  menuContainer.appendChild(menuHeader);


  for (let i = 0; i < mealsImages.length; i += 1) {
    const subMenu = document.createElement('div');
    subMenu.classList.add('subMenu', 'd-flex');
    const img = document.createElement('img');
    img.src = mealsImages[i];
    const description = document.createElement('p');
    description.innerHTML = menuDescription[i];
    img.classList.add('rounded-circle', 'food');
    description.classList.add('lead', 'text-white');
    subMenu.appendChild(img);
    subMenu.appendChild(description);
    menuContainer.appendChild(subMenu);
  }

  return menuContainer;
};

export default menu;