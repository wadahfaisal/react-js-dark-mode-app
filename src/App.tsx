import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme: string | null = "light-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(getStorageTheme());

  useEffect(() => {
    // document.documentElement.className = theme || "light-theme";
    // document.body.className = theme || "light-theme";

    localStorage.setItem("theme", theme || "light-theme");
    console.log(theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  return (
    <main className={theme as string}>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
};

export default App;
