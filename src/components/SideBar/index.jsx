import { useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import Suggestions from '../Suggestions';

export default function SideBar() {
  const [username, setUsername] = useState('Taynara');
  const [urlPicture, setUrlPicture] = useState(
    'https://e7.pngegg.com/pngimages/96/344/png-clipart-user-profile-instagram-computer-icons-insta-head-silhouette.png'
  );

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

  return (
    <aside class="sidebar">
      <div class="sidebar-header">
        <img
          src={urlPicture}
          alt={`Foto de perfil de ${username}`}
          onClick={handleChangeProfilePicture}
        />
        <div class="user-info">
          <h2>{username}</h2>
          <RiPencilFill onClick={handleChangeName} />
        </div>
      </div>

      <Suggestions recommendations={recommendations} />

      <div class="footer">
        <ul>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Ajuda</a>
          </li>
          <li>
            <a href="/">Imprensa</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Carreiras</a>
          </li>
          <li>
            <a href="/">Privacidade</a>
          </li>
          <li>
            <a href="/">Termos</a>
          </li>
          <li>
            <a href="/">Localizações</a>
          </li>
          <li>
            <a href="/">Contas mais relevantes</a>
          </li>
          <li>
            <a href="/">Hashtags</a>
          </li>
          <li>
            <a href="/">Idioma</a>
          </li>
        </ul>

        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </aside>
  );
}
