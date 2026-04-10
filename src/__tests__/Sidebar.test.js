import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Sidebar, { DesktopSidebar, Hamburger, DESKTOP_MIN_WIDTH } from '../containers/sidebar/index';

// Mock the child components
jest.mock('../components/sidebar/routes', () => ({ routes }) => (
  <div data-testid="mock-routes">Routes</div>
));
jest.mock('../components/sidebar/social-links', () => ({ socialLinks }) => (
  <div data-testid="mock-social-links">SocialLinks</div>
));
jest.mock('../data', () => ({
  routes: [{ link: '/work', title: 'Work' }],
  socialLinks: [{ url: 'https://github.com', icon: <span>GitHub</span> }],
}));

describe('Sidebar', () => {
  describe('Desktop mode (width >= DESKTOP_MIN_WIDTH)', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
    });

    it('renders the DesktopSidebar at desktop widths', () => {
      render(<Sidebar />);

      // Desktop sidebar should have the sidebar class
      expect(document.querySelector('.sidebar')).toBeInTheDocument();
      expect(screen.getByText('Software engineer, violinist.')).toBeInTheDocument();
    });

    it('does not render the hamburger menu at desktop widths', () => {
      render(<Sidebar />);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('Mobile mode (width < DESKTOP_MIN_WIDTH)', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    });

    it('renders the Hamburger component at mobile widths', () => {
      render(<Sidebar />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('does not render the desktop sidebar at mobile widths', () => {
      render(<Sidebar />);

      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });
  });

  describe('responsive behavior', () => {
    it('responds to window resize events', () => {
      // Set initial width to mobile
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });

      const { rerender } = render(<Sidebar />);

      // Should show hamburger initially
      expect(screen.getByRole('button')).toBeInTheDocument();

      // Resize to desktop and trigger re-render
      act(() => {
        window.innerWidth = 1024;
        window.dispatchEvent(new Event('resize'));
      });

      // Should show desktop sidebar now
      expect(document.querySelector('.sidebar')).toBeInTheDocument();
    });
  });
});

describe('DESKTOP_MIN_WIDTH', () => {
  it('is set to 913', () => {
    expect(DESKTOP_MIN_WIDTH).toBe(913);
  });
});
