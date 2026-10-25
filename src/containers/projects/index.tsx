import projectDetails from '../../data/projects';
import Sidebar from '../sidebar';
import ProjectList from '../../components/projects/project-list';

const Projects = () => (
  <div>
    <Sidebar />
    <div className="content">
      <div className="resume">
        <h1 className="resume-subhead">Projects</h1>
        <p className="project-intro">
          Software projects I serve via
          {' '}
          <a href="https://tailscale.com" target="_blank" rel="noopener noreferrer">Tailscale</a>
          {' '}
          from my home server, a Mac Studio with an M4 Max (16-core CPU, 40-core GPU) and 128 GB of
          unified memory, running open-weights models.
        </p>
        <ProjectList projectDetails={projectDetails} />
      </div>
    </div>
  </div>
);

export default Projects;
