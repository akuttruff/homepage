import React from 'react';
import type { ProjectDetailType } from '../../data/projects';
import ProjectDetail from './project-detail';

interface ProjectListProps {
  projectDetails: ProjectDetailType[];
}

const ProjectList = ({ projectDetails }: ProjectListProps) => projectDetails.filter((detail) => !detail.hidden).map((detail) => (
  <ProjectDetail
    key={detail.title}
    detail={detail}
  />
));

export default ProjectList;
