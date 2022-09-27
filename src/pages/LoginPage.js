import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import loginData from "../Datas/LoginData/loginData";
import "./LoginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();


  // const fromPage = location.state.from.pathname;
  //console.log(fromPage);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const newUserLogin = form.username.value;
    const newUserPassword = form.password.value;
    loginData.push({
      email: newUserLogin,
      password: newUserPassword,
    });
    // console.log(loginData)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userLogin = form.username.value;
    const userPassword = form.password.value;
    loginData.map((user) => {
      if (user.email === userLogin || user.password === userPassword) {
        return navigate("/layout", { replace: true })
        
      }
      return <Navigate to="/" />;
    });
  };

  return (
    <div className="loginPage">
      <div className="div">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name : <input name="username" type="text" />
          </label>
          <label>
            password : <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="or">
        <h2>OR</h2>
      </div>
      <div className="div">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <label>
            Name : <input name="username" />
          </label>
          <label>
            password : <input type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
