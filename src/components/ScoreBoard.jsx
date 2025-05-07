import { usePageContext } from '../context/PageContext';

export default function ScoreBoard() {
  const { state } = usePageContext();

  const picks = state?.picks;
  const score = state?.player_score;

  return (
    <div className="section__score-board">
      <div>
        {picks.map((pick, index) => {
          return (
            <p key={index} className="section__score-board__text">
              {pick.name}
            </p>
          );
        })}
      </div>

      <div className="section__score-board__hero">
        <p className="section__score-board__hero__text">SCORE</p>
        <p className="section__score-board__hero__number">{score}</p>
      </div>
    </div>
  );
}
