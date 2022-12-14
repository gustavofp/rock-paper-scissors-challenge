import { useRecoilValue } from "recoil";
import { score } from "../../state";

const GameInfo = () => {
  const scoreState = useRecoilValue(score);
  return (
    <section className="game-info">
      <div className="game-info__wrapper">
        <div className="game-info__text">
          <h1 className="game-info__text--uppercase">Paper</h1>
          <h1 className="game-info__text--uppercase">Rock</h1>
          <h1 className="game-info__text--uppercase">Scissors</h1>
        </div>
        <div className="game-info__score">
          <div className="box">
            <p className="box__title">Score</p>
            <h1 className="box__score">{scoreState}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInfo;
