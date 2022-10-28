import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../component/searchBar";
import Filter from "../component/regionFilter";
import Card from "../component/countryCard";
import { getCountries } from "../services/rest-api";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchCountry] = useState("");
  const [selectedRegion, setRegion] = useState("filter by region");

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleRegionSelect = (e) => {
    setRegion(e.target.dataset.value);
  };

  useEffect(() => {
    const option = searchValue
      ? "name/" + searchValue
      : "all?fields=flags,name,capital,region,population";

    const call = async () => {
      const countries = await getCountries(option, selectedRegion);

      setCountries(countries || []);
    };

    call();
  }, [searchValue, selectedRegion]);

  return (
    <div className="home container">
      <div className="header">
        <Searchbar country={searchValue} onSearch={handleSearch} />
        <Filter
          selectedRegion={selectedRegion}
          onRegionSelect={handleRegionSelect}
        />
      </div>

      {countries.length !== 0 ? (
        <div className="countries-cards">
          {countries.map((country, index) => (
            <Link key={index} to={`/country/${country.name.toLowerCase()}`}>
              <Card country={country} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="not-found">Country Not Found</div>
      )}
    </div>
  );
};

export default Home;
