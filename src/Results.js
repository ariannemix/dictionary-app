import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) { 
    if (props.results) {
            return <div className="Results">
            <h2 className="Word">{props.results.word}</h2>
            <p className="Phonetics">{props.results.phonetics[0].text}</p>
            <figure>
                <audio controls src={props.results.phonetics[0].audio}>
                </audio>
            </figure>
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