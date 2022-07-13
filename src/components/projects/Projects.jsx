import { useDataContext } from "../../context/DataProvider";
// import {NavLink} from "react-router-dom"
import "./Projects.scss";

export const Projects = () => {
  const { projects } = useDataContext();

  // const schowSingleProject=(project) => {
  //   setFilteredProject([project])
  //   updateUrlWithId(project)
  // }

  return (
    <div className="projects">
      <div className="title">
        Forget exams, build a job-ready projects instead
      </div>
      <div className="build">
        We hate exams too. The better way is for you to work on real projects
        starting from the 2nd week of your training. This will give you what
        employers want to see - a rich portfolio that showcases your skills.
      </div>
      <div className="project">
        <div className="cards">
          {projects.map((project) => (
            <div className="card" key={project._id}>
              <div className="image">
                <img
                  src={`/images/projects/${project.image}`}
                  onMouseEnter={(e) =>
                    // (e.currentTarget.src = project.secondImage)
                    (e.currentTarget.src = `/images/projects/${project.secondImage}`)
                  }
                  // onMouseOut={(e) => (e.currentTarget.src = project.image)}
                  onMouseOut={(e) =>
                    (e.currentTarget.src = `/images/projects/${project.image}`)
                  }
                  className="photo"
                  // onClick={() =>schowSingleProject(project)}
                  alt={project.name}
                />
              </div>

              <div className="content">
                <div className="title">{project.name}</div>
                <div className="text">
                  <div>Description: {project.description}</div>
                  <div>Tools: {project.tools}</div>
                  <div>{project.link}</div>
                  <div>{project.github}</div>
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
