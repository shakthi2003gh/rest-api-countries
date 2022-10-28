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

async function getCountry(country) {
  const data = await fetch(URL + `name/${country}?fullText=true`)
    .then((res) => res.json())
    .then((data) =>
      data.map(async (country) => {
        const nativeName =
          country.name.nativeName[
            Object.keys(country.name.nativeName)[
              Object.keys(country.name.nativeName).length - 1
            ]
          ].common;

        const currencies =
          country.currencies[Object.keys(country.currencies)[0]].name;

        const languages = Object.keys(country.languages)
          .map((lang) => country.languages[lang])
          .join(", ");

        const promise = country.borders
          ? await country.borders.map(
              async (code) => await getCountryName(code)
            )
          : [];

        const borderCountries = await Promise.all(promise).then(
          (results) => results
        );

        return {
          img: country.flags.png,
          name: country.name.common,
          nativeName,
          population: country.population,
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital[0],
          tld: country.tld[0],
          currencies,
          languages,
          borderCountries,
        };
      })
    );

  return data[0] || {};
}

async function getCountryName(code) {
  return await fetch("https://restcountries.com/v3.1/alpha/" + code)
    .then((res) => res.json())
    .then((data) => {
      return data[0].name.common;
    });
}

export { getCountry, getCountries };
