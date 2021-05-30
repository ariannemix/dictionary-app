import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
const [input, setInput] = useState("");
let [results, setResults] = useState(null);



function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
}

    function handleSubmit(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleInput(event) {
        setInput(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleInput} className="Input" />
        <input type="submit" value="Search" className="btn btn-primary"/>
      </form>
      <Results results={results} />
      </div>)
}