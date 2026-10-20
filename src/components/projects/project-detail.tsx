import React from 'react';
import type { ProjectDetailType } from '../../data/projects';
import useMediaQuery from '../hooks/useMediaQuery';
import { DESKTOP_QUERY } from '../breakpoints';

interface ProjectDetailProps {
  detail: ProjectDetailType;
}

/** Each project says which screenshots a desktop shows and which a phone shows; several sit side by side. */
const ProjectDetail = ({ detail }: ProjectDetailProps) => {
  const {
    title,
    repoUrl,
    repoLabel,
    icon,
    onDesktop,
    onPhone,
    summaryId,
    summary,
  } = detail;
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const images = isDesktop ? onDesktop : onPhone;

  return (
    <div className="col project">
      <div className="project-title">
        <img src={icon} alt="" className="project-icon" />
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">{title}</a>
      </div>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-repo">{repoLabel}</a>
      <div className={`project-images ${images.length > 1 ? 'project-images-row' : ''}`}>
        {images.map(({ src, alt }) => (
          <a key={src} href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-screenshot">
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>
      <div id={summaryId} className="project-summary">{summary}</div>
    </div>
  );
};

export default ProjectDetail;
