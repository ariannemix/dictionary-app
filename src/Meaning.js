import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
    return (<div className="Meaning">
          <p><strong>{props.meaning.partOfSpeech}</strong></p>
        {props.meaning.definitions.map(function(definition, index) {
            return (<div key={index}>
                <li>
                    <ul className="List">
                        <p className="Definition">{definition.definition}</p>
                        <p className="Example">{definition.example}</p>
                    </ul>
                </li>
                <Synonyms synonyms={definition.synonyms} />
            </div>)
        })}
    </div>)
}