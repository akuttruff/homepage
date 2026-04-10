import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from '../components/sidebar/social-links';

describe('SocialLinks', () => {
  const mockSocialLinks = [
    { url: 'https://github.com/user', icon: <span className="icon">GitHub</span> },
    { url: 'https://twitter.com/user', icon: <span className="icon">Twitter</span> },
    { url: 'https://linkedin.com/user', icon: <span className="icon">LinkedIn</span> },
  ];

  it('renders all social links in a nav element', () => {
    render(<SocialLinks socialLinks={mockSocialLinks} />);

    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
  });

  it('applies the nav class to the nav element', () => {
    render(<SocialLinks socialLinks={mockSocialLinks} />);

    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  it('applies the nav-list class to the ul element', () => {
    render(<SocialLinks socialLinks={mockSocialLinks} />);

    const ulElement = document.querySelector('.nav-list');
    expect(ulElement).toBeInTheDocument();
  });

  it('renders social links in the correct order', () => {
    render(<SocialLinks socialLinks={mockSocialLinks} />);

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('GitHub');
    expect(links[1]).toHaveTextContent('Twitter');
    expect(links[2]).toHaveTextContent('LinkedIn');
  });

  it('handles an empty socialLinks array', () => {
    render(<SocialLinks socialLinks={[]} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
