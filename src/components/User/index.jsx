import { useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';

export default function User() {
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
  return (
    <div class="sidebar-header">
      <img
        src={urlPicture}
        alt={`Foto de perfil de ${username}`}
        onClick={handleChangeProfilePicture}
        data-test="profile-image"
      />
      <div class="user-info">
        <h2 data-test="name">{username}</h2>
        <RiPencilFill onClick={handleChangeName} data-test="edit-name" />
      </div>
    </div>
  );
}
