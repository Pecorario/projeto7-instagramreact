import { useState } from 'react';

import Suggestions from '../Suggestions';
import User from '../User';

function ItemList({ name }) {
  return (
    <li>
      <a href="/">{name}</a>
    </li>
  );
}

export default function SideBar() {
  const [username, setUsername] = useState('Taynara');
  const [urlPicture, setUrlPicture] = useState(
    'https://e7.pngegg.com/pngimages/96/344/png-clipart-user-profile-instagram-computer-icons-insta-head-silhouette.png'
  );

  // https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg

  function handleChangeProfilePicture() {
    const newUrl = prompt('Qual a nova URL da foto de perfil?');

    if (newUrl !== null && newUrl !== undefined && newUrl.length > 0) {
      setUrlPicture(newUrl);
      setUsername(username);
    }
  }

  function handleChangeName() {
    const newName = prompt('Qual nome você quer colocar aqui?');

    if (newName !== null && newName !== undefined && newName.length > 0) {
      setUsername(newName);
      setUrlPicture(urlPicture);
    }
  }

  const recommendations = [
    {
      name: 'camilacabello',
      text: 'Seguido(a) por talileoni e mais 46 pessoas',
      profilePicture: 'camila-cabello-foto.jpeg'
    },
    {
      name: 'luisasonza',
      text: 'Seguido(a) por talileoni e mais 46 pessoas',
      profilePicture: 'luisasonza-foto.jpg'
    },
    {
      name: 'ddlovato',
      text: 'Seguido(a) por marianesl e mais 46 pessoas',
      profilePicture: 'ddlovato-foto.jpg'
    },
    {
      name: 'mpecorario',
      text: 'Segue você',
      profilePicture: 'mayara-foto.jpg'
    },
    {
      name: 'davefernands',
      text: 'Novo no instagram',
      profilePicture: 'david-foto.jpg'
    }
  ];

  const footerList = [
    'Sobre',
    'Ajuda',
    'Imprensa',
    'API',
    'Carreiras',
    'Privacidade',
    'Termos',
    'Contas mais relevantes',
    'Localizações',
    'Hashtags',
    'Idioma'
  ];

  return (
    <aside className="sidebar">
      <User
        username={username}
        urlPicture={urlPicture}
        handleChangeProfilePicture={handleChangeProfilePicture}
        handleChangeName={handleChangeName}
      />

      <Suggestions recommendations={recommendations} />

      <div className="footer">
        <ul>
          {footerList.map((item, idx) => (
            <ItemList key={idx} name={item} />
          ))}
        </ul>

        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </aside>
  );
}
