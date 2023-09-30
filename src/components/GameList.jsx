//Import components
import Game from "./Game";

const GameList = (games) => {
  const gamesArray = Object.values(games);
  return (
    <>
      {gamesArray.length ? (
        gamesArray.map((game) =>
          game.map((insideGame) => (
            <Game key={insideGame.gameID} game={insideGame} />
          ))
        )
      ) : (
        <>
          <h3>Loading...</h3>
        </>
      )}
    </>
  );
};

export default GameList;
