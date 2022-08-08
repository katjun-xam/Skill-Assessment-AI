import { useEffect, useRef } from 'react';

const useInitialLoad = (onLoad: () => void) => {
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      onLoad();
    }
  }, [onLoad]);

  return isInitialLoad.current;
};

// usage:
// useInitialLoad(() => console.log('initial load')));

export default useInitialLoad;
