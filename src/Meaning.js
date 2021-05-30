import React from "react";

export default function Meaning(props) {
    return (<div className="Meaning">
          <p><strong>{props.meaning.partOfSpeech}</strong></p>
        {props.meaning.definitions.map(function(definition, index) {
            return (<div key={index}>
                <li>
                    <ul>
                        <p>{definition.definition}
                        <br />
                        <em>i.e {definition.example}</em></p>
                    </ul>
                </li>
            </div>)
        })}
    </div>)
}