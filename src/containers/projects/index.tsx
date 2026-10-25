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
          unified memory, running open-weights models:
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.5-122B-A10B" target="_blank" rel="noopener noreferrer">Qwen3.5‑122B‑A10B</a>
          , a fast mixture-of-experts model, behind the apps and Weft&apos;s worker;
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.8-27B" target="_blank" rel="noopener noreferrer">Qwen3.8‑27B</a>
          , a dense model that reasons more carefully, as Weft&apos;s planner and reviewer; and
          {' '}
          <a href="https://huggingface.co/Qwen/Qwen3.5-9B" target="_blank" rel="noopener noreferrer">Qwen3.5‑9B</a>
          {' '}
          for quick lookups and summaries.
        </p>
        <ProjectList projectDetails={projectDetails} />
      </div>
    </div>
  </div>
);

export default Projects;
