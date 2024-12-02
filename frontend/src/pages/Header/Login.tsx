
import axios from "axios";
import "../../components/Login.css";
import { useEffect, useState } from "react";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZUlkIjoxLCJvcmdhbml6YXRpb25JZCI6MiwibmFtZSI6IlJhbSBCaGF0dGFyYWkiLCJlbWFpbCI6InJhbWJoYXR0YXJhaTk4MjRAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0MjczNzEyMCIsInBhc3N3b3JkIjoiJDJiJDEwJDA3YWZXVldJVnJhcVRNMjN5bUZMMC5qdGF3aDg0Sm1JSzdtVi9LRzFjVldPNDA4SFJYazUuIiwiY3JlYXRlZEF0IjoiMjAyNC0xMi0wMlQwODowODoxOC41MDNaIiwidXBkYXRlZEF0IjoiMjAyNC0xMi0wMlQwODowODoxOC41MDNaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IlN1cGVyYWRtaW4ifSwiaWF0IjoxNzMzMTI2OTQyLCJleHAiOjE3MzQ0MjI5NDJ9.vEbZI4Hk6TfiZvrpspfHui1gpEz7FDVHgS-kjQejVRM";
const Login = () => {
const[login,setLogin]=useState("");

  const fetchLogin = async () => {
    try {
      const response =await axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
          },
          data:{
            username:"Admin",
            password:"admin",
          }
      });
      console.log({ response });
      if (response.status === 200) {
      setLogin(response.data);
      }
    } catch (error) {
      console.error({ error });
    }
  };
  


  useEffect(() => {
    fetchLogin();
  }, []); 
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


