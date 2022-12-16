import { useRef, useState } from "react";
import { useDataContext } from "../../context/DataProvider";
// import {NavLink} from "react-router-dom"
import "./Challenges.scss";

export const Challenges = () => {
  const [search, setSearch] = useState("");
  const { challenges } = useDataContext();
  const inputRef = useRef();

  const filteredChallenge = challenges.filter(
    (challenge) =>
      challenge.name.toLowerCase().includes(search.toLowerCase()) ||
      challenge.description.toLowerCase().includes(search.toLowerCase()) ||
      challenge.tools.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="challenges">
      <div className="title">
        Forget exams, build a job-ready challenges instead
      </div>
      <div className="build">
        The better way is for you to work on real challenges starting from the 2nd
        week of your training. This will give you what employers want to see - a
        rich portfolio that showcases your skills. We hate exams too much.
      </div>
      <div className="challenge">
        .
        <div className="total">
          {challenges.length} {challenges.length === 1 ? "Challenge" : "Challenges"}
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
          {/* {challenges.map((challenge) => ( */}
          {/* {challenges.reverse().map((challenge) => ( */}
          {filteredChallenge.reverse().map((challenge) => (
            <div className="card" key={challenge._id}>
              <div className="image">
                <img
                  src={`/images/challenges/${challenge.image}`}
                  onMouseEnter={(e) =>
                    // (e.currentTarget.src = challenge.secondImage)
                    (e.currentTarget.src = `/images/challenges/${challenge.secondImage}`)
                  }
                  // onMouseOut={(e) => (e.currentTarget.src = challenge.image)}
                  onMouseOut={(e) =>
                    (e.currentTarget.src = `/images/challenges/${challenge.image}`)
                  }
                  className="img"
                  // onClick={() =>schowSingleProject(challenge)}
                  alt={challenge.name}
                />
              </div>

              <div className="content">
                <div className="title">{challenge.name}</div>
                <div className="text">
                  <div>Description: {challenge.description}</div>
                  <div>Tools: {challenge.tools}</div>
                  <div>
                    <a href={challenge.link} target="_blank" rel="noreferrer">
                      {challenge.link}
                    </a>
                  </div>
                  <div>
                    <a href={challenge.github} target="_blank" rel="noreferrer">
                      {challenge.github}
                    </a>
                  </div>
                  <div>
                    <a href={challenge.backend} target="_blank" rel="noreferrer">
                      {challenge.backend}
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
