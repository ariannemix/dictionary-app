import React from "react"; 

export default function Synonyms(props) {
    if (props.synonyms) {
        return (<div className="Synonyms">
            <p><strong>Synonym(s):</strong>
            {props.synonyms.map(function(synonym, index) {
                return (<span key={index}> <u>{synonym}</u> </span>)
            })}
            </p>
            </div>)
    } else {
        return null;
    }
}