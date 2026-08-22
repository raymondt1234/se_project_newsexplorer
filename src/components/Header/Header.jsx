import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>
      <Navigation isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <button className="header__btn">User</button>
      ) : (
        <button className="header__btn">Sign in</button>
      )}
    </header>
  );
}

export default Header;
