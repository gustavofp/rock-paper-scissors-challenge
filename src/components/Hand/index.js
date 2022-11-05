import "./styles.scss";
import PaperIcon from "./icon-paper.svg";
import RockIcon from "./icon-rock.svg";
import ScissorsIcon from "./icon-scissors.svg";
import { useEffect, useState } from "react";

const Hand = ({ type }) => {
  const [icon, setIcon] = useState();

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
    <div className={`hand hand--${type}`}>
      <img className={`hand__icon`} src={icon} />
    </div>
  );
};

export default Hand;
