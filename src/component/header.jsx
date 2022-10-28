import { useNavigate } from "react-router-dom";

const Header = ({ onThemeChange }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="title" onClick={() => navigate("/")}>
          Where in the world?
        </div>
        <button aria-label="dark mode" onClick={onThemeChange}>
          <span className="material-symbols-outlined">dark_mode</span> Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
