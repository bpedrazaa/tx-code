import Card from "./Card";

const Cards = ({ songs }) => {
  // To render
  return (
    <div className="row">
      <div class="alert alert-info m-3" role="alert">
        SONGS
      </div>

      {/* Put cards in a column (side by side) */}
      {songs.map((song) => (
        <div className="col">
          <Card songInfo={song} key={song.trackId} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
