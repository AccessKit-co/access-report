import React, { useState } from 'react';
import SearchBar from '../components/WAVE_searchbar';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (url) => {
    const apiUrl = `https://wave.webaim.org/api/request?key=Hx9brA2T3220&url=${url}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response;

      if (data?.result?.issues) {
        setSearchResults(data.result.issues);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {searchResults.length > 0 ? (
        <div>
          <p>Search results for {apiUrl} :</p>
          <ul>
            {searchResults.map((issue, index) => (
              <li key={index}>{issue.message}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No issues found.</p>
      )}
    </div>
  );
};

export default HomePage;