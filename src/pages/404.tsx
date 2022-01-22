import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default NotFoundPage;
