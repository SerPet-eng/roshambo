import { usePageContext } from '../context/PageContext';
import { getPositionStyle, RADIUS } from '../functions/shapes';
import { ACTIONS } from '../store/store';
import RuleImageEasy from '../../design/RulesPictureEasy.png';
import RuleImageHard from '../../design/RulesPictureHard.png';

export default function RuleComponents() {
  const { state, dispatch } = usePageContext();
  const picks = state?.picks;
  const isHardMode = state?.isHardMode;
  const isRuleOpened = state?.isRuleOpened;

  const handleRuleOpened = () => {
    return dispatch({ type: ACTIONS.TOGGLE_RULE });
  };

  return (
    <div className={`section__rules ${isRuleOpened ? 'open' : ''}`}>
      <h1 className="section__rules__title">RULES</h1>

      {isHardMode ? (
        <img
          src={RuleImageHard}
          alt="Image of Rules for Hard Mode"
          style={{ width: '300px', height: '300px' }}
        />
      ) : (
        <img
          src={RuleImageEasy}
          alt="Image of Rules for Easy Mode"
          style={{ width: '300px', height: '300px' }}
        />
      )}

      {/* {picks.map((pick, index) => (
        <img
          key={index}
          src={pick.icon}
          alt={`Icon of ${pick.name}`}
          className="section__rules__icon"
          style={getPositionStyle(index, picks.length, RADIUS)}
        />
      ))} */}
      <button className="section__rules__button" onClick={handleRuleOpened}>
        CLOSE
      </button>
    </div>
  );
}
