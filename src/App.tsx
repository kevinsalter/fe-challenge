import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import { IRepo } from './types/repo';

function App() {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('https://api.github.com/orgs/RiotGames/repos').then((response) => {
      return response.json().then((repos: IRepo[]) => console.log(repos));
    });
  }, []);

  const search = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("I'm searching! ", event);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Riot Games Github Repos</h2>
      </div>
      <SearchBar onSearch={search} searchTerm={searchTerm} />
      <RepoList repos={repos} />
    </div>
  );
}

export default App;
