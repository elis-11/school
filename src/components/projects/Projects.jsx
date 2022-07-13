import { useDataContext } from "../../context/DataProvider";
// import {NavLink} from "react-router-dom"
import "./Projects.scss";

export const Projects = () => {
  const { projects } = useDataContext();

  return (
    <div className="projects">
      <div className="title">Tralala</div>
      <div className="tralala">
        Tralala Tralala Tralala Tralala Tralala Tralala Tralala Tralala Tralala
      </div>
      <div className="project">

        <div className="cards">
          {projects.map((project) => (
            <div className="card" key={project._id}>
              <div className="image">
                <img
                  src={`/images/projects/${project.image}`}
                  alt={project.name}
                />
              </div>
              <div className="content">
              <div className="title">{project.name}</div>
              <div className="text">
              <div>Description: {project.description}</div>
              <div>Tools: {project.tools}</div>
              <div>Ptoject :{project.link}</div>
              <div>Github: {project.github}</div>
              {/* <NavLink to={`${project.github}`}></NavLink> */}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
