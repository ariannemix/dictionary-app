import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) { 
    if (props.results) {
        console.log(props.results.synonyms)
        return <div className="Results">
            <h2 className="Word">{props.results.word}</h2>
            <p className="Phonetics">{props.results.phonetics[0].text}</p>
            {props.results.meanings.map(function(meaning, index) {
                return (<div key={index}>
                    <Meaning meaning={meaning} />
                </div>)
            })}
        </div>}
        else {
    return null;
        }
    }