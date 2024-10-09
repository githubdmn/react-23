import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import UserType from '../../types/UserType';

function UserResults() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        {users.map((user) => 
          <UserItem key={user.id} {...user} />
        )}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
