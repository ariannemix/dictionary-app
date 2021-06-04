import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary() {
const [input, setInput] = useState("flower");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [images, setImages] = useState(null);



function handleResponse(response) {
    setResults(response.data[0]);
}

function handleImageResponse(response) {
    setImages(response.data);
}

function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=6`;
    let apiKey = `563492ad6f917000010000019753ca1ee694469496038fb0afaa4818`;
    axios.get(pexelsApiUrl, { headers: { "Authorization": `Bearer ${apiKey}` } }).then(handleImageResponse);
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
            <Images images={images} alt={input} />
        </div>)
    } else {
        search();
        setLoaded(true);
    }
    
    
}