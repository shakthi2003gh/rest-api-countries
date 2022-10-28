import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";
import CountryDetails from "./pages/countryDetail";
import Header from "./component/header";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={"app " + theme}>
      <Header onThemeChange={handleThemeChange} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<CountryDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
