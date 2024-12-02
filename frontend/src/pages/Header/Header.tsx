import { Bell, Search, UserCircle } from "lucide-react";
import { useNavigate } from "react-router";
import "../../components/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/login");
  };

  const handleSignupNavigation = () => {
    navigate("/signup");
  };

  return (
    <div className="header-container">
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input placeholder="type here..." />
      </div>
      <div className="user-section">
        <button className="header-button" onClick={handleLoginNavigation}>Login</button>
        <button className="header-button" onClick={handleSignupNavigation}>Signup</button>
        <Bell

          className="icon"
        />
        <UserCircle className="icon" />
      </div>
    </div>
  );
};

export default Header;
