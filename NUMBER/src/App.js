
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);

  const handleFetchNumbers = async () => {
    const urlsList = urls.split('\n').filter(url => url.trim() !== '');

    const fetchPromises = urlsList.map(async url => {
      try {
        const response = await axios.get(url, { timeout: 500 });
        if (response.status === 200) {
          return response.data.numbers;
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
      }
    });

    try {
      const fetchedResults = await Promise.all(fetchPromises);
      const mergedNumbers = Array.from(new Set(fetchedResults.flat())).sort((a, b) => a - b);
      setResults(mergedNumbers);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h1>Number Management App</h1>
      <textarea
        rows={5}
        cols={50}
        placeholder="Enter URLs here (one URL per line)"
        value={urls}
        onChange={e => setUrls(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <pre>{JSON.stringify({ numbers: results }, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;


