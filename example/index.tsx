/* eslint-disable import/no-extraneous-dependencies */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BuyUSTModal } from '..';

const App = () => {
  return (
    <>
      <h1>react-widget component examples</h1>
      <BuyUSTModal />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
