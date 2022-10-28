import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry } from "../services/rest-api";

const CountryDetails = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { country: search } = useParams();

  useEffect(() => {
    const call = async () => {
      const country = await getCountry(search);

      setDetails(country);
    };

    call();
  }, [search]);

  return (
    <div className="country-details container">
      <button className="bg-primary" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">arrow_back</span>Back
      </button>

      <div className="flag">
        <img src={details.img || ""} alt={details.name || ""} />
      </div>

      <div className="details">
        <div className="country-name">{details.name || ""}</div>

        <div className="info">
          <div className="native-name">
            Native Name: <output>{details.nativeName || ""}</output>
          </div>
          <div className="population">
            Population: <output>{details.population || ""}</output>
          </div>
          <div className="region">
            Region: <output>{details.region || ""}</output>
          </div>
          <div className="sub-region">
            Sub region: <output>{details.subRegion || ""}</output>
          </div>
          <div className="capital">
            Capital: <output>{details.capital || ""}</output>
          </div>
        </div>

        <div className="info">
          <div className="tld">
            Top Level Domain: <output>{details.tld || ""}</output>
          </div>
          <div className="currencies">
            Currencies: <output>{details.currencies || ""}</output>
          </div>
          <div className="languages">
            Languages: <output>{details.languages || ""}</output>
          </div>
        </div>

        {details.borderCountries && details.borderCountries.length !== 0 && (
          <div className="borders">
            Border countries:
            <div className="countries">
              {details.borderCountries.map((bc, i) => (
                <output
                  key={i}
                  className="bg-primary"
                  onClick={() => navigate("/country/" + bc)}
                >
                  {bc}
                </output>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
