function Suggestion({ name, text, profilePicture }) {
  return (
    <div className="suggestion">
      <div className="suggestion-user">
        <img
          src={`assets/images/${profilePicture}`}
          alt={`Foto de perfil de ${name}`}
        />
        <div className="suggestion-info">
          <p>{name}</p>
          <p className="info">{text}</p>
        </div>
      </div>
      <button>Seguir</button>
    </div>
  );
}

export default function Suggestions({ recommendations }) {
  return (
    <div className="sidebar-content">
      <div className="suggestions-bar">
        <p>Sugestões para você</p>
        <button>Ver tudo</button>
      </div>

      <div className="suggestions-container">
        {recommendations.map((item, idx) => (
          <Suggestion
            key={idx}
            name={item.name}
            text={item.text}
            profilePicture={item.profilePicture}
          />
        ))}
      </div>
    </div>
  );
}
