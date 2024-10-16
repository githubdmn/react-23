/* eslint-disable @typescript-eslint/no-explicit-any */
import RepositoryItem from './RepositoryItem';

const Repositories = ({ repos }: { repos: any[] }) => {
  if (!repos || repos.length === 0) {
    return <p>No repositories found.</p>;
  }

  return repos.map((repo) => <RepositoryItem repo={repo} key={repo.id} />);
};

export default Repositories;
