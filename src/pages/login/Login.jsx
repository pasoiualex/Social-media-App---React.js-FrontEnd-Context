import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"><span className="borderLogo">Rețea socială</span></h3>
          <span className="loginDesc">
            Aplicația pentru diploma de licență.
          </span>
          <span className="loginDesc">
            Pășoiu Alexandru-Marian
          </span>
          <span className="loginDesc">
            Tehnologia informației
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Parolă" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Aţi uitat parola?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}