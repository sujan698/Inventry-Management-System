import { useNavigate } from "react-router";
import "../../components/Header.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, fetchUser, clearUser } = useContext(UserContext);
  const [hasUser, setHasUser] = useState(false);
  // console.log(user);

  // useEffect(() => {
  //   if (user) {
  //     fetchUser(user.id);
  //   }
  // }, [user, fetchUser]);

  const handleLoginNavigation = () => {
    if (user) {
      clearUser();
      navigate("/");
    } else {
      navigate("/login");
    }
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
          <div className="welcome-message">
            <span>Welcome, {user?.name}!</span>
            {/* <button className="header-button" onClick={handleLoginNavigation}>
              Logout
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
