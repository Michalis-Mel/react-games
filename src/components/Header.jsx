import { Link } from "react-router-dom";

//Images
import game from "../assets/game.png";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={game} alt="ReactGameHub" /> ReactGameHub
      </Link>
      <Link to="/wishlist" className="wish">
        My Wishlist
      </Link>
    </header>
  );
};

export default Header;
