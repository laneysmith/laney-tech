import { useState, useEffect } from 'react';
import window from 'global';

const getWindowWidth = (): { width: number} => {
  const { innerWidth: width } = window;
  return { width };
};

const useWindowWidth = (): { width: number} => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
