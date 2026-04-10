import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Route from '../components/sidebar/route';

describe('Route', () => {
  it('renders a link with the correct title and to attribute', () => {
    const route = { link: '/work', title: 'Work' };

    render(
      <MemoryRouter>
        <Route route={route} />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /work/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/work');
  });

  it('applies the anchor-styles class to the link', () => {
    const route = { link: '/music', title: 'Music' };

    render(
      <MemoryRouter>
        <Route route={route} />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /music/i });
    expect(linkElement).toHaveClass('anchor-styles');
  });

  it('applies the route class to the list item', () => {
    const route = { link: '/talks', title: 'Talks' };

    render(
      <MemoryRouter>
        <Route route={route} />
      </MemoryRouter>
    );

    const listItemElement = screen.getByRole('listitem');
    expect(listItemElement).toHaveClass('route');
  });
});
