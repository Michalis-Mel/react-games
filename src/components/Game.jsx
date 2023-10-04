const Game = (game) => {
  return (
    <div className="game">
      <div className="game_con">
        <img src={game.game.thumb} alt={game.game.external} />
        <h3>{game.game.external}</h3>
        {game.game.steamAppID && <h4>Steam App Id: {game.game.steamAppID}</h4>}

        <h5>{game.game.cheapest} €</h5>
      </div>
    </div>
  );
};

export default Game;
