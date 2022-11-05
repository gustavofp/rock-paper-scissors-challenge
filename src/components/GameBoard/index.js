import HandSelection from "../HandSelection";

const GameBoard = () => {
  return (
    <section className="game-board">
      <div className="game-board__wrapper">
        <HandSelection />
      </div>
    </section>
  );
};

export default GameBoard;
