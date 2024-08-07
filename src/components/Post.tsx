import { Navigate, Routes, useNavigate, useParams, Route } from 'react-router-dom';
import Card from './Card';

function Post() {
  const params = useParams();

  const status: number = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log('go to about page');
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <>
      <h1>Post - basic react-router-dom example</h1>
      <Card>
        <p>params {params.id}</p>
        <p>params {params.name}</p>
        <button className="btn-secondary" onClick={onClick}>
          About page
        </button>
        <Routes>
          <Route
            path="/show"
            element={<div>This is a specific content for /post/show</div>}
          />
        </Routes>
      </Card>
    </>
  );
}

export default Post;
