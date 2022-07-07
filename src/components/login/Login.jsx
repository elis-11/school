import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataProvider";
import { loginApi } from "../../helpers/apiCalls";
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
    setUser(result);

    navigate("/employees", { replace: true });
  };

  return (
    <div className="Login">
      <form onSubmit={onLoginSubmit}>
        <div>
          <input type="text" ref={emailRef} placeholder="Email" />
        </div>
        <div>
          <input type="password" ref={passwordRef} placeholder="Password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
