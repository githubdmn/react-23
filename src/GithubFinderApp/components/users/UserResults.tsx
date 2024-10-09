import { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/GithubContext';


function UserResults() {

  const { users, isLoading, fetchUsers } = useContext(GithubContext);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  
 
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
