import React from "react";
import './GroupBy.css';

const GroupBy = (props) => {
    return (
        <div className="group-buttons">
            <button className="btn btn-primary btn-group" disabled={props.groupBy === 'Continent'} onClick={props.handleGroupByContinent}>Group by Continent</button>
            <button className="btn btn-primary btn-group" disabled={props.groupBy === 'Language'} onClick={props.handleGroupByLanguage}>Group by Language</button>
          </div>
    )
}

export default GroupBy;