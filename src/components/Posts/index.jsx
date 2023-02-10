import { useState } from 'react';
import {
  IoEllipsisHorizontalSharp,
  IoChatbubbleOutline,
  IoHeart,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoBookmark
} from 'react-icons/io5';

function Post({
  fromProfilePicture,
  from,
  urlPostImage,
  likedBy,
  likedByProfilePicture
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLiked] = useState(101523);
  const [wasLikedByPicture, setWasLikedByPicture] = useState(false);

  function handleClickSaveIcon() {
    setIsSaved(!isSaved);
  }

  function handleClickLikeIcon() {
    if (!isLiked) {
      setLiked(likes + 1);
    } else {
      setLiked(likes - 1);
    }
    setIsLiked(!isLiked);
  }

  function addAnimation() {
    setWasLikedByPicture(true);
  }

  function finishAnimation() {
    setTimeout(() => {
      setWasLikedByPicture(false);
    }, 800);
  }

  function handleLikePost() {
    if (!isLiked) {
      setLiked(likes + 1);
      setIsLiked(true);
    }

    addAnimation();
    finishAnimation();
  }

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
          onDoubleClick={handleLikePost}
          data-test="post-image"
        />
        {wasLikedByPicture && <IoHeart class="icon-animate" />}
      </div>

      <footer>
        <div class="buttons-post">
          <div class="actions-container">
            <div onClick={handleClickLikeIcon} data-test="like-post">
              {isLiked ? (
                <IoHeart class="post-icon liked" />
              ) : (
                <IoHeartOutline class="post-icon" />
              )}
            </div>

            <IoChatbubbleOutline class="post-icon" />
            <IoPaperPlaneOutline class="post-icon" />
          </div>
          <div class="save-container">
            {isSaved ? (
              <IoBookmark
                class="post-icon"
                data-test="save-post"
                onClick={handleClickSaveIcon}
              />
            ) : (
              <IoBookmarkOutline
                class="post-icon"
                data-test="save-post"
                onClick={handleClickSaveIcon}
              />
            )}
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
              &nbsp;outras{' '}
              <span data-test="likes-number">
                {likes.toLocaleString('pt-br')}
              </span>{' '}
              pessoas
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
