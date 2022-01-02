import Card from "./Card";

const Cards = ({ songs }) => {
  return (
    //Put cards in a column (side by side)
    <div className="row">
      {songs.map((song) => (
        <div className="col">
          <Card songInfo={song} key={song.trackId} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
