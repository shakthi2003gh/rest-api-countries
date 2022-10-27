const Filter = ({ selectedRegion, onRegionSelect }) => {
  const region = ["all", "africa", "america", "asia", "europe", "oceania"];

  return (
    <div className="select" tabIndex="0">
      <div className="selected">
        {selectedRegion === "all" ? "Filter by Region" : selectedRegion}
        <span className="material-symbols-outlined">expand_more</span>
      </div>

      <div className="options">
        {region.map((r, i) => (
          <div
            key={i}
            className="option"
            data-value={r}
            onClick={onRegionSelect}
          >
            {r}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
