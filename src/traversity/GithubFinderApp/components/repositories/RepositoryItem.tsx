const RepositoryItem = ({ repo }: { repo: { html_url: string; name: string } }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepositoryItem;
