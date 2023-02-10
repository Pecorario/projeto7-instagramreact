import { RiPencilFill } from 'react-icons/ri';

export default function User({
  username,
  urlPicture,
  handleChangeProfilePicture,
  handleChangeName
}) {
  return (
    <div className="sidebar-header">
      <img
        src={urlPicture}
        alt={`Foto de perfil de ${username}`}
        onClick={handleChangeProfilePicture}
        data-test="profile-image"
      />
      <div className="user-info">
        <h2 data-test="name">{username}</h2>
        <RiPencilFill onClick={handleChangeName} data-test="edit-name" />
      </div>
    </div>
  );
}
