import React from "react";

// Added search and onSearchChange props to Filter component to handle search input
function Filter({ search, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      {/* added search and onSearchChange props to Filter component */}
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;