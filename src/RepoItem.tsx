import React from 'react';
import { IRepo } from './types/repo';

interface RepoItemProps {
  repo: IRepo;
}

const RepoItem = (props: RepoItemProps): JSX.Element => {
  return (
    <li className="App-repo-list-item">
      <ul className="App-repo-list-item--details">
        <li>
          <strong>Name:</strong> {props.repo.name}
        </li>
        <li>
          <strong>Fork count:</strong> {props.repo.forks}
        </li>
        <li>
          <strong>Language:</strong> {props.repo.language}
        </li>
        <li>
          <strong>Created date:</strong> {props.repo.created_at}
        </li>
      </ul>
    </li>
  );
};

export default RepoItem;
