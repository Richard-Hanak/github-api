import { useState, useEffect } from "react";

//useEffect runs everytime the datasource(url) changes
function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const json = await data.json();
        if (data.status === 404) {
          setError("The user does not exist.");
        }
        if (json) {
          setLoading(false);
          setResults(json);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [dataSource]);

  return {
    error,
    loading,
    results,
  };
}

export default useDataFetching;
