import { Link } from 'react-router-dom';
import { ACTIONS } from '../store/store';
import { usePageContext } from '../context/PageContext';
import { motion as m } from 'framer-motion';
import {
  fadeInX,
  fadeInY,
  fadeIn,
  fadeInYDelay,
} from '../animations/animation';

export default function Home() {
  const { dispatch } = usePageContext();

  const isPlayerAlive =
    JSON.parse(localStorage.getItem('player_alive')) || false;

  const togglePlayerAlive = () => {
    return dispatch({ type: ACTIONS.PLAYER_ALIVE, payload: true });
  };

  return (
    <main className="main">
      <header>
        <m.p
          className="main__quote"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          Let&apos;s play
        </m.p>
        <h1 className="main__title">
          <m.p variants={fadeInX(-20)} initial="hidden" animate="visible">
            RO
          </m.p>
          <m.p variants={fadeInY(-20)} initial="hidden" animate="visible">
            SHAM
          </m.p>
          <m.p variants={fadeInX(20)} initial="hidden" animate="visible">
            BO
          </m.p>
        </h1>
      </header>

      <div className="main__button-group">
        <Link to={'/start'}>
          <m.button
            variants={fadeInYDelay(2.5)}
            initial="hidden"
            animate="visible"
            className="main__button-group__button"
            onClick={togglePlayerAlive}
          >
            {isPlayerAlive ? 'Continue' : 'Play'}
          </m.button>
        </Link>

        <Link to={'/option'}>
          <m.button
            variants={fadeInYDelay(2)}
            initial="hidden"
            animate="visible"
            className="main__button-group__button"
          >
            Option
          </m.button>
        </Link>

        <Link to={'/credit'}>
          <m.button
            variants={fadeInYDelay(1)}
            initial="hidden"
            animate="visible"
            className="main__button-group__button"
          >
            Credit
          </m.button>
        </Link>
      </div>
    </main>
  );
}
