import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppState, AppUpdate, CrossWindowState } from '../interfaces';
import './App.css';
import { Main } from './views/Main';
import { TermsOfService } from './views/TermsOfService';
import { HowTo } from './views/HowTo';
import { AvatarList } from './views/AvatarList';

const App: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, updateState, crossWindowState }) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              state={state}
              updateState={updateState}
              crossWindowState={crossWindowState}
            />
          }
        />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/choose-avatar" element={<AvatarList beforePlay />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
