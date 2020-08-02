const header = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const h5 = document.createElement('h5');
  h5.innerHTML = 'The Sushi King';
  const options = ['Home', 'Contact', 'About'];

  for (let i = 0; i < options.length; i += 1) {
    const li = document.createElement('li');
    li.id = options[i];
    li.innerHTML = options[i];
    ul.appendChild(li);
  }

  nav.appendChild(h5);
  nav.appendChild(ul);

  return nav;
};

export default header;