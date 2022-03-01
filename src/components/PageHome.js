import "../styles/PageHome.scss";

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="intro" id="home">
        <p className="tag1">&#8249html&#8250</p>
        <p className="tag1">&#8249body&#8250</p>
        {/* <p className="tag1">&#8249section&#8250</p>  */}

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
        <p className=" tag2 tag1">&#8249div&#8250</p>
        <p className="tag1">&#8249header&#8250</p>
        <div className="slider">
          <div className="container">
            <p className="tag5">&#8249br&#8250</p>
            <div className="slider_inner">
              <div className="slider_item active">
                <a
                  className="box nav_link"
                  href="https://github.com/elis-11/"
                  target="blank"
                >
                  {" "}
                  Github
                </a>
              </div>
              <div className="slider_item">
                <a
                  className="box nav_link"
                  href="https://linkedin.com/"
                  target="blank"
                >
                  {" "}
                  Linkedin
                </a>
              </div>
              <div className="slider_item">
                <a
                  className="box nav_link"
                  href="https://xing.com/"
                  target="blank"
                >
                  {" "}
                  XING
                </a>
              </div>
              <div className="slider_item">
                <a
                  className="box nav_link"
                  href="https://facebook.com/"
                  target="blank"
                >
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
