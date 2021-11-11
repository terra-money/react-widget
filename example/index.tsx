/* eslint-disable import/no-extraneous-dependencies */
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BuyUST } from '..';

const App = () => (
  <>
    <h1>react-widget component examples</h1>
    <BuyUST />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
