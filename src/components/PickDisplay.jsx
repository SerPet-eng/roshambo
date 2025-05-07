import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import { ACTIONS } from '../store/store';

export default function PickDisplay() {
  const { state, dispatch } = usePageContext();
  const navigate = useNavigate();

  const picks = state?.picks;
  const playerPick = state?.player_pick.name;
  const playerPickIcon = state?.player_pick.icon;
  const housePick = state?.house_pick.name;
  const housePickIcon = state?.house_pick.icon;
  const playResult = state?.result;

  const gethousePick = () => {
    const randomizedPick = picks[Math.floor(Math.random() * picks.length)];

    return dispatch({ type: ACTIONS.HOUSE_PICK, payload: randomizedPick });
  };

  useEffect(() => {
    if (playerPick) gethousePick();
  }, [playerPick]);

  useEffect(() => {
    if (!playerPick || !housePick) return; // Ensure the player has picked something before playing

    if (playerPick === housePick) {
      return dispatch({ type: ACTIONS.TIE });
    } else if (
      (playerPick === 'rock' && housePick === 'scissor') ||
      (playerPick === 'paper' && housePick === 'rock') ||
      (playerPick === 'scissor' && housePick === 'paper') ||
      (playerPick === 'lizard' && housePick === 'paper') ||
      (playerPick === 'lizard' && housePick === 'spock') ||
      (playerPick === 'spock' && housePick === 'scissor') ||
      (playerPick === 'spock' && housePick === 'rock') ||
      (playerPick === 'scissor' && housePick === 'lizard') ||
      (playerPick === 'paper' && housePick === 'spock')
    ) {
      return dispatch({ type: ACTIONS.PLAYER_WINS });
    } else {
      return dispatch({ type: ACTIONS.HOUSE_WINS });
    }
  }, [housePick]);

  const redirectBack = () => {
    navigate('/start');
  };

  // console.log(`This is the result: ${playResult}`);
  // console.log(`House Pick: ${housePick}`);
  // console.log(`Player Pick: ${playerPick}`);

  return (
    <section className="section__pick-group">
      <div className="section__pick-group__display">
        <div className="section__pick-group__display__players">
          <img
            src={playerPickIcon}
            alt={`Icon of ${playerPick}`}
            className={`section__pick-group__display__players__icon--${playerPick} item`}
          />
          <p className="section__pick-group__display__player__text">
            YOU PICKED
          </p>
        </div>

        <div className="section__pick-group__display__players">
          <img
            src={housePickIcon}
            alt={`Icon of ${housePick}`}
            className={`section__pick-group__display__players__icon--${housePick} item`}
          />
          <p className="section__pick-group__display__player__text">
            THE HOUSE PICKED
          </p>
        </div>
      </div>

      <div className="section__pick-group__conclusion">
        <p className="section__pick-group__conclusion__title">{playResult}</p>
        <button
          className="section__pick-group__conclusion__button"
          onClick={redirectBack}
        >
          Play Again?
        </button>
      </div>
    </section>
  );
}
