const Card = ({ songInfo }) => {
  // To render
  return (
    <div className="card m-2 mb-3" style={{ width: 10 + "rem" }}>
      <img
        src={songInfo.imageCover}
        className="card-img-top"
        alt="..."
        width="150"
        height="150"
      />
      <div className="card-body">
        <h5 className="card-title">{songInfo.songName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">ARTIST: {songInfo.artistName}</li>
        <li className="list-group-item">ALBUM: {songInfo.albumName}</li>
        <li className="list-group-item">
          DURATION: {songInfo.time / 1000} sec
        </li>
        <li className="list-group-item">PRICE: {songInfo.price} $</li>
      </ul>
      <div className="card-body">
        <a
          href={songInfo.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Link to preview
        </a>
      </div>
    </div>
  );
};

export default Card;
