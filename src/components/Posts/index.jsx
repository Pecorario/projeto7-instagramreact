import {
  IoEllipsisHorizontalSharp,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline
} from 'react-icons/io5';

function Post({
  fromProfilePicture,
  from,
  urlPostImage,
  likedBy,
  likedByProfilePicture
}) {
  return (
    <article class="post" data-test="post">
      <header>
        <div class="post-info">
          <img
            src={`assets/images/${fromProfilePicture}`}
            alt={`Foto de perfil de ${from}`}
          />
          <p>{from}</p>
        </div>
        <button>
          <IoEllipsisHorizontalSharp class="post-icon" />
        </button>
      </header>

      <div class="post-img">
        <img
          src={`assets/images/${urlPostImage}`}
          alt={`Post de ${from}`}
          data-test="post-image"
        />
      </div>

      <footer>
        <div class="buttons-post">
          <div class="actions-container">
            <IoHeartOutline class="post-icon" data-test="like-post" />
            <IoChatbubbleOutline class="post-icon" />
            <IoPaperPlaneOutline class="post-icon" />
          </div>
          <div class="save-container">
            <IoBookmarkOutline class="post-icon" data-test="save-post" />
          </div>
        </div>
        <div class="post-details">
          <img
            src={`assets/images/${likedByProfilePicture}`}
            alt={`Foto de perfil de ${likedBy}`}
          />
          <p>
            Curtido por <strong>{likedBy}</strong> e
            <strong>
              &nbsp;outras <span data-test="likes-number">101.523</span> pessoas
            </strong>
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
