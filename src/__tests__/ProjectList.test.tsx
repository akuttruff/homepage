import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectList from '../components/projects/project-list';
import type { ProjectDetailType } from '../data/projects';

const matchMedia = (matches: boolean) => {
  (window as unknown as { matchMedia: unknown }).matchMedia = jest.fn().mockReturnValue({
    matches,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
};

describe('ProjectList', () => {
  const day = { src: 'cairn-day.png', alt: 'Cairn, a day' };
  const add = { src: 'cairn-add.png', alt: 'Cairn, adding food' };
  const week = { src: 'cairn-week.png', alt: 'Cairn, a week' };
  const projects: ProjectDetailType[] = [
    {
      title: 'LM CHAT',
      repoUrl: 'https://github.com/akuttruff/lm-chat',
      repoLabel: 'github.com/akuttruff/lm-chat',
      onDesktop: [
        { src: 'lm-chat-thread.png', alt: 'LM Chat, a thread' },
        { src: 'lm-chat-chats.png', alt: 'LM Chat, the chats' },
      ],
      onPhone: [{ src: 'lm-chat-desktop.png', alt: 'LM Chat on a desktop' }],
      summaryId: 'lm-chat-summary',
      summary: 'A chat client.',
    }, {
      title: 'CAIRN',
      repoUrl: 'https://github.com/akuttruff/cairn',
      repoLabel: 'github.com/akuttruff/cairn',
      onDesktop: [day, add, week],
      onPhone: [day, week],
      summaryId: 'cairn-summary',
      summary: 'A daily log.',
    },
  ];

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a title, repo link and summary per project', () => {
    matchMedia(false);
    render(<ProjectList projectDetails={projects} />);

    expect(screen.getByText('LM CHAT')).toBeInTheDocument();
    expect(screen.getByText('CAIRN')).toBeInTheDocument();
    expect(screen.getByText('A daily log.')).toBeInTheDocument();
  });

  it('shows the phone set on a phone, side by side when there are several', () => {
    matchMedia(false);
    render(<ProjectList projectDetails={projects} />);

    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(screen.getByAltText('LM Chat on a desktop').closest('.project-images-row')).toBeNull();
    expect(screen.getByAltText('Cairn, a week').closest('.project-images-row')).not.toBeNull();
    expect(screen.queryByAltText('Cairn, adding food')).toBeNull();
  });

  it('shows the desktop set on a desktop', () => {
    matchMedia(true);
    render(<ProjectList projectDetails={projects} />);

    expect(screen.getAllByRole('img')).toHaveLength(5);
    expect(screen.queryByAltText('LM Chat on a desktop')).toBeNull();
    expect(screen.getByAltText('Cairn, adding food').closest('.project-images-row')).not.toBeNull();
  });

  it('links each project to its repository in a new tab', () => {
    matchMedia(false);
    render(<ProjectList projectDetails={projects} />);

    const link = screen.getByRole('link', { name: 'github.com/akuttruff/cairn' });
    expect(link).toHaveAttribute('href', 'https://github.com/akuttruff/cairn');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders nothing for an empty list', () => {
    matchMedia(false);
    render(<ProjectList projectDetails={[]} />);
    expect(document.querySelectorAll('.project')).toHaveLength(0);
  });
});
