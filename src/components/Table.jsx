const Table = ({ songs }) => {
  // To render
  return (
    <div>
      <div class="alert alert-info m-3" role="alert">
        TABLE OF SONGS
      </div>
      <table className="table m-1">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Song Name</th>
            <th scope="col">Artist Name</th>
            <th scope="col">Album Name</th>
            <th scope="col">Time (Seconds)</th>
            <th scope="col">Price ($)</th>
            <th scope="col">Preview Link</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((songInfo) => (
            <tr key={songInfo.trackId}>
              <th scope="row">{songInfo.songName}</th>
              <td>{songInfo.artistName}</td>
              <td>{songInfo.albumName}</td>
              <td>{songInfo.time}</td>
              <td>{songInfo.price}</td>
              <td>
                <a
                  href={songInfo.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Link to Preview</div>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
