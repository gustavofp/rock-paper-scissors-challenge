import Hand from "../Hand";
import "./styles.scss";

const HandSelection = () => {
  return (
    <section className="hand-selection">
      <div className="hand-selection__item hand-selection__item--first">
        <Hand type={"paper"} />
      </div>
      <div className="hand-selection__item hand-selection__item--second">
        <Hand type={"rock"} />
      </div>
      <div className="hand-selection__item hand-selection__item--third">
        <Hand type={"scissors"} />
      </div>
    </section>
  );
};

export default HandSelection;
