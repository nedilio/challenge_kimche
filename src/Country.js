import React from "react";

const Country = (props) => {
 return(
    <div className="country" key={props.country.code}>
        <h4> <span>{props.country.emoji}</span>{props.country.name}</h4> 
        {props.country.capital && <p>Capital: {props.country.capital}</p>}
        <p>Language: {props.country.languages[0].name}</p>
    </div>
 )
}

export default Country;