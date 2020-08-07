import React, { useState } from "react";
import "./App.css";

import SearchBar from "./SearchBar/SearchBar.js";
import User from "./User/User";
import Repos from "./Repos/Repos";
import Orgs from "./Orgs/Orgs";

function App() {
  const [username, setUsername] = useState("Richard-Hanak");

  return (
    <div className="App">
      <h1>Github user finder</h1>
      <SearchBar setUsername={setUsername} />
      <div className="content-wrapper">
        <User username={username} />
        <Orgs username={username} />
        <Repos username={username} />
      </div>
    </div>
  );
}

export default App;
