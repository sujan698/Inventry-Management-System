import { useNavigate } from "react-router";
import "../../components/Header.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { UserCircle } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const { user, fetchUser, clearUser } = useContext(UserContext);
  const [hasUser, setHasUser] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleLoginNavigation = () => {
    if (user) {
      clearUser();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const toggleListVisibility = () => {
    setIsListVisible((prevState) => !prevState);
  };

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  const handleProfileSettings = () => {
    navigate("/profile-settings");
  };

  useEffect(() => {
    if (user) {
      console.log({ user });
      setHasUser(true);
    }
  }, [user]);

  return (
    <div className="header-container">
      <div className="user-section">
        {!hasUser ? (
          <button className="header-button" onClick={handleLoginNavigation}>
            Login
          </button>
        ) : (
          <div className="welcome-section">
            <div className="welcome-message">
              <h3>Welcome, {user?.name}!</h3>
            </div>
            <div className="user-icon" onClick={toggleListVisibility}>
              <UserCircle size={24} />
            </div>

            {isListVisible && (
              <div className="user-options-list">
                <ul>
                  <li onClick={handleProfileSettings}>Profile Settings</li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
