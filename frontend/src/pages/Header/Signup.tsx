import { useState } from "react";
import "../../components/SignUp.css";
import axios from "axios";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZUlkIjoxLCJvcmdhbml6YXRpb25JZCI6MiwibmFtZSI6IlJhbSBCaGF0dGFyYWkiLCJlbWFpbCI6InJhbWJoYXR0YXJhaTk4MjRAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0MjczNzEyMCIsInBhc3N3b3JkIjoiJDJiJDEwJDA3YWZXVldJVnJhcVRNMjN5bUZMMC5qdGF3aDg0Sm1JSzdtVi9LRzFjVldPNDA4SFJYazUuIiwiY3JlYXRlZEF0IjoiMjAyNC0xMi0wMlQwODowODoxOC41MDNaIiwidXBkYXRlZEF0IjoiMjAyNC0xMi0wMlQwODowODoxOC41MDNaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IlN1cGVyYWRtaW4ifSwiaWF0IjoxNzMzMTI2OTQyLCJleHAiOjE3MzQ0MjI5NDJ9.vEbZI4Hk6TfiZvrpspfHui1gpEz7FDVHgS-kjQejVRM";

  interface SignupResponse {
    username: string;
    email: string;
    id: number;
  }
const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone]=useState("");
  const [signupResponse, setSignupResponse] = useState<SignupResponse |null> (null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting signup for:", { username, email,phone, password });

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        {
          username,
          email,
          phone,
          password,

        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        setSignupResponse(response.data);
      }
    } catch (error: any) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone </label>
          <input
            type="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signup-button" type="submit">
          Signup
        </button>
      </form>
      {signupResponse && (
        <div className="signup-success">
          <p>Signup Successful! Welcome, {signupResponse.username}.</p>
        </div>
      )}
    </div>
  );
};

export default Signup;
