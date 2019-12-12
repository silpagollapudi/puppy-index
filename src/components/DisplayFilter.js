import React from "react";


const DisplayFilter = (props) => {
 

  return (
    <div className="filter-list">
        <label>
        <input id="search_txt" type="text" placeholder="Search" onChange={ () => props.filterList()}/> 
        </label>
        </div>
  );
};

export default DisplayFilter;
