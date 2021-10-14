/* eslint-disable import/no-extraneous-dependencies */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BuyUSTModal } from '..';

const App = () => {
  return (
    <>
      <BuyUSTModal />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
