import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [songs, setSongs] = useState([]);

  // useEffect(() => {
  //   const getInfo = async () => {
  //     const dataFromServer = await getInfoSB();
  //   };

  //   getInfo();
  // }, []);

  // Get Info of the Search Bar
  const getInfoSB = async ({ text }) => {
    // Replace spaces with '+'
    text = text.replace(/ /g, "+");
    const url = `https://itunes.apple.com/search?term=${text}&limit=1`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    data.results.forEach((result) => {
      let cleanData = {
        imageCover: result.artworkUrl100,
        songName: result.trackName,
        artistName: result.artistName,
        albumName: result.collectionName,
        time: result.trackTimeMillis,
        price: result.trackPrice,
        previewUrl: result.previewUrl,
        trackId: result.trackId,
      };

      console.log("This is the clean Data: ", cleanData);
      setSongs([...songs, cleanData]);
    });
  };

  return (
    <div className="App">
      <Header onGetInfo={getInfoSB} />
      <Cards songs={songs} />
    </div>
  );
}

export default App;
