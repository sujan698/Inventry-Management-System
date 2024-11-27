import { Bell, Search, UserCircle } from "lucide-react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleBellClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="header-container">
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input placeholder="type here..." />
      </div>
      <div className="user-section">
        <Bell
          className={`icon bell ${isClicked ? "clicked" : ""}`}
          onClick={handleBellClick}
        />
        <UserCircle className="icon" />
        <span className="user-text">Sujan Bhattarai</span>{" "}
        {/* Add your desired text here */}
      </div>
    </div>
  );
};

export default Header;
