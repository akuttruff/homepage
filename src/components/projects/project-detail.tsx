import React from 'react';
import type { ProjectDetailType } from '../../data/projects';
import useMediaQuery from '../hooks/useMediaQuery';
import { DESKTOP_QUERY } from '../breakpoints';

interface ProjectDetailProps {
  detail: ProjectDetailType;
  /** True for the project at the top of the page, whose screenshots are in view and load at once; the rest load as the reader nears them. */
  first?: boolean;
}

/** Each project says which screenshots a desktop shows and which a phone shows; several sit side by side. */
const ProjectDetail = ({ detail, first = false }: ProjectDetailProps) => {
  const {
    title,
    repoUrl,
    repoLabel,
    icon,
    stack,
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
        <img src={icon} alt="" className="project-icon" width={180} height={180} />
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">{title}</a>
      </div>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-repo">{repoLabel}</a>
      <div className="project-stack">{stack}</div>
      <div className={`project-images ${images.length > 1 ? 'project-images-row' : ''}`}>
        {images.map(({
          src, alt, width, height,
        }) => (
          <a key={src} href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-screenshot">
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={first ? 'eager' : 'lazy'}
              decoding="async"
            />
          </a>
        ))}
      </div>
      <div id={summaryId} className="project-summary">{summary}</div>
    </div>
  );
};

export default ProjectDetail;
