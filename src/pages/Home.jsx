import { useState } from "react";
import axios from "axios";

//Import images
import search from "../assets/search.png";
import close from "../assets/close.png";
import gamer from "../assets/gamer.jpg";

//Import components
import GameList from "../components/GameList";

//Fetch games
import { titleSearch } from "../api";

const Home = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const fetchGames = async () => {
    await axios
      .get(titleSearch(searchInput))
      .then((data) => {
        if (data.data.length > 0) {
          setGames(data.data);
          setError([]);
        } else {
          setError("No games found");
          setGames([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setGames([]);
      });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchInput) {
      fetchGames();
      setSearchInput("");
    }
  };

  return (
    <div className="home">
      <form onSubmit={submitSearch} id="search">
        <input
          type="text"
          onChange={searchHandler}
          value={searchInput}
          placeholder="Title..."
        />
        <button type="submit" id="btn-search">
          <img src={search} alt="search" />
        </button>
        <span id="close-search">
          <img src={close} alt="close" />
        </span>
      </form>
      {games.length === 0 && error.length === 0 && (
        <p className="homeText">
          Welcome to ReactGameHub, your ultimate gaming search destination!
          Level up your game discovery with our powerful search feature. Simply
          enter the title of your favorite game, and watch as the magic unfolds.{" "}
          <br />
          <br />
          Our intuitive search engine scours the gaming universe to bring you a
          treasure trove of results. Each result includes a captivating game
          thumbnail, the game&apos;s title, and its price. Whether you&apos;re a
          seasoned player or a rookie in the gaming realm, ReactGameHub is your
          gateway to an ever-expanding world of thrilling adventures. <br />
          <br />
          Don&apos;t miss out on the hottest releases, hidden gems, or classic
          favorites. Begin your gaming quest now and uncover the gaming
          experiences that await you. Enter your game title, press search, and
          let the gaming journey begin!
          <img src={gamer} alt="Gamer" />
        </p>
      )}

      {games.length > 0 && <GameList games={games} />}
      {error.length > 0 && <h3>{error}</h3>}
    </div>
  );
};

export default Home;
