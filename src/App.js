import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [songs, setSongs] = useState([]);
  const [viewTable, setViewTable] = useState(false);

  // Get Info of the Search Bar
  const getInfoSB = async ({ text }) => {
    // Replace spaces with '+'
    text = text.replace(/ /g, "+");
    const url = `https://itunes.apple.com/search?term=${text}&limit=25&media=music`;

    try {
      // Get the Data
      const res = await fetch(url);
      const data = await res.json();

      const results = data.results;
      let totalData = [];
      // Iterate over the results
      results.forEach((result) => {
        let cleanData = null;
        cleanData = {
          imageCover: result.artworkUrl100,
          songName: result.trackName,
          artistName: result.artistName,
          albumName: result.collectionName,
          time: result.trackTimeMillis / 1000,
          price: result.trackPrice,
          previewUrl: result.previewUrl,
          trackId: result.trackId,
        };
        // Create an array with the new results
        totalData.push(cleanData);
      });
      /* Functionality to get various results in the same page

      // Create a copy of the State attribute
      let oldVersion = songs;
      // Concatenete to create the new array to update
      totalData = oldVersion.concat(totalData);
      console.log("Songs: ", totalData);

      */
      // Update the State attribute songs
      setSongs(totalData);
    } catch (e) {
      console.log("Program execution finished");
      console.error(e);
    }
  };

  // Toggle the visibility of the table and cards buttons
  const toggleTable = () => {
    setViewTable(true);
  };

  const toggleCards = () => {
    setViewTable(false);
  };

  // Render all the app gui
  const renderApp = () => {
    if (songs.length < 1) {
      return (
        <div className="alert alert-warning m-5" role="alert">
          No songs to show
        </div>
      );
    } else {
      return (
        <div>
          {!viewTable && renderCards()}
          {viewTable && renderTable()}
        </div>
      );
    }
  };

  // Render the Cards component
  const renderCards = () => {
    return <Cards songs={songs} />;
  };

  // Render the Table component
  const renderTable = () => {
    return <Table songs={songs} />;
  };

  // To render
  return (
    <div className="App">
      <Header
        onGetInfo={getInfoSB}
        toggleTable={toggleTable}
        toggleCards={toggleCards}
      />
      {renderApp()}
    </div>
  );
}

export default App;
