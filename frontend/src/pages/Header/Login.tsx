
import "../../components/Login.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../api";
import { AuthContext } from "../../context/authContext";


const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const {login} =useContext(AuthContext)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitting login for:", username, password);
    await fetchLogin();
  };
  const handleSignupClick=()=>{
    navigate("/organizations");
  }

  const fetchLogin = async () => {
    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });
        console.log("Login successful:", response.data);
        login(response.data.token);
        navigate("/")
        // localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login failed:");
    }
  };
  return (
    <div className="login-form">
      <h2>Welcome Back</h2>
      <p>Log In to Continue</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex-row">
          <div>
            <input type="radio" />
            <label>Remember me </label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button className="button-submit" type="submit" >Log In</button>
        <p className="p">Don't have an account? <span className="span" onClick={handleSignupClick}>Sign Up</span></p>
      </form>
    </div>
  );
};

export default Login;
