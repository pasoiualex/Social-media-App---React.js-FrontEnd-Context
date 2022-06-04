import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Rețea socială</h3>
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
            <input placeholder="Nume de utilizator" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Parolă" className="loginInput" />
            <input placeholder="Repetare parolă" className="loginInput" />
            <button className="loginButton">Autentificare</button>
            <button className="loginRegisterButton">
              Intră in cont
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}