import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [songs, setSongs] = useState([]);

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

  const renderApp = () => {
    if (songs.length < 1) {
      return (
        <div className="alert alert-warning mx-auto" role="alert">
          No songs to show
        </div>
      );
    } else {
      return (
        <div>
          <Cards songs={songs} />
          <Table songs={songs} />
        </div>
      );
    }
  };

  // To render
  return (
    <div className="App">
      <Header onGetInfo={getInfoSB} />
      {renderApp()}
    </div>
  );
}

export default App;
