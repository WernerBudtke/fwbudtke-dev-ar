import { Link } from '@tanstack/react-router';
import Typography from '../components/Typography';

const NotFound = () => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center gap-10">
      <Typography as="h1" className="text-4xl text-center">
        404 - Page Not Found
      </Typography>
      <Typography as="p" className="text-2xl text-center">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link to="/" className="btn btn-primary self-center">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
