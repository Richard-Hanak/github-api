import React from "react";

import useDataFetching from "../../useDataFetching.js";

function Orgs({ username }) {
  const { loading, results, error } = useDataFetching(
    `https://api.github.com/users/${username}/orgs`
  );

  if (loading || error) {
    return loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <h1>{error.message}</h1>
    );
  } else {
    return (
      <div className="orgs">
        {results.length > 0 ? (
          <>
            <h2>Organizations</h2>
            <ul>
              {results.map((e) => (
                <li key={e.id}>
                  <div className="img-wrap">
                    <img src={e.avatar_url} alt={e.login} />
                  </div>
                  <h3>{e.login}</h3>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h3>This user is not part of any organizations.</h3>
        )}
      </div>
    );
  }
}

export default Orgs;
