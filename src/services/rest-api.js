// const URL ="https://restcountries.com/v3.1/";
const URL = "https://restcountries.com/v3.1/";

async function getCountries(option, region = "") {
  const data = await fetch(URL + option)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 404) return;
      return data
        .filter((d) =>
          !["filter by region", "all"].includes(region)
            ? d.region.toLowerCase().match(`${region}`)
            : true
        )
        .filter((d, i) => i < 50)
        .map((country) => ({
          img: country.flags.png,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital,
        }));
    });

  return data || [];
}

export { getCountries };
