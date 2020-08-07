import React from "react";

import useDataFetching from "../../useDataFetching.js";

function Repos({ username }) {
  const { loading, results, error } = useDataFetching(
    `https://api.github.com/users/${username}/repos?per_page=250`
  );

  if (loading || error) {
    return loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <h1>{error.message}</h1>
    );
  } else {
    return (
      <div className="repos">
        <h2>Repositories</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((e) => (
              <li key={e.id}>
                <p>{e.name}</p>
                <a href={e.html_url}>GitHub</a>
              </li>
            ))}
          </ul>
        ) : (
          <h3>This user does not have any repositories.</h3>
        )}
      </div>
    );
  }
}

export default Repos;
