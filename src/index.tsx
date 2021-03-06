import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import CClock from './components/clock';
import CCounter from './components/counter';
import CToggle from './components/toggleButton';
import CLogin from './components/loginButton';
import CBlog from './components/blog';
import CReservation from './components/form'
import CCalculator from './components/calculator'
import CSignUp from './components/singupdialog'
import CClicker from './components/clicker'
import CFriendStatus from './components/friendStatus'
import CClicker2 from './components/clicker2'

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

// eslint-disable-next-line
const App = () => {
  return (
    <>
      <CClock />
      <CCounter />
      <CToggle />
      <CLogin onLogin={console.log} />
      <CBlog posts={posts} />
      <CReservation />
      <CCalculator />
      <CSignUp />
    </>
  )
}

const HookApp = () => {
  return (
    <>
      <CClicker />
      <CFriendStatus />
      <CClicker2 initial={10} />
    </>
  );
}

ReactDOM.render(
  <HookApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
