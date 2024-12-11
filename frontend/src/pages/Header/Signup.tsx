import { useState } from "react";
import "../../components/SignUp.css";
import { useLocation,useNavigate } from "react-router";
import { api } from "../../api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const { state } = useLocation();
  const organizationId = state?.organizationId;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting signup for:", { name, email, mobile, password });


    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        mobile,
        password,
        organizationId:organizationId && parseInt(organizationId,10),
        role: "Admin",
      });

      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        navigate("/")
        localStorage.setItem("token", response.data.token);
    
      }
    } catch (error: any) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
    </div>
  );
};

export default SignUp;
