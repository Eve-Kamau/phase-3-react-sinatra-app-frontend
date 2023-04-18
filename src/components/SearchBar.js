import React from "react";

function SearchBar({ filter, handleSearch }) {


  return (
    <>
    <div className="Search" >
    <input 
     type="text" 
     name="search" 
     filter = {filter}
     placeholder="Find a Job..." 
     onChange={handleSearch}/>
    </div>
    </>
);
}

export default SearchBar;

