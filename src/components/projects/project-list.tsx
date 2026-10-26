import React from 'react';
import type { ProjectDetailType } from '../../data/projects';
import ProjectDetail from './project-detail';

interface ProjectListProps {
  projectDetails: ProjectDetailType[];
}

const ProjectList = ({ projectDetails }: ProjectListProps) => projectDetails.filter((detail) => !detail.hidden).map((detail, index) => (
  <ProjectDetail
    key={detail.title}
    detail={detail}
    first={index === 0}
  />
));

export default ProjectList;
