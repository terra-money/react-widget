/* eslint-disable import/no-extraneous-dependencies */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BuyUST, TxDescription } from '..';

const App = () => {
  const CONFIG = {
    name: 'testnet',
    URL: 'https://bombay-lcd.terra.dev',
    chainID: 'bombay-12',
  };

  return (
    <>
      <h1>react-widget component examples</h1>
      <BuyUST />
      <TxDescription network={CONFIG}>
        Send 1234567uluna to terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky
      </TxDescription>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
