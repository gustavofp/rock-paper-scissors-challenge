import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { score, selectedHand } from "../../state";
import Hand from "../Hand";
import "./styles.scss";

const GameResults = () => {
  const [winner, setWinner] = useState(null);
  const [cpuHand, setCpuHand] = useState(null);
  const selectedHandState = useRecoilValue(selectedHand);
  const [scoreState, setScoreState] = useRecoilState(score);
  const handReseter = useResetRecoilState(selectedHand);

  const makeRandomPlay = () => {
    const random = Math.floor(Math.random() * 3);
    const hand = ["rock", "paper", "scissors"][random];
    return hand;
  };

  const handWinsAgainst = (hand) => {
    if (hand === "rock") return "scissors";
    if (hand === "paper") return "rock";
    if (hand === "scissors") return "paper";
  };

  const getWinner = (cpuHand, selectedHand) => {
    if (!cpuHand || !selectedHand) return;
    if (cpuHand === selectedHand) return "draw";
    const hasCpuWon = selectedHand === handWinsAgainst(cpuHand);
    return hasCpuWon ? "cpu" : "player";
  };

  useEffect(() => {
    const cpuHand = makeRandomPlay();
    setCpuHand(cpuHand);
  }, []);

  useEffect(() => {
    const winner = getWinner(cpuHand, selectedHandState);
    setWinner(winner);
  }, [cpuHand]);

  useEffect(() => {
    const newScore = scoreState + 1;
    if (winner === "player") {
      setScoreState(newScore);
    }
  }, [winner]);

  const getWinnerText = (winner) => {
    if (winner === "draw") return "Draw";
    return `${winner} wins`;
  };

  const resetGame = () => {
    handReseter();
  };

  return (
    <section className="game-results">
      <div className="game-results__you">
        <p className="game-results__choice-text">You picked</p>
        <Hand type={selectedHandState} clickable={false} />
      </div>
      <div className="game-results__info">
        <h1 className="game-results__choice-text">{`${getWinnerText(
          winner
        )}`}</h1>
        <button className="game-results__button" onClick={(e) => resetGame()}>
          Play Again
        </button>
      </div>
      <div className="game-results__cpu">
        <p className="game-results__choice-text">The house picked</p>
        {cpuHand && <Hand type={cpuHand} clickable={false} />}
      </div>
    </section>
  );
};

export default GameResults;
