import { ProjectsDB } from "./ProjectsDB";
import { ProjectItem } from "./ProjectItem";


export const Projects = () => {
  return (
    <>
      {ProjectsDB.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </>
  );
};
