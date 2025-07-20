import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Theme from "./theme";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { to: "header", label: "Home" },
    { to: "services", label: "Services" },
    //{ to: "portfolio", label: "Portfolio" },
    { to: "reviews", label: "Feedback" },
    { to: "contact", label: "Connect" }
    
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <button className="nav-toggle" onClick={toggleMenu}>
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>
      <ul className={`nav-list ${isMenuOpen ? "nav-list-open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.to}>
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="nav-link-active"
              onClick={() => {
                window.gtag &&
                  window.gtag("event", "nav_click", {
                    event_category: "Navigation",
                    event_label: item.label,
                  });
                setIsMenuOpen(false); 
              }}
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
        <Theme />
      </ul>
    </nav>
  );
};
export default Navigation;
