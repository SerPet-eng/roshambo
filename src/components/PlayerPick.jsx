import { useState } from 'react';
import { usePageContext } from '../context/PageContext';
import { ACTIONS } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { getPositionStyle, RADIUS } from '../functions/shapes';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../animations/animation';

export default function PlayerPick() {
  const { state, dispatch } = usePageContext();
  const navigate = useNavigate();
  const [currentPick, setCurrentPick] = useState(null);
  const playerPicks = state?.picks;

  const handlePick = (index) => {
    setCurrentPick(index);
  };

  const handlePlay = () => {
    const confirmPlay = confirm(
      `Are you sure "${playerPicks[currentPick].name}" is your pick?`,
    );

    if (currentPick === null) {
      alert('Pick your play first.');
    }

    if (confirmPlay) navigate('/start/play');
    return dispatch({
      type: ACTIONS.PLAYER_PICK,
      payload: playerPicks[currentPick],
    });
  };

  return (
    <div className="section__pick">
      <m.div variants={fadeIn()} initial="hidden" animate="visible">
        {playerPicks.map((pick, index) => (
          <img
            key={index}
            src={pick.icon}
            alt={`Icon of ${pick.name}`}
            className={`section__pick__item section__pick__item--${pick.name.toLowerCase()} ${
              currentPick === index ? 'active' : ''
            }`}
            onClick={() => handlePick(index)}
            style={getPositionStyle(index, playerPicks.length, RADIUS)}
          />
        ))}
      </m.div>

      <button className="section__pick__button" onClick={handlePlay}>
        PLAY
      </button>
    </div>
  );
}
