import React from "react";

interface Props {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchComponent: React.FC<Props> = (props) => {
  return (
    <div className="search-section">
      <div
        className="overlay"
        onClick={(e) => {
          props.setSearchMode(!props.searchMode);
        }}
      >
        <div
          className="search-bar"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input type="text" placeholder="search product" />
          <button type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
