import { useState } from "react";
import axios from "axios";

//Import images
import search from "../assets/search.png";
import close from "../assets/close.png";

//Import components
import GameList from "../components/GameList";

//Fetch games
import { titleSearch, idSearch } from "../api";

const Home = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const checkIfId = (val) => {
    let isnum = /^\d+$/.test(val);
    return isnum;
  };

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const fetchGamesByTitle = async () => {
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

  const fetchGamesById = async () => {
    await axios
      .get(idSearch(searchInput))
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
      if (checkIfId(searchInput)) {
        fetchGamesById();
      } else {
        fetchGamesByTitle();
      }
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
          placeholder="Title or GameId..."
        />
        <button type="submit" id="btn-search">
          <img src={search} alt="search" />
        </button>
        <span id="close-search">
          <img src={close} alt="close" />
        </span>
      </form>
      {games.length > 0 && <GameList games={games} />}
      {error.length > 0 && <h3>{error}</h3>}
    </div>
  );
};

export default Home;
