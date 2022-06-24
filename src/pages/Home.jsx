import React from "react";
import "../components/home/Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="input">
          <h2>IGNITE YOUR CAREER IN TECH</h2>
          <h4>
            Skip years of studying and become a Web Developer, <br /> Data
            Scientist or Digital Product Designer from scratch… <br /> or level
            up your current career with new, future-proof tech skills.
          </h4>
          <div className="buttons">
            <button className="courses">Explore courses</button>
            <button className="apply">Apply now</button>
          </div>
          <div className="graduates">
            <p>Our graduates now work at:</p>
          </div>
        </div>
        <div className="card">
          <img src="images/home/banner1.png" alt="bg" />
        </div>
      </div>
      <div className="career">
        <h2>
          YOUR FAST-TRACK INTO A CAREER YOU LOVE <br />
          EVEN IF YOU HAVE ZERO PRIOR EXPERIENCE
        </h2>
        <h5>
          Why should building a new career take years? At WBS Coding School,
          you’ll learn the exact skills employers want you to have today in as
          little as 15 weeks (full-time) or 26 weeks (part-time).
        </h5>
        <div className="news">
          <div className="good">
            <h3>The GOOD news:</h3>
            <h5>
              there are over 40 million unfilled roles in tech worldwide and 72%
              of companies are eager to hire career changers to fill these
              roles. [1]
            </h5>
          </div>
          <div className="good">
            <h3>The GREAT news:</h3>
            <h5>
              this is your chance to build a future-proof career in tech and
              work from anywhere, even if you have zero experience.
            </h5>
          </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="title">Hybrid learning experience</div>
              <p>
                Take advantage of a unique mix of remote learning and an
                in-depth campus project phase.
              </p>
            </div>
            <div className="card">
              <div className="title">Live and interactive online classes</div>
              <p>
                Enjoy hands-on instructor-led classes, workshops, team
                challenges and much more.
              </p>
            </div>
            <div className="card">
              <div className="title">Build a job-ready portfolio</div>
              <p>
                And enjoy personalized career support along the way to nail your
                job interview.
              </p>
            </div>
            <div className="card">
              <div className="title">
                Get hired with our Job Guarantee
              </div>
              <p>Find a job in 6 months or get your money back. <br /> *Conditions apply</p>
            </div>
          </div>
        </div>
    </div>
  );
};
