import { useContext, useEffect } from 'react';
import { GithubContext, getUser } from '../context';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../components';

function User() {
  const { user, dispatch, isLoading } = useContext(GithubContext);
  const params = useParams();

  //   useEffect(() => {
  //     if (params.login) {
  //       getUser(params.login);
  //     }
  //   }, []); // '[]' is for 'useEffect' to run only once

  // Add Dependency for useEffect: Since params.login is the parameter that triggers the fetch, you should include it in the dependency array to prevent any side effects if this component is reused with different users:

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getUserData = async () => {
      if (params.login) {
        const userData = await getUser(params.login);
        if (userData) {
          dispatch({ type: 'GET_USER', payload: userData });
        }
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.login]);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    avatar_url,
    name,
    location,
    bio,
    html_url,
    login,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>

            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>

            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
    </>
  );
}
export default User;
