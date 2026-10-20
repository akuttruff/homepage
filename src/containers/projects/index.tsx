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
          A collection of software projects that I serve via
          {' '}
          <a href="https://tailscale.com" target="_blank" rel="noopener noreferrer">Tailscale</a>
          {' '}
          from my local home server using open weights models. I&apos;m currently using
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.8-27B" target="_blank" rel="noopener noreferrer">Qwen 3.8-27b</a>
          {' '}
          as my main model and
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.5-9B" target="_blank" rel="noopener noreferrer">Qwen 3.5-9b</a>
          {' '}
          for fast, simple lookups.
        </p>
        <ProjectList projectDetails={projectDetails} />
      </div>
    </div>
  </div>
);

export default Projects;
