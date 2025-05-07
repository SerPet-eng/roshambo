import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from './pages/Home';
import PickDisplay from './components/PickDisplay';

const Option = lazy(() => import('./pages/Option'));
const Credit = lazy(() => import('./pages/Credit'));
const GamePlay = lazy(() => import('./pages/GamePlay'));

const Loading = lazy(() => import('./events/Loading'));
const NotFound = lazy(() => import('./events/NotFound'));

import RootLayout from './layout/RootLayout';

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/option"
        element={
          <Suspense fallback={<Loading />}>
            <Option />
          </Suspense>
        }
      />
      <Route
        path="/credit"
        element={
          <Suspense fallback={<Loading />}>
            <Credit />
          </Suspense>
        }
      />

      <Route element={<RootLayout />}>
        <Route
          path="/start"
          element={
            <Suspense fallback={<Loading />}>
              <GamePlay />
            </Suspense>
          }
        />

        <Route
          path="/start/play"
          element={
            <Suspense fallback={<Loading />}>
              <PickDisplay />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}
