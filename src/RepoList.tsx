import React from 'react';
import RepoItem from './RepoItem';
import { IRepo } from './types/repo';

interface RepoListProps {
  repos: IRepo[];
}

const RepoList = (props: RepoListProps): JSX.Element => {
  const repos = props.repos.map((repo) => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return <ul className="App-repo-list">{repos}</ul>;
};

export default RepoList;
