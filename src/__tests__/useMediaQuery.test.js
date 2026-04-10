import { renderHook, act } from '@testing-library/react';
import useMediaQuery from '../components/hooks/useMediaQuery';

describe('useMediaQuery', () => {
  let matchMediaMock;

  beforeEach(() => {
    // Setup mock for window.matchMedia
    matchMediaMock = jest.fn();
    window.matchMedia = matchMediaMock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns false for a query that does not match', () => {
    matchMediaMock.mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    expect(result.current).toBe(false);
  });

  it('returns true for a query that matches', () => {
    matchMediaMock.mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(max-width: 500px)'));

    expect(result.current).toBe(true);
  });

  it('updates when the media query state changes', () => {
    let currentMatches = false;
    let listenerCallback = null;

    matchMediaMock.mockReturnValue({
      get matches() { return currentMatches; },
      addEventListener: (event, callback) => {
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
      if (listenerCallback) listenerCallback();
    });

    // Rerender to pick up the change
    rerender();

    expect(result.current).toBe(true);

    // Simulate media query change back to false
    act(() => {
      currentMatches = false;
      if (listenerCallback) listenerCallback();
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
