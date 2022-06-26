import { FaLaptopHouse } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { SiZalando } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { SiXdadevelopers } from "react-icons/si";
import { FiAirplay } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import "../components/home/Home.scss";

export const Home = () => {
  return (
    <div className="home">
      {/* ---INPUT--- */}
      <div className="intro">
        <div className="input">
          <h2>IGNITE YOUR CAREER IN TECH</h2>
          <h4>
            Skip years of studying and become a Web Developer, <br /> Data
            Scientist or Digital Product Designer from scratch… <br /> or level
            up your current career with new, future-proof tech skills.
          </h4>
          <div className="buttons">
            <button className="explore">Explore courses</button>
            <button className="apply">Apply now</button>
          </div>
          <div className="graduates">
            <p>Our graduates now work at:</p>
            <div className="brands">
              <div className="icon">
                <SiTesla />
              </div>
              <div className="icon">
                <FiFacebook />
              </div>
              <div className="icon">
                <SiZalando />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="images/home/banner1.png" alt="bg" />
        </div>
      </div>
      {/* ---CAREER--- */}

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
            <div className="icon">
              <FaLaptopHouse />
            </div>
            <div className="title">Hybrid learning experience</div>
            <p>
              Take advantage of a unique mix of remote learning and an in-depth
              campus project phase.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <FaLaptopCode />
            </div>
            <div className="title">Live and interactive online classes</div>
            <p>
              Enjoy hands-on instructor-led classes, workshops, team challenges
              and much more.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <FaBullseye />
            </div>
            <div className="title">Build a job-ready portfolio</div>
            <p>
              And enjoy personalized career support along the way to nail your
              job interview.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <FaHandshake />
            </div>
            <div className="title">Get hired with our Job Guarantee</div>
            <p>
              Find a job in 6 months or get your money back. <br /> *Conditions
              apply
            </p>
          </div>
        </div>
      </div>

      {/* ---DISCOVER--- */}

      <div className="discover">
        <h2>DISCOVER OUR COURSES</h2>
        <div className="cards">
          <div className="card design">
            {/* <img src="//source.unsplash.com/250x150/?" alt="card" /> */}
            <img src="images/discover/design.png" alt="card" />
            <div className="title">
              <h3>
                DIGITAL PRODUCT <br /> DESIGN
              </h3>
            </div>
            <div className="available">
              <p>Available in:</p>
              <div className="language">
                <button className="english">English</button>
                <button className="german">German</button>
              </div>
              <p>
                Understand what drives people's decisions. Master UX Research,
                UI Design, and help digital business with creative
                problem-solving.
              </p>
              <button>Explore course</button>
              <div className="apply">
                <a href="/students">Or apply now</a>
              </div>
            </div>
          </div>
          <div className="card data">
            <img src="images/discover/data.png" alt="card" />
            <div className="title">
              <h3>
                DATA SCIENCE <br /> <div className="tralala">TRALALA</div>
              </h3>
            </div>
            <div className="available">
              <p>Available in:</p>
              <div className="language">
                <button className="english">English</button>
                <button className="german">German</button>
              </div>
              <p>
                Unlock your data genius. Learn SQL, Python and Machine Learning
                to help companies discover their greatest opportunities.
              </p>
              <button>Explore course</button>
              <div className="apply">
                <a href="/students">Or apply now</a>
              </div>
            </div>
          </div>
          <div className="card web">
            <img src="images/discover/web.png" alt="card" />
            <div className="title">
              <h3>
                WEB & APP <br /> DEVELOPMENT{" "}
              </h3>
            </div>
            <div className="available">
              <p>Available in:</p>
              <div className="language">
                <button className="english">English</button>
                <button className="german">German</button>
              </div>
              <p>
                Shape the future with coding. Learn how to create functional
                websites and applications that others can only dream about.{" "}
              </p>
              <button>Explore course</button>
              <div className="apply">
                <a href="/students">Or apply now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---EXPERIENCE--- */}
      <div className="courses">
        <h2>
          A PERSONALIZED SUPPORT SYSTEM BASED ON <br /> 40+ YEARS OF EXPERIENCE
        </h2>
        <p>
          Of course, we weren’t helping people to find tech jobs back in the
          80s. But we did spend 40 years perfecting our training programs to
          help people find jobs in all kinds of industries. Now we have taken
          our system and applied it to the tech industry. You won’t get this
          level of support anywhere else:
        </p>
        <div className="cards">
          <div className="card coach">
            <div className="icon">
              <SiXdadevelopers />
            </div>
            <a href="/courses">Web Developer courses</a>
            <p>
              {" "}
              Whenever you need extra help, feel stuck or like you’re falling
              behind, you can book a 1:1 session with an instructor who will
              personally help you with your questions. So you can learn with
              confidence and stay on track.
            </p>
          </div>
          <div className="card coach">
            <div className="icon">
              <FiAirplay />
            </div>
            <a href="/courses">Online Marketing courses</a>
            <p>
              {" "}
              There are many advantages to following an online course, classroom
              training, or even ebooks. These are not restricted to digital
              marketing courses but ask for all types of structured learning.
            </p>
          </div>
          <div className="card coach">
            <div className="icon">
              <FiUsers />
            </div>
            <a href="/courses">1 on 1 help</a>
            <p>
              {" "}
              Whenever you need extra help, feel stuck or like you’re falling
              behind, you can book a 1:1 session with an instructor who will
              personally help you with your questions. So you can learn with
              confidence and stay on track.
            </p>
          </div>
        </div>
        <div className="instructors">
          <div className="card">
            <img src="images/cards/person008.jpg" alt="card" />
            <h3> LEAD INSTRUCTORS </h3>
            <p>
              Responsible for teaching you all the relevant skills live on
              camera.
            </p>
          </div>
          <div className="card">
            <img src="images/cards/person018.jpg" alt="card" />
            <h3> JUNIOR INSTRUCTORS </h3>
            <p>
              Always ready to help you when you need extra help or feel stuck
              while learning.
            </p>
          </div>
          <div className="card">
            <img src="images/cards/person006.jpg" alt="card" />
            <h3> CAREER SUPPORT </h3>
            <p>
              They’ll help you craft outstanding application documents and get
              you ready to present yourself.
            </p>
          </div>
          <div className="card">
            <img src="images/cards/person036.jpg" alt="card" />
            <h3> COMMUNITY TEAM </h3>
            <p>
              Here to support and help you to give you the best experience
              possible while you’re with us.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
