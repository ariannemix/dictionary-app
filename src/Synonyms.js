import React from "react"; 
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (<div className="Synonyms">
            <p><span className="Label">Synonym(s): </span>
            {props.synonyms.map(function(synonym, index) {
                return (<span className="Synonym" key={index}> {synonym} </span>)
            })}
            </p>
            </div>)
    } else {
        return null;
    }
}