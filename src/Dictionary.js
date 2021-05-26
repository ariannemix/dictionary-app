import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
const [input, setInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleInput(event) {
        setInput(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleInput} />
        <input type="submit" value="Search" className="btn btn-primary"/>
      </form>
      </div>
    )
}