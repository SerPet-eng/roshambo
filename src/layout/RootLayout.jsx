import { Outlet } from 'react-router-dom';
import RuleComponents from '../components/RuleComponents';
import ScoreBoard from '../components/ScoreBoard';
import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import { ACTIONS } from '../store/store';

export default function RootLayout() {
  const { dispatch } = usePageContext();
  const navigate = useNavigate();

  const toggleGoBack = () => {
    const userConfirm = confirm('You want to go back to the menu?');

    if (userConfirm) {
      navigate('/');
    }
  };

  const toggleRuleOpened = () => {
    return dispatch({ type: ACTIONS.TOGGLE_RULE });
  };

  return (
    <div>
      <ScoreBoard />

      <div className="section__button-group-utils">
        <button onClick={toggleGoBack}>GO BACK</button>
        <button onClick={toggleRuleOpened}>RULES</button>
      </div>

      <main>
        <RuleComponents />
        <Outlet />
      </main>
    </div>
  );
}
