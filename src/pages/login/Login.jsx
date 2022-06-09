import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email:email.current.value, password:password.current.value }, dispatch);
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <span className="borderLogo">Rețea socială</span>
          </h3>
          <span className="loginDesc">
            Aplicația pentru diploma de licență.
          </span>
          <span className="loginDesc">Pășoiu Alexandru-Marian</span>
          <span className="loginDesc">Tehnologia informației</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Parolă"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">{isFetching ? "Loading... " : "Log In"}</button>
            <span className="loginForgot">Aţi uitat parola?</span>
            <button className="loginRegisterButton">
            {isFetching ? "Loading... " : "Create a new account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
