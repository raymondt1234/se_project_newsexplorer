import "./Header.css";
import { NavLink } from "react-router-dom";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>
      <div className="header__link-container">
        <NavLink to="/" className="header__link">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/saved-news" className="header__link">
            Saved articles
          </NavLink>
        )}
      </div>
      {isLoggedIn ? (
        <button className="header__btn">User</button>
      ) : (
        <button className="header__btn">Sign in</button>
      )}
    </header>
  );
}

export default Header;
