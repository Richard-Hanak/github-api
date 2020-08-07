import React from "react";

import useDataFetching from "../../useDataFetching.js";

function User({ username }) {
  const { loading, results, error } = useDataFetching(
    `https://api.github.com/users/${username}`
  );

  if (loading || error) {
    return loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <h1>{error.message || error}</h1>
    );
  } else {
    return (
      <div className="user">
        <div className="img-wrap">
          <img src={results.avatar_url} alt="user avatar" />
        </div>
        <div className="content-container">
          <h3>{results.login}</h3>
          <p>{results.bio || "User has no Bio"}</p>
          <a href={results.html_url}>See on GitHub</a>
          <div className="content-bottom">
            <p>{results.followers} followers</p>
            <p>{results.public_repos} repositories</p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
