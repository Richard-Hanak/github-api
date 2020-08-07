import React, { useState } from "react";
import search from "./search.svg";

function SearchBar({setUsername}) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
  e.preventDefault()
  setUsername(input)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input onChange={e => setInput(e.target.value)}></input>
      <button>
        <img src={search} alt="search"></img>
      </button>
    </form>
  );
}

export default SearchBar
