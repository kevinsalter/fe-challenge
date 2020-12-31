import React from 'react';

interface SearchBarProps {
  onSearch: any;
  searchTerm: string;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  return (
    <div className="App-search-bar">
      <input
        value={props.searchTerm}
        readOnly
        placeholder="search by repository name"
      />
    </div>
  );
};

export default SearchBar;
