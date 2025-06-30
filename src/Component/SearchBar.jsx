// components/SearchBar.js
import { useState } from 'react';

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="mt-5 fixed-top container pt-2">
      <input
        type="text"
        className="form-control form-control-lg search-input"
        placeholder="Search by name or symbol..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button 
          className="btn btn-link position-absolute end-0 top-0 mt-2 me-2"
          onClick={onClear}
        >
          <i className="bi bi-x-lg text-secondary"></i>
        </button>
      )}
    </div>
  );
};

export default SearchBar;