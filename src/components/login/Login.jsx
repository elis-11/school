import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataProvider";
import { loginApi } from "../../helpers/apiCalls";
import { storeUserInLocalStorage } from "../../helpers/LocallStorage";
import "./Login.scss";

export const Login = () => {
  const { setUser, setErrors } = useDataContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    const result = await loginApi(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (result.error) {
      return setErrors(result.error);
    }
    console.log(result);
    setErrors("");
    storeUserInLocalStorage(result)
    setUser(result);

    // navigate("/users", { replace: true });
    navigate("/users");
  };

  return (
    <div className="Login">
      <img src="images/login/bc.png" alt="card" />
      <div className="register">
        <div className="signup">
          Don't have an account? <NavLink to="/signup">  Sign up now</NavLink>
        </div>
        <form onSubmit={onLoginSubmit}>
          <div className="S">A</div>
          <div>
            <div className="title">Login to DCA</div>
            <input type="text" ref={emailRef} placeholder="E-mail" defaultValue={"admin@gmail.com"} />
          </div>
          <div>
            <input type="password" ref={passwordRef} placeholder="Password" defaultValue={"admin"} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
