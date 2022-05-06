import React from "react";
import './Country.css';
import { PinMapFill, ChatTextFill } from "react-bootstrap-icons";

const Country = (props) => {
    return(
        <div className="country col-6 col-sm-6 col-md-4" key={props.country.code}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> <span className="flag" role="img" aria-label="Flag"><img src={"https://flagcdn.com/16x12/"+props.country.code.toLowerCase()+".png"} alt={"Flag" + props.country.code} /></span>{props.country.name}</h4> 
                    {/* El emoji no se muestra en algunos navegadores, por eso decidi usar imagen desde una cdn */}

                    {props.country.capital && <p className="card-text"> <span><PinMapFill /></span> Capital: {props.country.capital}</p>}
                    <p className="card-text">Languages: </p>
                </div>
                <ul className="list-group list-group-flush">
                    {props.country.languages.map((lang) => {
                        return <li className="list-group-item" key={lang.code}><span className="lang-icon"><ChatTextFill/></span>{lang.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Country;