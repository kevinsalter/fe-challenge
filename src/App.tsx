import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import RepoList from './RepoList';

function App() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/orgs/Blizzard/repos').then((response) => {
      return response.json().then((json) => console.log(json));
    });
  }, []);

  const search = (term: string) => {
    console.log("I'm searching! ", term);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Blizzard Github Repos</h2>
      </div>
      <SearchBar onSearch={search} searchTerm={searchTerm} />
      <RepoList repos={repos} />
    </div>
  );
}

export default App;
