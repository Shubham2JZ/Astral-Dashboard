import React, { useRef } from "react";
import "./searchBox.css";
import searchIcon from "../../public/photos/fi-br-search.png";

const SearchBox = () => {
  const inputRef = useRef();
  return (
    <div className="searchbox-container">
      <input placeholder="Search" className="search-input" ref={inputRef} />
      <button className="input-search-button">
        <img src={searchIcon} className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBox;
