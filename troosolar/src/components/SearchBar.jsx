import React from 'react';
import searchIcon from '../assets/icons/search.svg';

const SearchBar = ({ onChange, value }) => {
  return (
    <div className="font-montserrat relative bg-white min-w-2xs rounded-md">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent text-xs"
      />
      <img
        src={searchIcon}
        alt="Search"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60"
      />
    </div>
  );
};

export default SearchBar;
