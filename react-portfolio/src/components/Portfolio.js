import Project from "./Project";
import { Projectlist} from '../data';

function Portfolio() {
  return (
      <>
      {Projectlist.map((project, idx) => {
          return (<Project
          title = {project.title}
          description = {project.description}
          repo = {project.repo}
          deployed = {project.deployed}
          key = {"project" + idx}
          />
      )})}</>
  )
}

export default Portfolio;