import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  return (
    <div className="navigation__container">
      <NavLink to="/" className="navigation__link">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/saved-news" className="navigation__link">
          Saved articles
        </NavLink>
      )}
    </div>
  );
}

export default Navigation;
