import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
const [input, setInput] = useState("flower");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);



function handleResponse(response) {
    setResults(response.data[0]);
}

function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;
    axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleInput(event) {
        setInput(event.target.value);
    }

    if (loaded) {
        return (
        <div className="Dictionary">
            <div className="Search">
                <h3>What word would you like to know?</h3>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleInput} defaultValue="eg: flower" className="Input" />
                </form>
            </div>
            <Results results={results} />
        </div>)
    } else {
        search();
        setLoaded(true);
    }
    
}