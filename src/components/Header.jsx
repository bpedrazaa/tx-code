import { useState } from "react";

const Header = ({ onGetInfo }) => {
  // Hook (State)
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add some text to search");
      return;
    }
    // Pass the info
    onGetInfo({ text });
    // Set the text to empty on the state
    setText("");
  };

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
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
