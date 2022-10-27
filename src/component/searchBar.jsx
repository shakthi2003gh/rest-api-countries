const Searchbar = ({ country, onSearch }) => {
  return (
    <div className="search-bar">
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        value={country}
        placeholder="Search for a country..."
        onChange={onSearch}
      />
    </div>
  );
};

export default Searchbar;
