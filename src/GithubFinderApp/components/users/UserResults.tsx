import { useEffect, useState } from 'react';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API_URL}/users`,
      {
        method: 'GET',
        headers: {
          // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default UserResults;
