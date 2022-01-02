const Card = ({ songs }) => {
  return (
    <div>
      <ul>
        {songs.map((item, i) => {
          return (
            <li key={i}>
              {item.imageCover} | {item.songName} | {item.artistName} |{" "}
              {item.albumName} | {item.time} |{item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
