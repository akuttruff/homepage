import React from 'react';
import { render, screen } from '@testing-library/react';
import Routes from '../components/sidebar/routes';
import { MemoryRouter } from 'react-router-dom';

describe('Routes', () => {
  const mockRoutes = [
    { link: '/work', title: 'Work' },
    { link: '/music', title: 'Music' },
    { link: '/talks', title: 'Talks' },
  ];

  it('renders all routes in a routes container', () => {
    render(
      <MemoryRouter>
        <Routes routes={mockRoutes} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /music/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /talks/i })).toBeInTheDocument();
  });

  it('applies the routes class to the container', () => {
    render(
      <MemoryRouter>
        <Routes routes={mockRoutes} />
      </MemoryRouter>
    );

    const container = document.querySelector('.routes');
    expect(container).toBeInTheDocument();
  });

  it('renders routes in the correct order', () => {
    render(
      <MemoryRouter>
        <Routes routes={mockRoutes} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('Work');
    expect(links[1]).toHaveTextContent('Music');
    expect(links[2]).toHaveTextContent('Talks');
  });

  it('handles an empty routes array', () => {
    render(
      <MemoryRouter>
        <Routes routes={[]} />
      </MemoryRouter>
    );

    const container = document.querySelector('.routes');
    expect(container).toBeInTheDocument();
    expect(document.querySelectorAll('.route')).toHaveLength(0);
  });
});
