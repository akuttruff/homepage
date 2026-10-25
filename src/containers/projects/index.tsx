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
          from my local home server, a Mac Studio with an M4 Max (16-core CPU, 40-core GPU) and 128 GB of unified
          memory, using open weights models. I&apos;m currently running three of them.
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.5-122B-A10B" target="_blank" rel="noopener noreferrer">Qwen3.5‑122B‑A10B</a>
          , a mixture-of-experts model that answers quickly for its size, is the main model behind
          the apps and does the work in Weft.
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.8-27B" target="_blank" rel="noopener noreferrer">Qwen3.8‑27B</a>
          , a dense model that reasons more carefully, plans and reviews in Weft.
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.5-9B" target="_blank" rel="noopener noreferrer">Qwen3.5‑9B</a>
          {' '}
          handles fast, simple lookups and summaries.
        </p>
        <ProjectList projectDetails={projectDetails} />
      </div>
    </div>
  </div>
);

export default Projects;
