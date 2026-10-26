import { useState, useEffect } from 'react';

export interface UseMediaQueryHook {
  (query: string): boolean;
}

/** Whether the query matches now; the first render already has the real answer, so nothing swaps after mount. */
const matchesNow = (query: string): boolean => (
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(query).matches
    : false
);

const useMediaQuery: UseMediaQueryHook = (query) => {
  const [matches, setMatches] = useState(() => matchesNow(query));

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
