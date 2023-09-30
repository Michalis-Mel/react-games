import { Link } from "react-router-dom";

//Images
import game from "../assets/game.png";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={game} alt="ReactGameHub" /> ReactGameHub
      </Link>
    </header>
  );
};

export default Header;
