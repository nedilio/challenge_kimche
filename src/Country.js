import React from "react";
import './Country.css';
import { PinMapFill } from "react-bootstrap-icons";

const Country = (props) => {
    return(
        <div className="country col-6 col-sm-6 col-md-4" key={props.country.code}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> <span className="flag" role="img" aria-label="Flag">{props.country.emoji}</span>{props.country.name}</h4> 

                    {props.country.capital && <p className="card-text"> <span><PinMapFill /></span> Capital: {props.country.capital}</p>}
                    <p className="card-text">Languages: </p>
                </div>
                <ul className="list-group list-group-flush">
                    {props.country.languages.map((lang) => {
                        return <li className="list-group-item" key={lang.code}>{lang.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Country;