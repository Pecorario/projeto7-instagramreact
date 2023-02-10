import { useRef } from 'react';

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
  const refStories = useRef(null);

  const handleScroll = scrollTo => {
    refStories.current.scrollLeft += scrollTo;
  };

  return (
    <div class="stories" ref={refStories}>
      <button onClick={() => handleScroll(575)}>
        <IoChevronForwardCircleSharp class="story-button" />
      </button>

      {accounts.map(account => (
        <Story name={account.name} url={account.profilePicture} />
      ))}
    </div>
  );
}
