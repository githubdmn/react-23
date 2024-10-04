import { FaHome, FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg mx-auto">
          <h1 className="text-8xl font-bold mb-8">
            <FaBug className="inline-block mr-4" /> 404 - Not Found
          </h1>
          <p className="text-5xl mb-8">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="btn btn-primary btn-lg flex items-center justify-center mx-auto px-6 py-3 text-lg"
            style={{ minWidth: '200px' }}
          >
            <FaHome className="mr-2 text-3xl" />
            <span className="whitespace-nowrap">Back To Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
