import { initialState, reducer } from '../store/store';
import {
  useReducer,
  useContext,
  createContext,
  useMemo,
  useEffect,
} from 'react';
import { ACTIONS } from '../store/store';
import { EASY_PICK, HARD_PICK } from '../store/Picks';

const PageProvider = createContext(null);

export function usePageContext() {
  return useContext(PageProvider);
}

export default function PageContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isDarkMode = state.isDarkMode;

  useEffect(() => {
    try {
      const checkIfHardMode = () => {
        if (!state.isHardMode) {
          dispatch({ ...state, type: ACTIONS.SET_PICKS, payload: EASY_PICK });
        } else {
          dispatch({ ...state, type: ACTIONS.SET_PICKS, payload: HARD_PICK });
        }
      };

      checkIfHardMode();
      dispatch({ ...state, type: ACTIONS.ERROR, payload: null });
    } catch (error) {
      console.error(error);
      dispatch({ ...state, type: ACTIONS.ERROR, payload: error });
    }
  }, [state.isHardMode]);

  useEffect(() => {
    const rootElement = document.getElementById('root');

    if (isDarkMode) {
      rootElement.classList.add('dark-mode');
      rootElement.classList.remove('light-mode');
    } else {
      rootElement.classList.add('light-mode');
      rootElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <PageProvider.Provider value={value}>{children}</PageProvider.Provider>
  );
}
