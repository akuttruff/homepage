import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock all dependencies before importing
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

// Import the Hamburger component directly (named export)
import { Hamburger } from '../containers/sidebar/index';

describe('Hamburger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the hamburger menu button initially', () => {
    render(<Hamburger />);
    
    // The hamburger component has role="button" on the div
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays the menu icon when closed', () => {
    render(<Hamburger />);
    
    // The MenuIcon has bi-list class
    const iconContainer = document.querySelector('.bi');
    expect(iconContainer).toBeInTheDocument();
  });

  it('displays the close icon when open', () => {
    render(<Hamburger />);
    
    // Click to open
    fireEvent.click(screen.getByRole('button'));
    
    // The CloseIcon has bi-x-lg class
    const closeIcon = document.querySelector('.bi-x-lg');
    expect(closeIcon).toBeInTheDocument();
  });

  it('toggles menu visibility on click', () => {
    render(<Hamburger />);
    
    // Initially, the menu should not be in the document
    expect(screen.queryByTestId('mock-routes')).not.toBeInTheDocument();
    
    // Click to open
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('mock-routes')).toBeInTheDocument();
    expect(screen.getByTestId('mock-social-links')).toBeInTheDocument();
    
    // Click to close
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByTestId('mock-routes')).not.toBeInTheDocument();
  });

  it('closes when clicking outside the menu', () => {
    render(<Hamburger />);
    
    // Open the menu
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('mock-routes')).toBeInTheDocument();
    
    // Click outside to close
    fireEvent.click(document.body);
    expect(screen.queryByTestId('mock-routes')).not.toBeInTheDocument();
  });

  it('handles Enter key press to toggle menu', () => {
    render(<Hamburger />);
    
    const button = screen.getByRole('button');
    
    // Open with Enter - use keyPress which handles the key combination properly
    fireEvent.keyUp(button, { key: 'Enter', code: 'Enter' });
    
    // The menu should now be open
    expect(screen.getByTestId('mock-routes')).toBeInTheDocument();
    
    // Close with Enter
    fireEvent.keyUp(button, { key: 'Enter', code: 'Enter' });
    
    expect(screen.queryByTestId('mock-routes')).not.toBeInTheDocument();
  });

  it('handles Space key press to toggle menu', () => {
    render(<Hamburger />);
    
    const button = screen.getByRole('button');
    
    // Open with Space - use keyPress which handles the key combination properly
    fireEvent.keyUp(button, { key: ' ', code: 'Space' });
    
    // The menu should now be open
    expect(screen.getByTestId('mock-routes')).toBeInTheDocument();
    
    // Close with Space
    fireEvent.keyUp(button, { key: ' ', code: 'Space' });
    
    expect(screen.queryByTestId('mock-routes')).not.toBeInTheDocument();
  });

  it('shows the user name in the hamburger button', () => {
    render(<Hamburger />);
    
    expect(screen.getByText('Amie Kuttruff')).toBeInTheDocument();
  });

  it('applies the hamburger class to the container', () => {
    render(<Hamburger />);
    
    expect(document.querySelector('.hamburger')).toBeInTheDocument();
  });
});
