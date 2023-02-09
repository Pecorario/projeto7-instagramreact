function Suggestion({ name, text, profilePicture }) {
  return (
    <div class="suggestion">
      <div class="suggestion-user">
        <img
          src={`assets/images/${profilePicture}`}
          alt={`Foto de perfil de ${name}`}
        />
        <div class="suggestion-info">
          <p>{name}</p>
          <p class="info">{text}</p>
        </div>
      </div>
      <button>Seguir</button>
    </div>
  );
}

export default function Suggestions({ recommendations }) {
  return (
    <div class="sidebar-content">
      <div class="suggestions-bar">
        <p>Sugestões para você</p>
        <button>Ver tudo</button>
      </div>

      <div class="suggestions-container">
        {recommendations.map(item => (
          <Suggestion
            name={item.name}
            text={item.text}
            profilePicture={item.profilePicture}
          />
        ))}
      </div>
    </div>
  );
}
