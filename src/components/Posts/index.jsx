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
    <article className="post" data-test="post">
      <header>
        <div className="post-info">
          <img
            src={`assets/images/${fromProfilePicture}`}
            alt={`Foto de perfil de ${from}`}
          />
          <p>{from}</p>
        </div>
        <button>
          <IoEllipsisHorizontalSharp className="post-icon" />
        </button>
      </header>

      <div className="post-img">
        <img
          src={`assets/images/${urlPostImage}`}
          alt={`Post de ${from}`}
          onDoubleClick={handleLikePost}
          data-test="post-image"
        />
        {wasLikedByPicture && <IoHeart className="icon-animate" />}
      </div>

      <footer>
        <div className="buttons-post">
          <div className="actions-container">
            <div onClick={handleClickLikeIcon} data-test="like-post">
              {isLiked ? (
                <IoHeart className="post-icon liked" />
              ) : (
                <IoHeartOutline className="post-icon" />
              )}
            </div>

            <IoChatbubbleOutline className="post-icon" />
            <IoPaperPlaneOutline className="post-icon" />
          </div>
          <div className="save-container">
            {isSaved ? (
              <IoBookmark
                className="post-icon"
                data-test="save-post"
                onClick={handleClickSaveIcon}
              />
            ) : (
              <IoBookmarkOutline
                className="post-icon"
                data-test="save-post"
                onClick={handleClickSaveIcon}
              />
            )}
          </div>
        </div>
        <div className="post-details">
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
    <div className="feed">
      {data.map((item, idx) => (
        <Post
          key={idx}
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
