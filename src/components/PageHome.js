import "../styles/PageHome.scss";

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="intro" id="home">
        <p className="tag1">{`<html>`}</p>
        <p className="tag1">{`body`}</p>

        <div className="intro_inner">
          <h2 className="intro_title">
            Hi,
            <br />
            I'm Elisa,
            <br />
            web developer
          </h2>
          <div className="expert">Week End Developer / WordPress Expert</div>
          <a className="btn btn--red btn--proj" href="#projects">
            My Projects
          </a>
        </div>
        <p className=" tag2 tag1">{`<div>`}</p>
        <p className="tag1">{`<header>`}</p>
        <div className="slider">
          <div className="container">
            <p className="tag5">{`<br>`}</p>
            <div className="slider_inner">
              <div className="slider_item active">
                <a
                  className="box"
                  href="https://github.com/elis-11/"
                  target="blank">
                  {" "}
                  Github
                </a>
              </div>
              <div className="slider_item">
                <a className="box" href="https://linkedin.com/" target="blank">
                  {" "}
                  Linkedin
                </a>
              </div>
              <div className="slider_item">
                <a className="box" href="https://xing.com/" target="blank">
                  {" "}
                  XING
                </a>
              </div>
              <div className="slider_item">
                <a className="box" href="https://facebook.com/" target="blank">
                  {" "}
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
