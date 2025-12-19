import { withLayout } from '../components/withLayout';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Typography from '../components/Typography';

const Home = () => {
  return (
    <div>
      <Typography as="h1">"This is the Home page content"</Typography>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
};

export default withLayout(Home);
