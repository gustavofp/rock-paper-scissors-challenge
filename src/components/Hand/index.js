import "./styles.scss";
import PaperIcon from "./icon-paper.svg";
import RockIcon from "./icon-rock.svg";
import ScissorsIcon from "./icon-scissors.svg";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { selectedHand } from "../../state";

const Hand = ({ type, clickable = true }) => {
  const [icon, setIcon] = useState();
  const setSelectedHand = useSetRecoilState(selectedHand);

  const handleSelection = (type) => {
    if (!clickable) return;
    setSelectedHand(type);
  };

  const getIcon = (type) => {
    switch (type) {
      case "paper":
        return PaperIcon;
      case "rock":
        return RockIcon;
      case "scissors":
        return ScissorsIcon;
      default:
        break;
    }
  };

  useEffect(() => {
    const icon = getIcon(type);
    setIcon(icon);
  }, [type]);

  return (
    <a onClick={(e) => handleSelection(type)}>
      <div className={`hand hand--${type}`}>
        <img className={`hand__icon`} src={icon} />
      </div>
    </a>
  );
};

export default Hand;
