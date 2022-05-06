import React from "react";

const GroupBy = (props) => {
    return (
        <div className="group-buttons">
            <button disabled={props.groupBy === 'Continent'} onClick={props.handleGroupByContinent}>Group by Continent</button>
            <button disabled={props.groupBy === 'Language'} onClick={props.handleGroupByLanguage}>Group by Language</button>
          </div>
    )
}

export default GroupBy;