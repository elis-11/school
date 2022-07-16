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
            {courses.map((course) => (
              <div className="card" key={course._id}>
                <div className="title">{course.title}</div>
                <div className="description">
                  <div className="location">location: {course.location}</div>
                  <div className="duration">duration: {course.duration}</div>
                  <div className="education">education: {course.education}</div>
                  <div className="language">language: {course.language}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
