const Card = ({ country }) => {
  return (
    <div className="card">
      <div className="country-img">
        <img
          src={country.img || ""}
          alt={`${country.name || ""} country flag`}
        />
      </div>

      <div className="details">
        <div className="country-name">{country.name || ""}</div>

        <div className="population">
          population: <output>{country.population || ""}</output>
        </div>
        <div className="region">
          region: <output>{country.region || ""}</output>
        </div>
        <div className="capital">
          capital: <output>{country.capital || ""}</output>
        </div>
      </div>
    </div>
  );
};

export default Card;
