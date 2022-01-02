import Card from "./Card";

const Cards = ({ songs }) => {
  // To render
  return (
    //Put cards in a column (side by side)
    <div className="row">
      <div class="alert alert-info m-3" role="alert">
        SONGS
      </div>

      {songs.map((song) => (
        <div className="col">
          <Card songInfo={song} key={song.trackId} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
