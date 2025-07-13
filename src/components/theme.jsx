import { useEffect, useState } from "react";

const Theme = () => {
  const themes = { 1: "light", 2: "dark", 3: "custom" };
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const [curT, setCurT] = useState(
    () => parseInt(localStorage.getItem("themeC")) || 1
  );

  useEffect(() => {
    if (curT > 3) {
      setCurT(1);
    }
    const newTheme = themes[curT];
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("themeC", curT);
    window.gtag &&
      window.gtag("event", "theme_change", {
        event_category: "Theme",
        event_label: newTheme,
      });
  }, [curT]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark", "custom");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleThemeChange = () => {
    if (curT === Object.keys(themes).length) {
      setCurT(1);
    } else {
      setCurT((prev) => prev + 1);
    }
  };

  return (
    <p onClick={handleThemeChange} className=" nav-link">Theme&nbsp;
      <i className="bx bxs-paint-roll"> </i>
    </p>
  );
};

export default Theme;
