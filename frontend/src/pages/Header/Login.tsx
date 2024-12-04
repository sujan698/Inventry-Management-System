import axios from "axios";
import "../../components/Login.css";
import { useState } from "react";

  interface LoginResponse {
    name: string;
    email: string;
    role: string;
    token: string;
  }
const Login = () => {
  const [loginResponse, setLoginResponse] = useState<LoginResponse |null>(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitting login for:", username, password);
    await fetchLogin();
  };

  const fetchLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        setLoginResponse(response.data);
      }
    } catch (error) {
      console.error("Login failed:");
    }
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      {loginResponse && (
        <div className="login-success">
          <p>Login Successful! Welcome, {loginResponse.name }.</p>
        </div>
      )}
    </div>
  );
};

export default Login;
