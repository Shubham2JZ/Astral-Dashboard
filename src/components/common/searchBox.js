import React, { useRef, useState } from "react";
import "./searchBox.css";
import searchIcon from "../../public/icons/search.png";

const SearchBox = () => {
  const [searchContent, setSearchContent] = useState("");
  const inputRef = useRef(null);

  const handleSearchButtonClick = (e) => {
    e.stopPropagation();
    console.log(searchContent);
    setSearchContent("");
  };
  return (
    <div
      className="searchbox-container"
      onClick={() => inputRef.current.focus()}
    >
      <input
        placeholder="Search"
        className="search-input"
        ref={inputRef}
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
      />
      <button
        className="input-search-button"
        onClick={(e) => handleSearchButtonClick(e)}
      >
        <img src={searchIcon} className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBox;
