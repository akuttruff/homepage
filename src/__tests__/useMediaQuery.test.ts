import { renderHook, act } from '@testing-library/react';
import useMediaQuery from '../components/hooks/useMediaQuery';

interface MatchMediaMock {
  matches: boolean;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

describe('useMediaQuery', () => {
  let matchMediaMock: jest.Mock;

  beforeEach(() => {
    // Setup mock for window.matchMedia
    matchMediaMock = jest.fn();
    (window as unknown as { matchMedia: typeof matchMediaMock }).matchMedia = matchMediaMock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns false for a query that does not match', () => {
    const mockMediaQuery: MatchMediaMock = {
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
    matchMediaMock.mockReturnValue(mockMediaQuery);

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    expect(result.current).toBe(false);
  });

  it('returns true for a query that matches', () => {
    const mockMediaQuery: MatchMediaMock = {
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
    matchMediaMock.mockReturnValue(mockMediaQuery);

    const { result } = renderHook(() => useMediaQuery('(max-width: 500px)'));

    expect(result.current).toBe(true);
  });

  it('updates when the media query state changes', () => {
    let currentMatches = false;
    let listenerCallback: ((event: { matches: boolean }) => void) | null = null;

    matchMediaMock.mockReturnValue({
      get matches() { return currentMatches; },
      addEventListener: (event: string, callback: (event: { matches: boolean }) => void) => {
        if (event === 'change') {
          listenerCallback = callback;
        }
      },
      removeEventListener: jest.fn(),
    });

    const { result, rerender } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    // Initial render - should be false
    expect(result.current).toBe(false);

    // Simulate media query change to true
    act(() => {
      currentMatches = true;
      if (listenerCallback) listenerCallback({ matches: true });
    });

    // Rerender to pick up the change
    rerender();

    expect(result.current).toBe(true);

    // Simulate media query change back to false
    act(() => {
      currentMatches = false;
      if (listenerCallback) listenerCallback({ matches: false });
    });

    rerender();

    expect(result.current).toBe(false);
  });

  it('cleans up event listeners on unmount', () => {
    const removeEventListenerSpy = jest.fn();

    matchMediaMock.mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: removeEventListenerSpy,
    });

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('change', expect.any(Function));
  });
});
