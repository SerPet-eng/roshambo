import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import { ACTIONS } from '../store/store';

const navigate = useNavigate();
const { dispatch } = usePageContext();

export const toggleGoBack = () => {
  const userConfirm = confirm('You want to go back to the menu?');

  if (userConfirm) {
    navigate('/');
  }
};

export const toggleRuleOpened = () => {
  return dispatch({ type: ACTIONS.TOGGLE_RULE });
};
