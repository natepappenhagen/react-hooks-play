/*
 * @Author: Nate
 * @Date:   2019-01-29 17:05:27
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-29 21:20:45
 */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("reacthooks");

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setResults(response.data.hits);
  };

  return (
    <React.Fragment>
      <input type="text" onChange={event => setQuery(event.target.value)} />

      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
