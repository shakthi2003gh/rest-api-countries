import { useState } from "react";

const Filter = ({ region }) => {
  const [selectedValue, setValue] = useState("Filter by Region");

  const handleSelect = (e) => {
    setValue(e.target.dataset.value);
  };

  return (
    <div className="select" tabIndex="0">
      <div className="selected">
        {selectedValue}
        <span className="material-symbols-outlined">expand_more</span>
      </div>

      <div className="options">
        {region.map((r, i) => (
          <div key={i} className="option" data-value={r} onClick={handleSelect}>
            {r}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
