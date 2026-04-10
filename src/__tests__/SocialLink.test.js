import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLink from '../components/sidebar/social-link';

describe('SocialLink', () => {
  it('renders a link with the correct href', () => {
    const link = { url: 'https://github.com/user', icon: <span>GitHub</span> };
    
    render(<SocialLink link={link} />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute('href', 'https://github.com/user');
  });

  it('renders the provided icon element', () => {
    const githubIcon = <span className="icon-github">GitHub Icon</span>;
    const link = { url: 'https://github.com/user', icon: githubIcon };
    
    render(<SocialLink link={link} />);

    expect(screen.getByText('GitHub Icon')).toBeInTheDocument();
  });

  it('opens links in a new tab withnoopener noreferrer', () => {
    const link = { url: 'https://twitter.com/user', icon: <span>Twitter</span> };
    
    render(<SocialLink link={link} />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies the nav-item class to the list item', () => {
    const link = { url: 'https://linkedin.com/user', icon: <span>LinkedIn</span> };
    
    render(<SocialLink link={link} />);

    const listItemElement = screen.getByRole('listitem');
    expect(listItemElement).toHaveClass('nav-item');
  });
});
