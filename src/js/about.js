import profile from '../img/owner.jpg';

const about = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add(
    'container',
    'd-flex',
    'flex-column',
    'align-items-center',
    'col-8',
    'mt-3',
    'profile-img',
  );
  const header = document.createElement('h2');
  header.innerHTML = 'About the page';
  const subContainer = document.createElement('div');
  subContainer.classList.add('d-flex', 'profile-img-sub-container');
  const profilePic = document.createElement('img');
  profilePic.classList.add('rounded-circle');
  profilePic.src = profile;
  profilePic.onclick = () => {
    window.location.href = 'https://www.linkedin.com/in/ferm0494';
  };

  subContainer.appendChild(profilePic);

  const subHeader = document.createElement('p');
  subHeader.classList.add(
    'lead',
    'text-white',
    'align-self-center',
    'ml-2',
    'text-left',
  );
  contactContainer.appendChild(header);
  contactContainer.appendChild(subContainer);
  subHeader.innerHTML = "Restaurant created only using Vanilla Javascript/SASS/Webpack/Bootstrap/HTML5 make sure to check my <a href='https://ferm0494.github.io'>Porfolio</a> :) !";
  subContainer.appendChild(subHeader);

  return contactContainer;
};

export default about;