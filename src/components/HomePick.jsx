import { usePageContext } from '../context/PageContext';
import { ACTIONS } from '../store/store';

export default function HomePick() {
  const { state, dispatch } = usePageContext();
  const homePicks = state.picks;

  const handlePick = () => {
    const randomize = Math.floor(Math.random() * homePicks.length);

    return dispatch({
      type: ACTIONS.HOUSE_PICK,
      payload: homePicks[randomize],
    });
  };

  //   console.log(state.house_pick);

  return (
    <div>
      <h1>Home Picks</h1>
      {homePicks.map((pick, index) => {
        return <p key={index}>{pick}</p>;
      })}
      <button onClick={handlePick}>Click Me</button>
    </div>
  );
}
