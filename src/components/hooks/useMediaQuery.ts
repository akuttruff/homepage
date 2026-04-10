import React, { useState, useEffect } from 'react';

export interface UseMediaQueryHook {
  (query: string): boolean;
}

const useMediaQuery: UseMediaQueryHook = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatches = () => {
      setMatches((prev) => {
        if (prev === media.matches) return prev;
        return media.matches;
      });
    };

    updateMatches();
    media.addEventListener('change', updateMatches);
    return () => media.removeEventListener('change', updateMatches);
  }, [query]);

  return matches;
};

export default useMediaQuery;
