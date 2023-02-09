import { IoChevronForwardCircleSharp } from 'react-icons/io5';

function Story({ name, url }) {
  return (
    <a
      class="story-container"
      href={`https://www.instagram.com/${name}/`}
      target="_blank"
      rel="noreferrer"
    >
      <div class="story-img">
        <img src={`assets/images/${url}`} alt={`Foto de perfil de ${name}`} />
      </div>
      <p>{name}</p>
    </a>
  );
}

export default function Stories({ accounts }) {
  return (
    <div class="stories">
      <button>
        <IoChevronForwardCircleSharp class="story-button" />
      </button>

      {accounts.map(account => (
        <Story name={account.name} url={account.profilePicture} />
      ))}
    </div>
  );
}
