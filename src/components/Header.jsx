import { useState } from "react";

const Header = ({ onGetInfo, toggleTable, toggleCards }) => {
  // Hook (State)
  const [text, setText] = useState("");
  const [viewTable, setViewTable] = useState(false);
  const [viewCards, setViewCards] = useState(false);

  // Handle the placeholder and submit button
  const onSubmit = (e) => {
    e.preventDefault();
    // Control de visibility of the buttons (Perhaps I overthink this section...)
    if (!viewCards) {
      setViewTable(true);
      setViewCards(false);
    } else if (!viewTable) {
      setViewTable(false);
      setViewCards(true);
    } else {
      setViewTable(true);
    }

    if (!text) {
      alert("Please add some text to search");
      return;
    } else {
      // Pass the info
      onGetInfo({ text });
      // Set the text to empty on the state
      setText("");
    }
  };

  // Table Button
  const onClickTableBtn = () => {
    setViewTable(false);
    setViewCards(true);
    toggleTable();
  };

  const renderTableBtn = () => {
    if (viewTable)
      return (
        <button
          className="btn btn-outline-primary m-2"
          onClick={onClickTableBtn}
        >
          See Table
        </button>
      );
  };

  // Cards Button
  const onClickCardsBtn = () => {
    setViewCards(false);
    setViewTable(true);
    toggleCards();
  };

  const renderCardsBtn = () => {
    if (viewCards)
      return (
        <button
          className="btn btn-outline-warning m-2"
          onClick={onClickCardsBtn}
        >
          See Cards
        </button>
      );
  };

  // To render
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
      <h4 className="m-2 me-5">iTunes Store</h4>
      <form className="d-flex" onSubmit={onSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for a music"
          aria-label="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-outline-success m-2" type="submit">
          Search
        </button>
      </form>
      {renderTableBtn()}
      {renderCardsBtn()}
    </nav>
  );
};

export default Header;
