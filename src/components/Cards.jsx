//import ReactPaginate from "react-paginate";
//import { useState, useEffect } from "react";
import Card from "./Card";

const Cards = ({ songs }) => {
  // const [offset, setOffset] = useState(0);
  // const [data, setData] = useState([]);
  // const [perPage] = useState(10);
  // const [pageCount, setPageCount] = useState(0);

  // const manipulateData = (songs) => {
  //   setData(songs);
  //   setPageCount(Math.ceil(data.length / perPage));

  //   console.log(songs);
  // };

  // useEffect(() => {
  //   manipulateData(songs);
  // }, [offset]);

  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + 1);
  // };

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

      {/* <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      /> */}
    </div>
  );
};

export default Cards;
