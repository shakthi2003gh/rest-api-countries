const Header = ({ onThemeChange }) => {
  return (
    <header>
      <div className="container">
        <div className="title">Where in the world?</div>
        <button aria-label="dark mode" onClick={onThemeChange}>
          <span className="material-symbols-outlined">dark_mode</span> Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
