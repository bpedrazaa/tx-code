const Table = ({ songs }) => {
  // To render
  return (
    <div>
      <div class="alert alert-info m-1" role="alert">
        TABLE OF SONGS
      </div>
      <table className="table m-2">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Song Name</th>
            <th scope="col">Artist Name</th>
            <th scope="col">Album Name</th>
            <th scope="col">Time (Seconds)</th>
            <th scope="col">Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((songInfo) => (
            <tr>
              <th scope="row">{songInfo.songName}</th>
              <td>{songInfo.artistName}</td>
              <td>{songInfo.albumName}</td>
              <td>{songInfo.time}</td>
              <td>{songInfo.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
