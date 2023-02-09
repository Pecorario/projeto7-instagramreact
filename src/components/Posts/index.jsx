function Post({
  fromProfilePicture,
  from,
  urlPostImage,
  likedBy,
  likedByProfilePicture
}) {
  return (
    <article class="post">
      <header>
        <div class="post-info">
          <img
            src={`assets/images/${fromProfilePicture}`}
            alt={`Foto de perfil de ${from}`}
          />
          <p>{from}</p>
        </div>
        <button>
          <ion-icon name="ellipsis-horizontal" class="post-icon"></ion-icon>
        </button>
      </header>

      <div class="post-img">
        <img src={`assets/images/${urlPostImage}`} alt={`Post de ${from}`} />
      </div>

      <footer>
        <div class="buttons-post">
          <div class="actions-container">
            <ion-icon name="heart-outline" class="post-icon"></ion-icon>
            <ion-icon name="chatbubble-outline" class="post-icon"></ion-icon>
            <ion-icon name="paper-plane-outline" class="post-icon"></ion-icon>
          </div>
          <div class="save-container">
            <ion-icon name="bookmark-outline" class="post-icon"></ion-icon>
          </div>
        </div>
        <div class="post-details">
          <img
            src={`assets/images/${likedByProfilePicture}`}
            alt={`Foto de perfil de ${likedBy}`}
          />
          <p>
            Curtido por <strong>{likedBy}</strong> e
            <strong>outras 101.523 pessoas</strong>
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function Posts({ data }) {
  return (
    <div class="feed">
      {data.map(item => (
        <Post
          fromProfilePicture={item.fromProfilePicture}
          from={item.from}
          urlPostImage={item.urlPostImage}
          likedBy={item.likedBy}
          likedByProfilePicture={item.likedByProfilePicture}
        />
      ))}
    </div>
  );
}
