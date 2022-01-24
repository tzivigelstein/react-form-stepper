import { useState, useEffect } from 'react';

const DEFAULT_WINDOW_DIRECTION = 'vertical';

export default function useDirection() {
  const [direction, setDirection] = useState(DEFAULT_WINDOW_DIRECTION);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  function handleWindowResize() {
    setDirection(
      window.matchMedia('(max-width: 768px)').matches
        ? 'vertical'
        : 'horizontal'
    );
  }

  return direction;
}
