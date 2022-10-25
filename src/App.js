import { useState } from "react";
import Header from "./component/header";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={"app " + theme}>
      <Header onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;
