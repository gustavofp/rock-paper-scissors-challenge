import { useRecoilValue } from "recoil";
import { selectedHand } from "../../state";
import HandSelection from "../HandSelection";
import GameResults from "../GameResults";

const GameBoard = () => {
  const selectedHandState = useRecoilValue(selectedHand);

  return (
    <section className="game-board">
      <div className="game-board__wrapper">
        {!selectedHandState ? <HandSelection /> : <GameResults />}
      </div>
    </section>
  );
};

export default GameBoard;
