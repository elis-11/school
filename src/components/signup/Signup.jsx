import { useRef } from "react";
import { signupApi } from "../helpers/apiCalls";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  
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
      return console.log(result.error);
    }
    navigate("/");
  };

  return (
    <form onSubmit={onSignupSubmit}>
      <div>
        <input type="text" ref={nameRef} placeholder="name" />
      </div>
      <div>
        <input type="text" ref={emailRef} placeholder="Email" />
      </div>
      <div>
        <input type="password" ref={passwordRef} placeholder="Password" />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};
