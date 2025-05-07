import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import { ACTIONS } from '../store/store';

export default function Option() {
  const { state, dispatch } = usePageContext();
  const navigate = useNavigate();

  const isHardMode = state.isHardMode;
  const isDarkMode = state.isDarkMode;

  const toggleHardMode = () => {
    const confirmHardMode = confirm('You want to change the difficulty?');

    if (confirmHardMode) {
      dispatch({ type: ACTIONS.TOGGLE_DIFFICULTY });

      // Reset scores after switching difficulty
      dispatch({ type: ACTIONS.RESET_SCORES });
      dispatch({ type: ACTIONS.PLAYER_ALIVE, payload: false });
    }
  };

  const toggleDarkMode = () => {
    return dispatch({ type: ACTIONS.TOGGLE_THEME });
  };

  const toggleBack = () => {
    return navigate('/');
  };

  return (
    <section className="option">
      <h1>OPTION</h1>
      <button onClick={toggleHardMode}>
        {isHardMode ? 'HARD MODE' : 'EASY MODE'}
      </button>

      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'DARK THEME' : 'LIGHT THEME'}
      </button>

      <button onClick={toggleBack}>CLOSE</button>
    </section>
  );
}
