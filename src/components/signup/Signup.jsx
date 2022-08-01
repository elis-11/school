import { useRef } from "react";
import { signupApi } from "../../helpers/apiCalls";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.scss";
import { useDataContext } from "../../context/DataProvider";
// import Background from "../../images/comp.png";

export const Signup = () => {

const {setUser, setErrors}= useDataContext();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const onSignupSubmit = async (e) => {
    e.preventDefault();

    const result = await signupApi(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
    if (result.error) {
      return setErrors(result.error);
    }
    console.log(result);
    setErrors("")
    setUser(result)

    // navigate("/users", { replace: true });
    navigate("/users",);
  };

  return (
    <div className="Signup">
      {/* <div className="background" style={{background: `url(${Background})`}}> */}
      <div
        className="background"
        style={{
          backgroundImage:
            "url(" +
            "https://www.netzwoche.ch/sites/default/files/styles/np8_full/public/media/2022/07/06/christopher-gower-vjMgqUkS8q8-unsplash.png?itok=zPuURLwI" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="login">
          Already a member? <NavLink to="/login">Sign in</NavLink>
        </div>
        <form onSubmit={onSignupSubmit}>
        <div className="S">A</div>
          <div>
            <div className="title">Sign up to DCA</div>
            <input type="text" ref={nameRef} placeholder="Name" />
          </div>
          <div>
            <input type="text" ref={emailRef} placeholder="E-mail" />
          </div>
          <div>
            <input type="password" ref={passwordRef} placeholder="Password" />
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};
