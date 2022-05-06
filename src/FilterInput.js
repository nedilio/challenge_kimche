import React from "react";
import { Search } from 'react-bootstrap-icons';


const FilterInput = (props) => {
    return (
        <div className="filter-input input-group mb-3">
            <span class="input-group-text"><Search /></span>
            <input 
                type="text" 
                className="form-control"  
                onChange={props.handleFilter}
                placeholder="start typing to search..."
            />
        </div>
    )
}

export default FilterInput;