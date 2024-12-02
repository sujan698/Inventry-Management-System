
import "../../components/SignUp.css";

const Signup = () => {
  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button className="signup-button" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
