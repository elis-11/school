import { useRef, useState } from "react";
import { useDataContext } from "../../context/DataProvider";
// import {NavLink} from "react-router-dom"
import "./Projects.scss";

export const Projects = () => {
  const [search, setSearch] = useState("");
  const { projects } = useDataContext();
  const inputRef = useRef();

  const filteredProgect = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tools.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects">
      <div className="title">
        Forget exams, build a job-ready projects instead
      </div>
      <div className="build">
        The better way is for you to work on real projects starting from the 2nd
        week of your training. This will give you what employers want to see - a
        rich portfolio that showcases your skills. We hate exams too much.
      </div>
      <div className="project">
        .
        <div className="total">
          {projects.length} {projects.length === 1 ? "Project" : "Projects"}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            autoFocus
            ref={inputRef}
            id="search"
            type="text"
            role="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </form>
        <div className="cards">
          {/* {projects.map((project) => ( */}
          {/* {projects.reverse().map((project) => ( */}
          {filteredProgect.reverse().map((project) => (
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
                  className="img"
                  // onClick={() =>schowSingleProject(project)}
                  alt={project.name}
                />
              </div>

              <div className="content">
                <div className="title">{project.name}</div>
                <div className="text">
                  <div>Description: {project.description}</div>
                  <div>Tools: {project.tools}</div>
                  <div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.link}
                    </a>
                  </div>
                  <div>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {project.github}
                    </a>
                  </div>
                  <div>
                    <a href={project.backend} target="_blank" rel="noreferrer">
                      {project.backend}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
