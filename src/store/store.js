export const ACTIONS = {
  TOGGLE_DIFFICULTY: 'TOGGLE_DIFFICULTY',
  TOGGLE_THEME: 'TOGGLE_THEME',
  TOGGLE_RULE: 'TOGGLE_RULE',
  PLAYER_ALIVE: 'PLAYER_ALIVE',
  PLAYER_PICK: 'PLAYER_PICK',
  HOUSE_PICK: 'HOUSE_PICK',
  SET_PICKS: 'SET_PICKS',
  PLAYER_WINS: 'PLAYER_WINS',
  HOUSE_WINS: 'HOUSE_WINS',
  TIE: 'TIE',
  ERROR: 'ERROR',
  RESULT: 'RESULT',
  RESET_SCORES: 'RESET_SCORES',
};

export const initialState = {
  picks: [],
  player_alive: false,
  player_pick: [],
  player_score: JSON.parse(localStorage.getItem('player_score')) || 0,
  house_pick: [],
  house_score: JSON.parse(localStorage.getItem('house_score')) || 0,
  result: '',
  isHardMode: JSON.parse(localStorage.getItem('isHardMode')) || false,
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,
  isRuleOpened: false,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    //* OPTIONS *//
    case ACTIONS.TOGGLE_DIFFICULTY:
      localStorage.setItem('isHardMode', JSON.stringify(!state.isHardMode));
      return {
        ...state,
        isHardMode: !state.isHardMode,
      };
    case ACTIONS.TOGGLE_THEME:
      localStorage.setItem('isDarkMode', JSON.stringify(!state.isDarkMode));
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case ACTIONS.TOGGLE_RULE:
      return {
        ...state,
        isRuleOpened: !state.isRuleOpened,
      };
    //* OPTIONS *//

    //* WHEN THE GAME STARTS *//
    case ACTIONS.PLAYER_ALIVE:
      localStorage.setItem('player_alive', JSON.stringify(action.payload));
      return {
        ...state,
        player_alive: action.payload,
      };
    //* WHEN THE GAME STARTS *//

    //* PLAYER & HOUSE PICKS*//
    case ACTIONS.PLAYER_PICK:
      return { ...state, player_pick: action.payload };
    case ACTIONS.HOUSE_PICK:
      return { ...state, house_pick: action.payload };
    //* PLAYER & HOUSE PICKS*//

    //* PLAYER & HOUSE CONDITIONS*//
    case ACTIONS.PLAYER_WINS:
      localStorage.setItem(
        'player_score',
        JSON.stringify(state.player_score + 1),
      );
      return {
        ...state,
        player_score: state.player_score + 1,
        result: 'YOU WIN!',
      };
    case ACTIONS.HOUSE_WINS:
      localStorage.setItem('house_pick', JSON.stringify(state.house_pick + 1));
      return {
        ...state,
        house_score: state.house_score + 1,
        result: 'HOUSE WIN!',
      };
    case ACTIONS.TIE:
      return { ...state, result: "IT'S A TIE!" };
    case ACTIONS.RESET_SCORES:
      localStorage.setItem('player_score', JSON.stringify(0));
      localStorage.setItem('house_score', JSON.stringify(0));
      localStorage.setItem('player_alive', JSON.stringify('false'));

      return { ...state, player_score: 0, house_score: 0 };
    //* PLAYER & HOUSE CONDITIONS*//

    case ACTIONS.SET_PICKS:
      return { ...state, picks: action.payload };
    case ACTIONS.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
