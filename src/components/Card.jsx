const Card = ({ songInfo }) => {
  return (
    <div className="card m-1" style={{ width: 10 + "rem" }}>
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
        <li className="list-group-item">{songInfo.artistName}</li>
        <li className="list-group-item">{songInfo.albumName}</li>
        <li className="list-group-item">{songInfo.time}</li>
        <li className="list-group-item">{songInfo.price}</li>
      </ul>
      <div className="card-body">
        <a href="www.google.com" className="card-link">
          Card link
        </a>
      </div>
    </div>

    // <div>
    //   <ul>
    //     {songs.map((item, i) => {
    //       return (
    //         <li key={i}>
    //           {item.imageCover} | {item.songName} | {item.artistName} |{" "}
    //           {item.albumName} | {item.time} |{item.price}
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
};

export default Card;
