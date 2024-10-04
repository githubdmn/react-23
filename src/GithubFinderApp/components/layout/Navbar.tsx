import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type NavbarProps = {
  title?: string;
};

const DefaultNavbarTitle = 'Github Finder';

function Navbar({ title = DefaultNavbarTitle }: NavbarProps) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link to="/" className="text-lg font-bold align-middle">
              {title}
            </Link>
          </div>

          <div className="flex">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
