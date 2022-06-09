import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Parolele nu corespund !");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Rețea socială</h3>
          <span className="loginDesc">
            Aplicația pentru diploma de licență.
          </span>
          <span className="loginDesc">Pășoiu Alexandru-Marian</span>
          <span className="loginDesc">Tehnologia informației</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Nume de utilizator"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Parolă"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <input
              placeholder="Repetare parolă"
              type="password"
              className="loginInput"
              ref={passwordAgain}
              required
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Autentificare
            </button>
            <button className="loginRegisterButton">Intră in cont</button>
          </form>
        </div>
      </div>
    </div>
  );
}
