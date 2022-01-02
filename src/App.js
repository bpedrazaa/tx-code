import Header from "./components/Header";

// Get Info of the Search Bar
const getInfoSB = (info) => {
  console.log(info);
};

function App() {
  return (
    <div className="App">
      <Header onGetInfo={getInfoSB} />
    </div>
  );
}

export default App;
