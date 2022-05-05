import React from "react";

const FilterInput = (props) => {
    return (
        <div className="filter-input">
            <input type="text" onChange={props.handleFilter}/>
          </div>
    )
}

export default FilterInput;