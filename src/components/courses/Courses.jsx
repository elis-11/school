/* eslint-disable react-hooks/exhaustive-deps */
import { useDataContext } from "../../context/DataProvider";
import "./Courses.scss";

export const Courses = () => {
  const { courses } = useDataContext();


  return (
    <div>
      <div className="courses">
        <div className="title">
          <h2>Which digital field are you interested in?</h2>
        </div>
        <div className="course">
          <div className="cards">
            {courses.map((c) => (
              <div className="card" key={c._id}>
                <div className="title">{c.title}</div>
                <div className="description">
                  <div className="location">location: {c.location}</div>
                  <div className="duration">duration: {c.duration}</div>
                  <div className="education">education: {c.education}</div>
                  <div className="language">language: {c.language}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
