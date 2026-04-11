import React from 'react';

export interface SocialLinkType {
  url: string;
  icon: React.ReactNode;
}

interface SocialLinkProps {
  link: SocialLinkType;
}

const SocialLink = ({ link }: SocialLinkProps) => {
  const { url, icon } = link;

  return (
    <li className="nav-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </li>
  );
};

export default SocialLink;
